// ClassicProduct.js
import React from 'react';
import './ProductPage.css'; // Assuming you use a single CSS file for styling all product pages

function ClassicProduct({ language }) {
  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="./classic-bottle.png" alt="Kontuszowa Classic" className="product-image-large" />
      </div>
      <div className="product-description-container">
        <h1>{language === 'PL' ? 'Kontuszowa Klasyczna' : 'Kontuszowa Classic'}</h1>
        <p>
          {language === 'PL'
            ? 'Kontuszowa Klasyczna to nasz flagowy produkt, który łączy tradycję z nowoczesnością. Wykonany z najwyższej jakości składników, oferuje delikatny smak, który sprawia, że każda kropla to czysta przyjemność.'
            : 'Kontuszowa Classic is our flagship product, combining tradition with modernity. Crafted from the finest ingredients, it offers a smooth taste, making every drop a pure delight.'}
        </p>
      </div>
    </div>
  );
}

export default ClassicProduct;
