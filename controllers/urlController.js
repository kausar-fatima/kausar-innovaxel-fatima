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

// Retrieve Original URL and increment access count
exports.getOriginalUrl = async (req, res) => {
    const { shortCode } = req.params;
    try {
        const urlDoc = await Url.findOneAndUpdate(
            { shortCode },
            { $inc: { accessCount: 1 } },
            { new: true }
        );
        if (!urlDoc) {
            return res.status(404).json({ error: 'Short URL not found' });
        }
        res.status(200).json(urlDoc);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update URL
exports.updateShortUrl = async (req, res) => {
    const { shortCode } = req.params;
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    try {
        const updatedUrl = await Url.findOneAndUpdate(
            { shortCode },
            { url, updatedAt: new Date() },
            { new: true }
        );
        if (!updatedUrl) {
            return res.status(404).json({ error: 'Short URL not found' });
        }
        res.status(200).json(updatedUrl);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete URL
exports.deleteShortUrl = async (req, res) => {
    const { shortCode } = req.params;
    try {
        const deleted = await Url.findOneAndDelete({ shortCode });
        if (!deleted) {
            return res.status(404).json({ error: 'Short URL not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

