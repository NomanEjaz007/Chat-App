import User from "../models/user.model.js"
import bcrypt from "bcryptsjs"


export const signup =  (req , res )=>{
    // const {fullName, email , password} = req.body
    // try {
    //     if(password.lenght < 6){
    //         return res.status(400).json({message: "Passwordd must be at least 6 characters"});
    //     }

    //     const user = User.findOne({email})
    //     if(user) return res.status(400).json({message: "Email already exists"});

        
        

    // } catch (error) {
        
    // }

    res.send("signup route");
   }

export const login =  (req , res )=>{
    res.send("login route");
   }


export const logout =  (req , res )=>{
    res.send("logout route");
   }