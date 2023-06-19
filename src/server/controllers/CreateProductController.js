const Product = require("../../database/models/Product");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { description, price, brand, type, exp_date } = req.body;
  let productProperties = { description, price, brand, type };
  productProperties.exp_date = new Date(exp_date);
  if (
    typeof price !== "number" ||
    typeof brand !== "string" ||
    typeof type !== "string" ||
    typeof description !== "string" ||
    typeof exp_date !== "string"
  ) {
    return res.status(400).json({ error: "Os dados inseridos são insuficientes ou inválidos!" });
  }
  if (productProperties.exp_date == "Invalid Date") {
    return res.status(400).json({ error: "Por favor, insira  data no formato yyyy/mm/dd" });
  }
  if (productProperties.exp_date * 1000 < new Date() * 1000) {
    return res.status(400).json({ error: "Por favor, insira uma data válida" });
  }
  try {
    const created = await Product.create(productProperties, { logging: false });
    res.status(200).json({ created,error: null });
  } catch (error) {
    res.status(500).json({ error });
  }
};
