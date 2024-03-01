import  { Request, Response }  from "express";
import  { T } from "../libs/types/commom";
import MemberService from "../models/Member.service";

const restaurantController: T =  {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home page"); // send | json | redirect | end  | render
  } catch (err) {
    console.log("Error, goHome:", err); 
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login page");
  } catch (err) {
    console.log("Error, getLogin:", err); 
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Login page");
  } catch (err) {
    console.log("Error, getSignup:", err); 
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("DONE ");
  } catch (err) {
    console.log("Error, processLogin:", err); 
  }
};
restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    res.send("DONE ");
  } catch (err) {
    console.log("Error, processSignup:", err); 
  }
};


export default restaurantController;