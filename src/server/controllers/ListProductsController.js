const Product = require("../../database/models/Product");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { product_id } = req.params;
  try {
    const products = product_id
      ? (await Product.findByPk(product_id, { logging: false })).toJSON()
      : (await Product.findAll({ logging: false })).map((prod) => prod.toJSON());
    res.status(200).json({ products, error: null });
  } catch (error) {
    res.status(400).json({ error });
  }
};
