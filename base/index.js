const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize('users',
    'root',
    'Mak7', {
        host: 'localhost',
        dialect: 'mysql'
    });
