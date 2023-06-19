const Order = require("../../database/models/Order");
const ProductOrder = require("../../database/models/ProductOrder");
const { findEmployee } = require("../../utils/get-employee");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { products, status, employee_id } = req.body;

  if (!products || !status || !employee_id || typeof products !== "object" || products.length <= 0) {
    return res.status(400).json({ error: "Não foram inseridas informações o suficiente" });
  }
  try {
    if (!(await findEmployee(employee_id))) {
      return res.status(400).json({ error: "Este funcionário não existe" });
    }
    const createdOrder = (await Order.create({ status, employee_id }, { logging: false })).toJSON();
    for (const product of products) {
      await ProductOrder.create({ product_id: product, order_id: createdOrder.id }, { logging: false });
    }
    return res.status(201).json({ error: null });
  } catch (error) {
    res.status(500).json({ error });
  }
};
