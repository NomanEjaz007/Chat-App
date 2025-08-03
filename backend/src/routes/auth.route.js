import express from "express";
// import {login , logout , signup } from "../controllers/auth.controller.js"
import authController from "../controllers/auth.controller.js"


const router = express.Router();

router.post("/signup" , authController.signup);

router.post("/login" , authController.login  );

router.post("/logout" , authController.logout );

export default router;