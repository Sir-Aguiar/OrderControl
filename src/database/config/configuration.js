require("dotenv/config");

module.exports = {
  host: "localhost",
  port: process.env.PORT,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: "Desafio14",
  dialect: "postgres",
  define: {
    underscored: true,
    underscoredAll: true,
  },
};
