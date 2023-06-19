const { DataTypes } = require("sequelize");
const database = require("../database");
const Employee = database.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    escolarity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "employees" },
);
module.exports = Employee;
