const Sequelize = require('sequelize');
const {db} = require('../config/database');

const History = db.define('History', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pizzaName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    totalAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

History.sync().then((res) => {
    console.log('History Table Create Succesfully');
}).catch((err) => {
    console.log('Error in creating Table', err);
})
module.exports = History;
