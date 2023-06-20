const Order = require("../../database/models/Order");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  let { order_id } = req.params;
  const { status } = req.body;
  if (!order_id) {
    return res.status(400).json({ error: "Produto não informado" });
  }

  order_id = Number(order_id);

  if (isNaN(order_id)) {
    return res.status(400).json({ error: "Produto inválido" });
  }

  try {
    await Order.update({ status }, { logging: false, where: { id: order_id } });
    res.status(200).json({ erro: null });
  } catch (error) {
    res.status(500).json({ error });
  }
};
