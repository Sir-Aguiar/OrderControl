const { DataTypes } = require("sequelize");
const database = require("../database");
const Product = require("./Product");
const Order = require("./Order");
const Employee = require("./Employee");
const ProductOrder = database.define(
  "ProductOrder",
  {
    product_id: {
      type: DataTypes.INTEGER,
      references: { model: "products", key: "id" },
      primaryKey: true,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: { model: "orders", key: "id" },
      primaryKey: true,
      allowNull: false,
    },
  },
  { tableName: "product_order" },
);

Order.hasMany(ProductOrder, {
  foreignKey: "order_id",
});
ProductOrder.belongsTo(Order, { foreignKey: "order_id", as: "order" });
Product.hasMany(ProductOrder, {
  foreignKey: "product_id",
});
ProductOrder.belongsTo(Product, { foreignKey: "product_id", as: "product" });

module.exports = ProductOrder;
