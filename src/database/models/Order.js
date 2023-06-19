const { DataTypes } = require("sequelize");
const Employee = require("./Employee");
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

Order.belongsTo(Employee, {
  foreignKey: "employee_id",
  as: "employee",
});
Employee.hasMany(Order, {
  foreignKey: "employee_id",
  as: "orders",
});

module.exports = Order;
