import express from "express";
import path from "path";
const router = express.Router();
import contentRouter from "./Content";
import app from "../app";

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../index.html"));
});

const routers = [{ route: "content", router: contentRouter }];

export default (app) => {
  app.use(router);
  routers.forEach((route) => {
    console.log(route.route);
    app.use(`/${route.route}`, route.router);
  });
};
