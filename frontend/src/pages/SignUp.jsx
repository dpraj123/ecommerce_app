import React, { useState } from "react";
import { toast } from "react-toastify";
import Layout from "../components/Layout.jsx";
import axios from "axios";
import "./signup.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        formData
      );
      if (res.data.success) {
        console.log(res.data.message);
        setTimeout(navigate("/login"), 2000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const handleInputChange = (e) => {
    setFormData({
      //एक नया ऑब्जेक्ट बनाया जाता है जिसमें ...formData द्वारा पूर्व मौजूदा ऑब्जेक्ट के सभी प्रॉपर्टीज़ शामिल होते हैं, और फिर उन प्रॉपर्टीज़ में से एक या एक से अधिक को अपडेट किया जाता है।
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <div className="register_form">
        <form onSubmit={handleSubmit}>
          <h1>Register Page</h1>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            onChange={handleInputChange}
            required
          />

          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleInputChange}
            required
          />

          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handleInputChange}
            required
          />

          <input
            name="phone"
            type="text"
            className="form-control"
            placeholder="Phone"
            onChange={handleInputChange}
            required
          />

          <input
            name="address"
            type="text"
            className="form-control"
            placeholder=" address"
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
