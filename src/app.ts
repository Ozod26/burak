import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

// yangi vVeriable hosil qilamiz

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1- ENTRANCE **/
const app = express();
console.log("__dirmane:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));


/** 2- SESSIONS **/
//
app.use(
  session({
    secret: String(process.env.SESSION_SECRET), // 3-shaxsga korsatish mumkin emas
    cookie: { 
      maxAge: 1000 * 3600 * 3, // 3 hours
    },
    store: store,
    resave: true, // oxirgi kirgan vaqtdan 3 soat davomida. Kirilgan vaqtda ozini yangilaydi // 
    saveUninitialized: true,
  })
);

// app.use(function (req, res, next) {
//   const sessionInstance = req.session as T;
//   res.locals.member = sessionInstance.member;
//   next();
// });




/** 3- VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4- ROUTERS **/
app.use("/admin", routerAdmin); // SSR: EJS //Middleware Design Pettern
app.use("/", router);           // SPA: REACT

export default app; 