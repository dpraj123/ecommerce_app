import express from "express";
import { registerController } from "../controllers/authoController.js";
//router obj
const router = express.Router();
//routing
//_____________REGISTER
router.post("/register", registerController);
export default router;
