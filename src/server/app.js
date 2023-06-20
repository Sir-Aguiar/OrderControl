const express = require("express");
const routes = require("../routes");

/* 
  criar produtos (validação de empregado) (POST product/) ✔
  listar produtos (GET product/)  ✔
  encontra produtos (GET product/:product_id) (queries) ✔
  atualizar produtos (validação de empregado) (PUT prodcut/:product_id) ✔
  deletar produtos (validação de empregado) (DELETE product/:product_id) ✔

  criar venda (POST order/) ✔
  listar vendas (validação de empregado) (GET order/) ✔
  encontrar venda (validação de empregado) (GET order/:order_id) ✔
  cancelar venda (DELETE order/:order_id) ✔
  alterar status da venda (PUT order-status/:order_id) ✔
*/

const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333, () => {
  console.log("Servidor ouvindo a porta 3333");
});

module.exports = app;
