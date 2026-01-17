import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* HEADER */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are here to help you with mobiles & electronics</p>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <div className="info-card">
          <h3>📞 Call Us</h3>
          <p>8676923667</p>
          <p>8678010969</p>
        </div>

        <div className="info-card">
          <h3>📧 Email</h3>
          <p>vipinsaini447@gmail.com</p>
        </div>

        <div className="info-card">
          <h3>📍 Address</h3>
          <p>
            H No. F-34, Kh No. 44/6<br />
            Suvidha Enclave, Baprola<br />
            Nangloi, New Delhi – 110041
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Need Any Help?</h2>
        <p>Call or WhatsApp us for product details and best offers</p>

        <div className="cta-buttons">
          <a href="tel:7053323220" className="btn call-btn">
            📞 Call Now
          </a>
          <a
            href="https://wa.me/917053323220"
            target="_blank"
            rel="noreferrer"
            className="btn whatsapp-btn"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <h2>Find Us on Map</h2>
        <iframe
          title="Shri Balaji Enterprises Location"
          src="https://www.google.com/maps?q=28.6342924,77.0183698&z=15&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
