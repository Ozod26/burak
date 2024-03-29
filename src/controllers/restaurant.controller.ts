import  { NextFunction, Request, Response }  from "express";
import  { T } from "../libs/types/commom";
import MemberService from "../models/Member.service";
import { MemberInput, LoginInput, AdminRequest } from "../libs/types/member";
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
  req: AdminRequest, 
  res: Response
  ) => {
   try {
    console.log("processSignup")

    /* kirib kelayotgan request body ni newMember 
    constantasiga tenglab olyabmiz va uning type MemberInput interface */ 
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);

    // SESSIONS AUTHENTICATION
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processSignup:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace("admin/signup") </script>`
    );
  }
};
 

restaurantController.processLogin = async (
  req: AdminRequest, 
  res: Response
) => {
  try {
    console.log("processLogin");

    // input variable hosil qildik. va uni req.body kelayotgan malumotga tenglab oldik 
    const input: LoginInput = req.body;
   
    // memberservice objectiga restaurantControllerni processLogin methodini chaqirib 
    // undan qaytgan malumotni result degan variable ga tenglashitirib olamz
    const result = await memberService.processLogin(input); 


    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processLogin:", err); 
    const message = 
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('admin/login') </script>`
    );
  }
};


restaurantController.logout = async (
  req: AdminRequest, 
  res: Response
) => {
  try {
    console.log("logout");
    req.session.destroy(function() {
      res.redirect("/admin");
    });
    
  } catch (err) {
    console.log("Error, processLogin:", err); 
    res.redirect("/admin");
  }
};





restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session?.member)
      res.send(
        `<script> alert("Hi ${req.session.member.memberNick}")</script>`
      );
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
  } catch (err) {
    console.log("Error, checkAuthSession:", err);
    res.send(err);
  }
};

restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script> alert("${message}"); window.location.replace("/admin/login") </script>`
    );
  }
};

export default restaurantController;