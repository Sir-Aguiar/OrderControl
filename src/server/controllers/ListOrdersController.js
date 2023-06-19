const Order = require("../../database/models/Order");
const Product = require("../../database/models/Product");
const ProductOrder = require("../../database/models/ProductOrder");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  try {
    const foundOrders = (
      await ProductOrder.findAll({
        include: [
          { model: Order, as: "order" },
          { model: Product, as: "product" },
        ],
      })
    ).map((a) => a.toJSON());
    res.status(200).json({ foundOrders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
