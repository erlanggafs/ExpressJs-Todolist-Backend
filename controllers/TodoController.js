const Todo = require('../models/Todo.js');

// SHOW ALL DATA
exports.todos = async (req, res) => {
    try {
        const response = await Todo.findAll({ order: [['id', 'DESC']] });
        res.status(200).json({
            status: "200",
            message: "Data retrieved successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};

// SHOW DETAIL ONE DATA
exports.findById = async (req, res) => {
    try {
        const response = await Todo.findOne({ where: { id: req.params.id } });
        if (!response) {
            return res.status(404).json({ status: "404", message: "Data not found" });
        }
        res.status(200).json({
            status: "200",
            message: "Data retrieved successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};

// SAVE NEW DATA
exports.store = async (req, res) => {
    try {
        const response = await Todo.create({
            title: req.body.title,
            description: req.body.description,
        });
        res.status(201).json({
            status: "201",
            message: "Data created successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};

// UPDATE DATA
exports.update = async (req, res) => {
    try {
        const response = await Todo.update(
            {
                title: req.body.title,
                description: req.body.description,
            },
            { where: { id: req.params.id } }
        );

        if (response[0] === 0) {
            return res.status(404).json({ status: "404", message: "Data not found or no changes made" });
        }

        res.status(200).json({
            status: "200",
            message: "Data updated successfully"
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};

// DELETE DATA
exports.delete = async (req, res) => {
    try {
        const response = await Todo.destroy({ where: { id: req.params.id } });

        if (response === 0) {
            return res.status(404).json({ status: "404", message: "Data not found" });
        }

        res.status(200).json({
            status: "200",
            message: "Data deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ status: "500", message: error.message });
    }
};
