import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" />
      <h3>Shri Balaji Enterprises</h3>
      <p>Mobile • Electronics • Furniture</p>
      <p>📞 8676923667</p>
      <p>📧 vipinsaini447@gmail.com</p>
      <p className="copyright">
        © 2026 Shri Balaji Enterprises. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
