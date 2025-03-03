const { underscoredIf } = require('sequelize/lib/utils');
const dbase = require('../config/Database.js');
const { Sequelize, DataTypes } = require('sequelize');

const User = dbase.define('user',
    {
    //daftar atribut db
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jurusan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kelas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nisn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    tahunLulus: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps: true,
    underscored: true
}
);

module.exports = User;
(async() => {
    await dbase.sync()
})();