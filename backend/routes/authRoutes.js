import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authoController.js";
import { isAdmin, requiresSignIN } from "../middlewares/authMiddleware.js";
//router obj
const router = express.Router();
//routing
//_____________REGISTER
router.post("/register", registerController);
//_____________LOGIN
router.post("/login", loginController);

//test protected routes
router.post("/test", requiresSignIN, isAdmin, testController); // success if middleware passed

export default router;
