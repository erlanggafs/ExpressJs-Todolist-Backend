const { Sequelize } = require("sequelize")
const dbase =  new Sequelize('tes', 'root','',{
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = dbase;