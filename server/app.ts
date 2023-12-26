import express from "express";
import router from "./routes";

const app = express();

async function run() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router);

  app.listen(3000, () => console.log("Connected"));
}

run();
