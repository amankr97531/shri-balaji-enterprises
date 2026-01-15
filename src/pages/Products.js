import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-page">

      {/* PAGE HEADER */}
      <section className="products-header">
        <h1>Our Products</h1>
        <p>
          Explore our wide range of Mobiles, Electronics, Home Appliances
          and Furniture at best prices.
        </p>
      </section>

      {/* MOBILES */}
      <section className="product-section">
        <h2>📱 Mobiles & Accessories</h2>

        <div className="product-grid">
          <ProductCard
            title="Smartphones"
            img="https://image01-in.oneplus.net/media/202511/06/f96761005541e8715f92bda23561aa89.png?x-amz-process=image/format,webp/quality,Q_80"
          />
          <ProductCard
            title="Chargers & Adapters"
            img="https://techiestore.in/wp-content/uploads/2020/06/magsafe-apple.png"
          />
          <ProductCard
            title="Headphones & Earphones"
            img="https://cdns3.thecosmicbyte.com/wp-content/uploads/white-bg-2.jpg.webp"
          />
          <ProductCard
            title="Covers & Temper Glass"
            img="https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Cases%20and%20Covers/Images/261105_0_lerpe1.png?tr=w-600"
          />
        </div>
      </section>

      {/* HOME APPLIANCES */}
      <section className="product-section light">
        <h2>🏠 Home Appliances</h2>

        <div className="product-grid">
          <ProductCard
            title="LED TV"
            img="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80"
          />
          <ProductCard
            title="Refrigerator"
            img="https://m.media-amazon.com/images/I/71n3Kd9GMZL._AC_UF1000,1000_QL80_.jpg"
          />
          <ProductCard
            title="Washing Machine"
            img="https://cdn11.bigcommerce.com/s-grgwsg2upf/images/stencil/1280x1280/products/294/870/e163ac01-3b39-4a0d-85e6-36cc8283655e__75892.1754929219.jpg?c=1"
          />
          <ProductCard
            title="Air Cooler"
            img="https://cdn.accentuate.io/605775462704/-1695035269432/a1-v1703575584388.png?800x800"
          />
          <ProductCard
            title="Geyser"
            img="https://www.padminiappliances.com/cdn/shop/files/DELUXE.jpg?v=1691483755"
          />
          <ProductCard
            title="RO Water Purifier"
            img="https://rubywatertech.com/cdn/shop/files/1_1_1024x1024.jpg?v=1725267653"
          />
        </div>
      </section>

      {/* KITCHEN APPLIANCES */}
      <section className="product-section">
        <h2>🍳 Kitchen Appliances</h2>

        <div className="product-grid">
          <ProductCard
            title="Electric Iron"
            img="https://www.maharajawhiteline.com/assests/blogs-banner/iron-banner.jpg"
          />
          <ProductCard
            title="Electric Kettle"
            img="https://m.media-amazon.com/images/I/713MGnrit2S._AC_UF350,350_QL80_.jpg"
          />
          <ProductCard
            title="Sandwich Maker"
            img="https://rukminim2.flixcart.com/image/480/640/xif0q/sandwich-maker/s/7/y/elato-bs203-4-slice-sandwich-maker-wipro-original-imagyh4z5hfffrzk.jpeg?q=90"
          />
          <ProductCard
            title="Mixer Grinder"
            img="https://d3vpmhw8imxmio.cloudfront.net/product-variants/1500000613/1500000613/1733913762006-2274-650x650.webp"
          />
        </div>
      </section>

      {/* FURNITURE */}
      <section className="product-section light">
        <h2>🛋 Furniture</h2>

        <div className="product-grid">
          <ProductCard
            title="Sofa Set"
            img="https://aarsunwoods.com/wp-content/uploads/2025/07/Royal-Sofa-Set-Design-for-Stylish-Homes.jpg"
          />
          <ProductCard
            title="Bed"
            img="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80"
          />
          <ProductCard
            title="Diwan Cum Bed"
            img="https://m.media-amazon.com/images/I/51mRbPoOwwL._AC_UF894,1000_QL80_.jpg"
          />
          <ProductCard
            title="Almirah"
            img="https://www.urbanspacestore.in/cdn/shop/articles/USIMG_0001_7_520x500_43ecb893-a6ee-4757-9ff3-5fd0360e8c06.jpg?v=1736336673"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <h2>Looking for Best Deals?</h2>
        <p>Call or WhatsApp us for latest offers and availability.</p>
        <a href="tel:8676923667" className="cta-btn">
          📞 Call Now
        </a>
      </section>
    </div>
  );
};

/* PRODUCT CARD COMPONENT */
const ProductCard = ({ title, img }) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Products;
