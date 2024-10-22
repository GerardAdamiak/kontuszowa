// ClassicProduct.js
import React from 'react';
import './ProductPages.css'; // Assuming you use a single CSS file for styling all product pages

function PremiumProduct({ language }) {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'Kontuszowa Premium' : 'Kontuszowa Premium';
  }, [language]);
  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="/rosIgnis.png" alt="Kontuszowa Ros Ignis" className="product-image-large" />
      </div>
      <div className="product-description-container">
        <h1>{language === 'PL' ? 'Kontuszowa Ros Ignis' : 'Kontuszowa Ros Ignis'}</h1>
        <p>
          {language === 'PL'
            ? 'Kontuszowa Ros Ignis to nasz flagowy produkt, który łączy tradycję z nowoczesnością. Wykonany z najwyższej jakości składników, oferuje delikatny smak, który sprawia, że każda kropla to czysta przyjemność.'
            : 'Kontuszowa Ros Ignis is our flagship product, combining tradition with modernity. Crafted from the finest ingredients, it offers a smooth taste, making every drop a pure delight.'}
        </p>
        <a
          href="https://nalewki.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="product-button"
        >
          {language === 'PL' ? 'Kup Tutaj' : 'Buy Here'}
        </a>
      </div>
    </div>
  );
}

export default PremiumProduct;
