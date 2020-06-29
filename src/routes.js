import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Puxando todos os usuarios!");
});

routes.post("/", (req, res) => {
  res.send("Inserindo um usuário!");
});

export default routes;
