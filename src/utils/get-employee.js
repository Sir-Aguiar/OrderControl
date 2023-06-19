const Employee = require("../database/models/Employee");

const findEmployee = async (id) => {
  const employee = await Employee.findByPk(id, { logging: false });
  return employee ? employee.toJSON() : undefined;
};

module.exports = { findEmployee };
