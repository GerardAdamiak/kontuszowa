// Products.js
import React from 'react';
import './Products.css'; // Import the CSS file

function Products() {
  React.useEffect(() => {
    document.title = "Kontuszowa Products";
  }, []);

  return (
    <div className="App">
      <section id="products" className="App-section">
        <h1>Products</h1>
        <p>Explore our range of premium vodkas, each bottle crafted with the finest ingredients.</p>
        
        {/* First product section (left) */}
        <div className="product product-left">
          <img src="./butelka.png" alt="Bottle" className="product-image" />
          <div className="product-description">
            <h2>Kontuszowa Classic</h2>
            <p>Our flagship product, known for its smooth taste and quality ingredients.</p>
          </div>
        </div>

        {/* Second product section (right) */}
        <div className="product product-right">
          <img src="./butelka.png" alt="Bottle" className="product-image" />
          <div className="product-description">
            <h2>Kontuszowa Premium</h2>
            <p>A premium vodka with enhanced flavor, perfect for special occasions.</p>
          </div>
        </div>

        {/* Third product section (left) */}
        <div className="product product-left">
          <img src="./butelka.png" alt="Bottle" className="product-image" />
          <div className="product-description">
            <h2>Kontuszowa Gold</h2>
            <p>An exquisite vodka, featuring hints of rare ingredients and a golden finish.</p>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Products;
