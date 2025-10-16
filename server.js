import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, 'dist')));

// SPA routes: serve index.html for all unmatched paths
app.use((req, res) => {
    // List of actual routes your SPA handles
    const spaRoutes = ['/'];

    if (spaRoutes.includes(req.path)) {
        res.sendFile(path.join(__dirname, '', 'index.html'));
    } else {
        // 404 for everything else
        res.status(404).sendFile(path.join(__dirname, '', '404.html'));
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
