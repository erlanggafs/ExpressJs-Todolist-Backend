const User = require('../models/User.js');

// SHOW ALL DATA
exports.getAllUsers = async (req, res) => {
    try {
        const response = await User.findAll({ order: [['id', 'DESC']] });
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
exports.getUserById = async (req, res) => {
    try {
        const response = await User.findOne({ where: { id: req.params.id } });
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
exports.createUser = async (req, res) => {
    try {
        const response = await User.create({
            username: req.body.username,
            fullName: req.body.fullName,
            jurusan: req.body.jurusan,
            kelas: req.body.kelas,
            nisn: req.body.nisn,
            tahunLulus: req.body.tahunLulus // Format: YYYY-MM-DD
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
exports.updateUser = async (req, res) => {
    try {
        const response = await User.update(
            {
                username: req.body.username,
                fullName: req.body.fullName,
                jurusan: req.body.jurusan,
                kelas: req.body.kelas,
                nisn: req.body.nisn,
                tahunLulus: req.body.tahunLulus
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
exports.deleteUser = async (req, res) => {
    try {
        const response = await User.destroy({ where: { id: req.params.id } });

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
