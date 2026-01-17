import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
    {/* LOGO + NAME (CLICKABLE → HOME) */}
      <Link to="/" className="logo-section">
        <img src={logo} alt="Shri Balaji Enterprises Logo" />
        <span>Shri Balaji Enterprises</span>
      </Link>

      {/* ACTION ICONS (DESKTOP) */}
      <div className="nav-actions">
        <a href="tel:8676923667" title="Call">
          📞
        </a>
        <a
          href="https://wa.me/918676923667"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp"
        >
          💬
        </a>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* LINKS */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/products">Products</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/about">About</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/contact">Contact</Link></li>

        {/* MOBILE ICONS */}
        <li className="mobile-icons">
          <a href="tel:8676923667">📞 Call</a>
          <a href="https://wa.me/918676923667" target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
