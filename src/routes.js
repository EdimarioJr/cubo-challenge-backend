import express from "express";
import userController from './controllers/userController'

const routes = express.Router();

routes.get("/", userController.index);

routes.post("/", userController.create);

export default routes;
