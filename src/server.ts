import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}, http://localhost:3003`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    }); 
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
 


// console.log("PORT:", process.env.PORT); 

// console.log("MONGO_URL:", process.env.MONGO_URL); 


// Architectural pattern: MVC, DI, MVP
 
// MVC = Model view controller

// Design pattern: Middleware, Decotar


// console.log("EXUCUTED");

// import moment from "moment";

// const currentTime = moment()
// .format('YYYY MM DD');
// console.log(currentTime);

// const person: string = "Adam";
// const count: number = 100; 