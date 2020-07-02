import express from "express";
import userController from "./controllers/userController";

const routes = express.Router();

routes.get("/", userController.index);

routes.post("/", userController.create);

routes.delete("/:id", userController.destroy);

export default routes;
