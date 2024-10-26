import React from 'react';
import './ProductPages.css';

function ClassicProduct({ language }) {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'Kontuszowa Clara Nix' : 'Kontuszowa Clara Nix';
  }, [language]);

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="/claraNix.png" alt="Kontuszowa Clara Nix" className="product-image-large" />
      </div>
      <div className="product-description-container">
        <div className="product-description-background">
          <h1>{language === 'PL' ? 'Kontuszowa Clara Nix' : 'Kontuszowa Clara Nix'}</h1>
          <p>
            {language === 'PL'
              ? 'Kontuszowa Clara Nix to nasz flagowy produkt, który łączy tradycję z nowoczesnością. Wykonany z najwyższej jakości składników, oferuje delikatny smak, który sprawia, że każda kropla to czysta przyjemność.'
              : 'Kontuszowa Clara Nix is our flagship product, combining tradition with modernity. Crafted from the finest ingredients, it offers a smooth taste, making every drop a pure delight.'}
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
    </div>
  );
}

export default ClassicProduct;
