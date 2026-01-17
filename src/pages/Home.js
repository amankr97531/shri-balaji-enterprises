import React from "react";
import "./Home.css";
import bgImage from "../assets/background.png";

const Home = () => {
  return (
    <>
    {/* ====== HERO IMAGE (MOBILE ME ALAG) ====== */}
<section
  className="hero-image"
  style={{ backgroundImage: `url(${bgImage})` }}
></section>

{/* ====== HERO CONTENT (TEXT SECTION) ====== */}
<section className="hero-content-section">
  <div className="hero-content">
    <h1>Shri Balaji Enterprises</h1>
    <p>
      Trusted Mobile, Electronics & Furniture Shop
      <br />
      Best Price • Genuine Products • Local Trust
    </p>

    <div className="hero-buttons">
      <a href="tel:8676923667" className="btn call-btn">
        📞 Call Now
      </a>
      <a
        href="https://wa.me/918676923667"
        target="_blank"
        rel="noreferrer"
        className="btn whatsapp-btn"
      >
        💬 WhatsApp
      </a>
    </div>
  </div>
</section>




      {/* FEATURES */}
      <section className="features">
        <div>✔ Genuine Products</div>
        <div>✔ Best Market Price</div>
        <div>✔ Easy Finance Available</div>
        <div>✔ After Sales Support</div>
      </section>

      {/* FINANCE */}
<section className="finance">
  <h2>Easy Finance Available</h2>
  <p>
    Buy your favorite mobile, electronics and appliances with
    <strong> 0% Interest Finance</strong>.
  </p>
  <p className="finance-brands">
    Available through <strong>Bajaj Finserv</strong> &{" "}
    <strong>HDB Financial Services</strong>
  </p>
</section>



      {/* PRODUCT DETAILS */}
<section className="product-details">
  <h2>What We Offer</h2>

  <div className="details-grid">
    <div>
      <h3>📱 Mobiles & Accessories</h3>
      <p>
        Latest smartphones with genuine accessories like chargers,
        headphones, data cables, covers and tempered glass at best prices.
      </p>
    </div>

    <div>
      <h3>📺 LED TV</h3>
      <p>
        Smart LED TVs with HD & 4K display, powerful sound and modern designs
        suitable for every home.
      </p>
    </div>

    <div>
      <h3>❄ Refrigerator</h3>
      <p>
        Energy efficient refrigerators with large storage capacity
        and long-lasting performance.
      </p>
    </div>

    <div>
      <h3>🌀 Washing Machine</h3>
      <p>
        Top load & front load washing machines for easy and quick laundry
        with advanced wash technology.
      </p>
    </div>

    <div>
      <h3>🧊 Air Cooler & AC</h3>
      <p>
        Powerful air coolers and air conditioners for instant cooling
        during hot summers.
      </p>
    </div>

  </div>
</section>


      {/* CATEGORIES */}
      <section className="categories">
        <h2>Our Categories</h2>

        <div className="category-grid">
          {/* MOBILES */}
          <div className="category-card">
            <img
              src="https://mate.net.in/public/uploads/all/UsReqZvujmEjMUb27qlTtRcCG8Pf18SyULO4HW7U.jpg"
              alt="Mobiles & Accessories"
            />
            <h3>Mobiles & Accessories</h3>
            <p>
              Smartphones, Charger, Headphone, Data Cable, Cover, Temper Glass
            </p>
          </div>

          {/* HOME APPLIANCES */}
          <div className="category-card">
            <img
              src="https://etimg.etb2bimg.com/thumb/msid-94146979,width-1200,height-900,resizemode-4/.jpg"
              alt="Home Appliances"
            />
            <h3>Home Appliances</h3>
            <p>
              LED TV, Fridge, Washing Machine, Cooler, Heater, Geyser, RO
            </p>
          </div>

          {/* FURNITURE */}
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
              alt="Furniture"
            />
            <h3>Furniture</h3>
            <p>Sofa, Bed, Diwan Cum Bed, Almirah</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Popular Products</h2>

        <div className="product-grid">
          <div className="product-card">
            <img src="https://amstradworld.com/wp-content/uploads/2023/12/Amstrad-AM65UWGTA-WebOS-TV_front.jpg" alt="LED TV" />
            <h4>LED TV</h4>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-kiM2r5XXd6rynlT7nTJ2GYR1MwtNMl5JQ&s" alt="Fridge" />
            <h4>Fridge</h4>
          </div>

          <div className="product-card">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/058/478/430/small/front-loading-washing-machine-with-laundry-png.png" alt="Washing Machine" />
            <h4>Washing Machine</h4>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyxh--AaV0qiV_BeA54meXNEg33zzValhQg&s" alt="Air Cooler" />
            <h4>Cooler</h4>
          </div>

          <div className="product-card">
            <img src="https://pngimg.com/d/water_heater_PNG73.png" alt="Geyser" />
            <h4>Geyser</h4>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkARhGQc1tSlUBj7X5NDbSgkDa5Pj_y5-acA&s" alt="Sofa" />
            <h4>Sofa</h4>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          Shri Balaji Enterprises is a trusted electronics and furniture shop
          offering genuine products, best prices, and reliable after-sales
          support.
        </p>
      </section>

      {/* ADDRESS */}
<section className="address">
  <h2>Visit Our Store</h2>
  <p>
    <strong>Shri Balaji Enterprises</strong><br />
    H No. F-34, Kh No. 44/6<br />
    Suvidha Enclave, Baprola<br />
    Nangloi, New Delhi – 110041
  </p>

  <p className="contact">
    📞 8976923667 | 8678010969
  </p>
</section>

{/* MAP */}
<section className="map">
  <iframe
    title="Shri Balaji Enterprises Location"
    src="https://www.google.com/maps?q=28.6342924,77.0183698&z=15&output=embed"
    width="100%"
    height="350"
    style={{ border: 0 }}
    loading="lazy"
  ></iframe>
</section>



      {/* CTA */}
      <section className="contact-cta">
        <h2>Visit Our Shop Today</h2>
        <p>Call or WhatsApp us for best deals</p>
        <a href="tel:8676923667" className="btn call-btn">
          📞 Call Now
        </a>
      </section>
    </>
  );
};

export default Home;
