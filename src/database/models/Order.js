const { DataTypes } = require("sequelize");
const database = require("../database");

const Order = database.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee,
        key: "id",
      },
    },
  },
  { tableName: "orders" },
);
module.exports = Order;
