import React from 'react';
import './ProductPages.css';

function GoldProduct({ language }) {
  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="/butelka.png" alt="Kontuszowa Gold" className="product-image-large" />
      </div>
      <div className="product-description-container">
        <h1>{language === 'PL' ? 'Kontuszowa Złota' : 'Kontuszowa Gold'}</h1>
        <p>
          {language === 'PL'
            ? 'Kontuszowa Złota to nasz flagowy produkt, który łączy tradycję z nowoczesnością. Wykonany z najwyższej jakości składników, oferuje delikatny smak, który sprawia, że każda kropla to czysta przyjemność.'
            : 'Kontuszowa Gold is our flagship product, combining tradition with modernity. Crafted from the finest ingredients, it offers a smooth taste, making every drop a pure delight.'}
        </p>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="product-button"
        >
          {language === 'PL' ? 'Odwiedź naszą stronę' : 'Visit our website'}
        </a>
      </div>
    </div>
  );
}

export default GoldProduct;
