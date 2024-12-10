// Products.js
import React from 'react';
import './Products.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function Products({ language }) {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'Produkty' : 'Products';
  }, [language]);

  return (
    <div className="App">
      <section id="products" className="App-section">
        <h1>{language === 'PL' ? 'Produkty' : 'Products'}</h1>
        <p id='product-intro'>
          {language === 'PL'
            ? 'Odkryj naszą gamę premium wódek, każda butelka wytwarzana z najwyższej jakości składników.'
            : 'Explore our range of premium vodkas, each bottle crafted with the finest ingredients.'}
        </p>

        {/* First product section (left) */}
        <div className='products'>
        <div className="product product-left">
          <Link to="/products/claranix">
            <img src="./claraNix.png" alt="Bottle" className="product-image" />
          </Link>
          <div className="product-description">
            <div className='product-link'>
          <Link to="/products/claranix">
            <h1>{language === 'PL' ? 'Kontuszowa Clara Nix' : 'Kontuszowa Clara Nix'}</h1>
            </Link>
            </div>
            <p>
              {language === 'PL'
                ? 'Nasz flagowy produkt, znany z gładkiego smaku i wysokiej jakości składników.'
                : 'Our flagship product, known for its smooth taste and quality ingredients.'}
            </p>
          </div>
        </div>

        {/* Second product section (right) */}
        <div className="product product-right">
          <Link to="/products/rosignis">
            <img src="./rosIgnis.png" alt="Bottle" className="product-image" />
          </Link>
          
          <div className="product-description">
          <div className='product-link'>
          <Link to="/products/rosignis">
            <h1>{language === 'PL' ? 'Kontuszowa Ros Ignis' : 'Kontuszowa Ros Ignis'}</h1>
            </Link>
            </div>
            <p>
              {language === 'PL'
                ? 'Wódka premium o wzbogaconym smaku, idealna na specjalne okazje.'
                : 'A premium vodka with enhanced flavor, perfect for special occasions.'}
            </p>
          </div>
        </div>

        {/* Third product section (left) */}
        <div className="product product-left">
          <Link to="/products/altersol">
            <img src="./alterSol.png" alt="Bottle" className="product-image" />
          </Link>
          <div className="product-description">
          <div className='product-link'>
          <Link to="/products/altersol">
            <h1>{language === 'PL' ? 'Kontuszowa Alter Sol' : 'Kontuszowa Alter Sol'}</h1>
            </Link>
            </div>
            <p>
              {language === 'PL'
                ? 'Wykwintna wódka z nutami rzadkich składników i złotym wykończeniem.'
                : 'An exquisite vodka, featuring hints of rare ingredients and a golden finish.'}
            </p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
