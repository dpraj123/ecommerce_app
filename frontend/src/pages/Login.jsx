import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";
import Layout from "../components/Layout";
import { useAuth } from "../context/auth";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        formData
      );

      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        // set in local storage
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
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
      <div className="login_page">
        <form onSubmit={handleSubmit}>
          <h1>IndoZon</h1>
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

          <button type="submit" className="btn btn-primary mt-2">
            Sign In
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
