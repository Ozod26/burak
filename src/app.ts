import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1- ENTRANCE **/
const app = express();
console.log("__dirmane:", __dirname);
app.use(express.static(path.join()));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));


/** 2- SESSIONS **/

/** 3- VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

/** 4- ROUTERS **/
app.use("/admin", routerAdmin); // SSR: EJS //Middleware Design Pettern
app.use("/", router);           // SPA: REACT

export default app; 