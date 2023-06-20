const Order = require("../../database/models/Order");
const Product = require("../../database/models/Product");
const ProductOrder = require("../../database/models/ProductOrder");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  let { order_id } = req.params;

  try {
    const foundOrders = order_id
      ? (
          await ProductOrder.findAll({
            where: { order_id },
            include: [
              { model: Order, as: "order" },
              { model: Product, as: "product" },
            ],
          })
        ).map((doc) => doc.toJSON())
      : (
          await ProductOrder.findAll({
            include: [
              { model: Order, as: "order" },
              { model: Product, as: "product" },
            ],
          })
        ).map((doc) => doc.toJSON());
    res.status(200).json({ foundOrders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
