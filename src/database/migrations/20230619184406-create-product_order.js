"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product_order", {
      product_id: { type: Sequelize.INTEGER, references: { model: "products", key: "id" } },
      order_id: { type: Sequelize.INTEGER, references: { model: "orders", key: "id" } },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("product_order");
  },
};

