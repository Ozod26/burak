import express from "express";
import path from "path";

/** 1- ENTRANCE **/
const app = express();
console.log("__dirmane:", __dirname);
app.use(express.static(path.join()));
app.use(express.json());


/** 2- SESSIONS **/

/** 3- VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

/** 4- ROUTERS **/

export default app; 