const { DataTypes } = require("sequelize");
const database = require("../database");
const Product = require("./Product");
const Order = require("./Order");
const Employee = require("./Employee");
const ProductOrder = database.define(
  "ProductOrder",
  {
    product_id: { type: DataTypes.INTEGER, references: { model: "products", key: "id" } },
    order_id: { type: DataTypes.INTEGER, references: { model: "orders", key: "id" } },
  },
  { tableName: "product_order" },
);

Order.belongsToMany(Product, { through: ProductOrder, as: "products" });
Product.belongsToMany(Order, { through: ProductOrder, as: "orders" });

module.exports = ProductOrder;
