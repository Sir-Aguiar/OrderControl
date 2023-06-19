const { Router } = require("express");
const ValidateEmployee = require("./server/middlewares/ValidateEmployee");
const CreateProductController = require("./server/controllers/CreateProductController");
const CreateOrderController = require("./server/controllers/CreateOrderController");
const ListProductsController = require("./server/controllers/ListProductsController");
const UpdateProductController = require("./server/controllers/UpdateProductController");
const DeleteProductController = require("./server/controllers/DeleteProductController");
const ListOrdersController = require("./server/controllers/ListOrdersController");
const routes = Router();

routes.post("/product", ValidateEmployee, CreateProductController);
routes.get("/product", ListProductsController);
routes.get("/product/:product_id", ListProductsController);
routes.get("/order", ValidateEmployee, ListOrdersController);
routes.put("/product/:product_id", ValidateEmployee, UpdateProductController);
routes.delete("/product/:product_id", ValidateEmployee, DeleteProductController);
routes.post("/order", CreateOrderController);

module.exports = routes;
