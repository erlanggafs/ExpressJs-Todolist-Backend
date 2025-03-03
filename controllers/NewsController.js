const News = require('../models/News.js');

// SHOW ALL NEWS
exports.getAllNews = async (req, res) => {
    try {
        const response = await News.findAll({ order: [['id', 'DESC']] });
        res.status(200).json({
            status: "200",
            message: "News retrieved successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};

// SHOW ONE NEWS BY ID
exports.getNewsById = async (req, res) => {
    try {
        const response = await News.findOne({ where: { id: req.params.id } });
        if (!response) {
            return res.status(404).json({ status: "404", message: "News not found" });
        }
        res.status(200).json({
            status: "200",
            message: "News retrieved successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};

// CREATE NEW NEWS
exports.createNews = async (req, res) => {
    try {
        const response = await News.create({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            category: req.body.category,
            publishedAt: req.body.publishedAt, // Format: YYYY-MM-DD HH:mm:ss
            imageUrl: req.body.imageUrl
        });
        res.status(201).json({
            status: "201",
            message: "News created successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};

// UPDATE NEWS
exports.updateNews = async (req, res) => {
    try {
        const response = await News.update(
            {
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                category: req.body.category,
                publishedAt: req.body.publishedAt,
                imageUrl: req.body.imageUrl
            },
            { where: { id: req.params.id } }
        );

        if (response[0] === 0) {
            return res.status(404).json({ status: "404", message: "News not found or no changes made" });
        }

        res.status(200).json({
            status: "200",
            message: "News updated successfully"
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};

// DELETE NEWS
exports.deleteNews = async (req, res) => {
    try {
        const response = await News.destroy({ where: { id: req.params.id } });

        if (response === 0) {
            return res.status(404).json({ status: "404", message: "News not found" });
        }

        res.status(200).json({
            status: "200",
            message: "News deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};
