import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' }); // Load env from root

// Import routes after loading env so they can use process.env values
const { default: mediaRoutes } = await import('./routes/mediaRoutes.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '150mb' }));
app.use(express.urlencoded({ limit: '150mb', extended: true }));

app.use('/api/media', mediaRoutes);

app.get('/', (req, res) => {
    res.send('Portfolio Server is Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
