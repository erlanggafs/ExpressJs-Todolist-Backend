const { underscoredIf } = require('sequelize/lib/utils');
const dbase = require ('../config/Database.js');
const { Sequelize , DataTypes} = require('sequelize');

const Todo = dbase.define('todo',
    {
    
    //daftar atribut db
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {type: DataTypes.STRING, },
},
{
    freezeTableName: true ,
    timestamps: true,
    underscored: true
}
);

module.exports = Todo;
(async() => {
    await dbase.sync()
})();