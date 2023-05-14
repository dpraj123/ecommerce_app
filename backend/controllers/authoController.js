import userModal from "../models/userModal.js";
import { comparePassword } from "./../helpers/authHelpers.js";
import { hashPassword } from "./../helpers/authHelpers.js";
import JWT from "jsonwebtoken";
// register
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "phone is Required" });
    }
    if (!address) {
      return res.send({ message: "address is Required" });
    }
    // check exiting user
    const existingUser = await userModal.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Register Please Login",
      });
    }
    // register user
    const hashedPassword = await hashPassword(password);
    // now save
    const user = await new userModal({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Register Successully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};
// Login controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    // check user
    const user = await userModal.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email in not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "5d",
    });
    res.status(200).send({
      success: true,
      message: "Log in successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login ",
      error,
    });
  }
};
// test ptotected controller
export const testController = (req, res) => {
  res.status(200).send({
    message: "protected routes",
  });
};
