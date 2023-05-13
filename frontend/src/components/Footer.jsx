import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-light py-1 text-center">
      <h4>All Right Reservd &copy; Im_dp_raj</h4>
      <p className="text-center gap-5 footer">
        <Link to="/"> Home</Link> |<Link to="/about"> About</Link> |
        <Link to="/policy"> Privacy Policy</Link> |
      </p>
    </div>
  );
};

export default Footer;
