import express from "express";
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller.js";
import authUser from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/get-me", authUser, getUser);

export default router;
