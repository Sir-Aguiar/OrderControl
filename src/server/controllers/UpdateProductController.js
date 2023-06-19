const Product = require("../../database/models/Product");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { updates } = req.body;
  let { product_id } = req.params;
  if (!product_id) {
    return res.status(400).json({ error: "Produto não informado" });
  }
  product_id = Number(product_id);
  if (isNaN(product_id)) {
    return res.status(400).json({ error: "Produto inválido" });
  }

  try {
    const affectedProducts = await Product.update(updates, { logging: false, where: { id: product_id } });
    res.status(200).json({ error: null });
  } catch (error) {
    res.status(500).json({ error });
  }
};
