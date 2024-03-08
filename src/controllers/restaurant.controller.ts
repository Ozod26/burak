import  { Request, Response }  from "express";
import  { T } from "../libs/types/commom";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";


const memberService = new MemberService();
const restaurantController: T =  {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");  
    res.render("home");  // home.ejs ichiga yuboradi
    // send | json | redirect | end  | render
  } catch (err) {
    console.log("Error, goHome:", err); 
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error, getSignup:", err); 
    res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, getLogin:", err); 
    res.redirect("/admin");
  }
};


restaurantController.processSignup = async (
  req: Request, 
  res: Response
  ) => {
   try {
    console.log("processSignup")
 
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);

    // SESSIONS AUTHENTICATION
    res.send(result)
  } catch(err){
    console.log("Error getSignup", err);
    res.send(err)
  }
 };
 

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");

    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error, processLogin:", err); 
    res.send(err);
  }
};


export default restaurantController;