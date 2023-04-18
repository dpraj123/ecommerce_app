import userModal from "../models/userModal.js";
import { hashPassword } from "./../helpers/authHelpers.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    if (!phone) {
      return res.send({ error: "phone is Required" });
    }
    if (!address) {
      return res.send({ error: "address is Required" });
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
