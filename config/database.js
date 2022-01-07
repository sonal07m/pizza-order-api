const Sequelize = require('sequelize');

const db= new Sequelize('B1oijZiwmq', 'B1oijZiwmq', 'PkOBoaUwSt', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 3306,
});

module.exports = {db};
