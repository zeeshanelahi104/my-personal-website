import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import path from 'path';

// Ensure env is loaded (in case index.js didn't load it early enough)
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const router = express.Router();

// Configure Cloudinary using env vars
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log('Cloudinary configured:', {
    cloud_name: !!process.env.CLOUDINARY_CLOUD_NAME,
    api_key: !!process.env.CLOUDINARY_API_KEY,
});

router.get('/all', async (req, res) => {
    try {
        console.log('--- Fetching All Media (Recursive) ---');

        // Use folder search which is more reliable for catching everything
        const resources = await cloudinary.search
            .expression('folder:portfolio/*')
            .with_field('tags')
            .with_field('context')
            .sort_by('created_at', 'desc')
            .max_results(500)
            .execute();

        console.log(`Cloudinary search (folder:portfolio/*) returned ${resources.resources?.length || 0} items`);

        // Final fallback: Resources API (if search index is lagging)
        let items = resources.resources || [];
        if (items.length === 0) {
            console.log('Search returned 0, falling back to Resources API...');
            const list = await cloudinary.api.resources({
                type: 'upload',
                prefix: 'portfolio/',
                max_results: 500,
                tags: true
            });
            items = list.resources || [];
            console.log(`Resources API returned ${items.length} items`);
        }

        const media = items.map((resource) => ({
            public_id: resource.public_id,
            url: resource.secure_url || resource.url,
            // Explicitly detect type
            type: resource.resource_type === 'video' || resource.format === 'mp4' ? 'video' : 'image',
            resource_type: resource.resource_type, // Keep raw resource_type for deletion
            width: resource.width,
            height: resource.height,
            bytes: resource.bytes,
            created_at: resource.created_at,
            tags: resource.tags || [],
        }));

        res.json(media);
    } catch (error) {
        console.error('Fetch All Media Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// Diagnostic route to see what's actually in Cloudinary
router.get('/test/debug-list', async (req, res) => {
    try {
        console.log('Running debug-list...');
        const result = await cloudinary.api.resources({
            max_results: 50,
            tags: true,
            context: true
        });
        res.json(result);
    } catch (error) {
        console.error('Debug list failed:', error);
        res.status(500).json(error);
    }
});

// GET /api/media/:projectId - specialized fetch
router.get('/:projectId', async (req, res) => {
    try {
        const { projectId } = req.params;

        const resources = await cloudinary.search
            .expression(`tags:${projectId}`)
            .sort_by('created_at', 'desc')
            .max_results(100)
            .execute();

        // Use the SAME mapping as /api/media/all
        const media = (resources.resources || []).map((resource) => ({
            public_id: resource.public_id,
            url: resource.secure_url || resource.url,
            type: resource.resource_type === 'video' || resource.format === 'mp4' ? 'video' : 'image',
            resource_type: resource.resource_type, // Add this
            width: resource.width,
            height: resource.height,
            bytes: resource.bytes,
            created_at: resource.created_at,
            tags: resource.tags || [],
        }));

        res.json(media); // Now returns same structure as /api/media/all
    } catch (error) {
        console.error('Fetch Project Media Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// POST /api/media/upload
router.post('/upload', async (req, res) => {
    try {
        const { file, projectId, resource_type = 'auto' } = req.body;

        if (!file || !projectId) {
            return res.status(400).json({ message: 'file and projectId are required' });
        }

        console.log(`Uploading to portfolio/${projectId}...`);

        const result = await cloudinary.uploader.upload(file, {
            folder: `portfolio/${projectId}`,
            tags: [projectId, 'portfolio'],
            resource_type: resource_type,
        });

        res.json({
            message: 'Upload successful',
            public_id: result.public_id,
            url: result.secure_url,
            resource_type: result.resource_type
        });
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ message: 'Upload Failed', error: error.message });
    }
});

// POST /api/media/delete - 100% Reliable Deletion
router.post('/delete', async (req, res) => {
    console.log('Deleting media...');
    try {
        const { public_id, resource_type } = req.body;
        console.log(public_id, resource_type);
        if (!public_id) {
            return res.status(400).json({ message: 'public_id is required' });
        }

        // Cloudinary needs the correct resource_type (image/video/raw) to delete successfully
        const rType = resource_type || 'image';

        console.log(`Deleting [${rType}]: ${public_id}`);

        const result = await cloudinary.uploader.destroy(public_id, {
            resource_type: rType,
            invalidate: true // Ensure CDN is cleared
        });

        console.log('Delete result:', result);

        if (result.result === 'ok') {
            res.json({ message: 'File deleted successfully', result });
        } else {
            res.status(400).json({ message: `Delete failed: ${result.result}`, result });
        }
    } catch (error) {
        console.error('Delete Route Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

export default router;
