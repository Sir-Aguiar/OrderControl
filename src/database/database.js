const { Sequelize } = require("sequelize");
const configuration = require("./config/configuration");

module.exports = new Sequelize(configuration);
