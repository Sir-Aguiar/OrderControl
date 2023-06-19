const { findEmployee } = require("../../utils/get-employee");
/** @type {import("express").RequestHandler}  */
module.exports = async (req, res, next) => {
  let { name, employee_id } = req.headers;

  if (!name || !employee_id) {
    return res.status(400).json({ error: "Não foram inseridas credenciais de acesso o suficiente" });
  }

  employee_id = Number(employee_id);

  if (isNaN(employee_id)) {
    return res.status(400).json({ error: "Credenciais de acesso inválidas" });
  }

  try {
    const foundEmployee = await findEmployee(employee_id);
    if (!foundEmployee || foundEmployee.name !== name) {
      return res.status(404).json({ error: "Este funcionário não existe" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error });
  }
};
