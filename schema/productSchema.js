const Sequelize = require('sequelize');
const {db} = require('../config/database');

const Product = db.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Pizza"
    },
    image:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    popular: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
    }
});

Product.sync().then((res) => {
 console.log('Product Table Create Succesfully');
}).catch((err) => {
console.log('Error in creating Table', err);
})
module.exports = Product;
