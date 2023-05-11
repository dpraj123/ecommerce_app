import JWT from "jsonwebtoken";
import userModal from "../models/userModal.js";
// protected routes token base
export const requiresSignIN = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
// isAdmin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModal.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: " unAuthorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in Admin middleWare",
    });
  }
};
