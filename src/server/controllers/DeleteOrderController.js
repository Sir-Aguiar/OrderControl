const Order = require("../../database/models/Order");
const ProductOrder = require("../../database/models/ProductOrder");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  let { order_id } = req.params;
  if (!order_id) {
    return res.status(400).json({ error: "Produto não informado" });
  }
  order_id = Number(order_id);
  if (isNaN(order_id)) {
    return res.status(400).json({ error: "Produto inválido" });
  }
  try {
    await ProductOrder.destroy({ where: { order_id }, logging: false });
    await Order.destroy({ where: { id: order_id }, logging: false });
    res.status(200).json({ error: null });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
