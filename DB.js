const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('basetodos', 'root', '', {
    host: 'MySQL-5.7',
    dialect: 'mysql'
});

module.exports = sequelize;