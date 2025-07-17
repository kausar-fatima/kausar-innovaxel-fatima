const Url = require('../models/Url');
const { nanoid } = require('nanoid');

// Create Short URL
exports.createShortUrl = async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const shortCode = nanoid(6);
    try {
        const newUrl = await Url.create({ url, shortCode });
        res.status(201).json(newUrl);
    } catch (error) {
    console.error("Error creating URL:", error);
    res.status(500).json({ error: 'Server error', message: error.message });
}

};

