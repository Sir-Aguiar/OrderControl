const { DataTypes } = require("sequelize");
const Order = require("./Order");
const database = require("../database");

const Product = database.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exp_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { tableName: "products" },
);



module.exports = Product;
