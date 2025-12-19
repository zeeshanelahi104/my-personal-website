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

// GET /api/media/:projectId - fetch media tagged with projectId
router.get('/:projectId', async (req, res) => {
    try {
        const { projectId } = req.params;

        if (!process.env.CLOUDINARY_CLOUD_NAME) {
            throw new Error('CLOUDINARY_CLOUD_NAME is not set');
        }

        const resources = await cloudinary.search
            .expression(`tags:${projectId}`)
            .sort_by('created_at', 'desc')
            .max_results(100)
            .execute();

        const media = (resources.resources || []).map((resource) => ({
            public_id: resource.public_id,
            url: resource.secure_url,
            type: resource.resource_type === 'video' || resource.format === 'mp4' ? 'video' : 'image',
            width: resource.width,
            height: resource.height,
            bytes: resource.bytes,
            created_at: resource.created_at,
        }));

        res.json(media);
    } catch (error) {
        console.error('Error fetching media:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// POST /api/media/delete - delete by public_id
router.post('/delete', async (req, res) => {
    try {
        const { public_id } = req.body;

        if (!public_id) {
            return res.status(400).json({ message: 'public_id is required' });
        }

        const result = await cloudinary.uploader.destroy(public_id);

        if (result.result === 'ok') {
            res.json({ message: 'File deleted successfully', result });
        } else {
            res.status(400).json({ message: 'Failed to delete file', result });
        }
    } catch (error) {
        console.error('Error deleting media:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

export default router;
