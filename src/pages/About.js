import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* HEADER */}
      <section className="about-hero">
        <h1>About Shri Balaji Enterprises</h1>
        <p>Mobile & Electronics Shop | Trusted Local Store</p>
      </section>

      {/* INTRO */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          <strong>Shri Balaji Enterprises</strong> is a well-known and trusted
          mobile and electronics shop located in Nangloi, New Delhi.
          We have been serving our customers with genuine products,
          affordable pricing, and reliable after-sales support.
        </p>
      </section>

      {/* WHAT WE SELL */}
      <section className="about-section light">
        <h2>What We Offer</h2>
        <ul>
          <li>📱 Latest Mobiles & Mobile Accessories</li>
          <li>📺 Smart LED TVs</li>
          <li>❄ Refrigerators</li>
          <li>🌀 Washing Machines</li>
          <li>🧊 Air Coolers & Air Conditioners</li>
          <li>🍳 Microwave & Home Appliances</li>
          <li>🛋 Furniture – Sofa, Bed, Almirah & more</li>
        </ul>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-section">
        <h2>Why Choose Us</h2>
        <p>
          ✔ Genuine & branded products only<br />
          ✔ Best market price guaranteed<br />
          ✔ Easy & quick purchase process<br />
          ✔ Friendly customer support<br />
          ✔ Trusted by local customers
        </p>
      </section>

      {/* FINANCE */}
      <section className="about-section finance">
        <h2>Easy Finance Available</h2>
        <p>
          We provide <strong>0% Interest Finance</strong> options on selected
          products through <strong>Bajaj Finserv</strong> and
          <strong> HDB Financial Services</strong>, making your purchase
          easy and affordable.
        </p>
      </section>

      {/* LOCATION */}
      <section className="about-section light">
        <h2>Our Location</h2>
        <p>
          <strong>Shri Balaji Enterprises</strong><br />
          H No. F-34, Kh No. 44/6<br />
          Suvidha Enclave, Baprola<br />
          Nangloi, New Delhi – 110041
        </p>
        <p className="contact">
          📞 7053323220 | 7982337816
        </p>
      </section>
    </div>
  );
};

export default About;
