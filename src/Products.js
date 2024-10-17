// Home.js
import React from 'react';

function Products() {
    React.useEffect(() => {
      document.title = "Kontuszowa Products";
    }, []);
  
    return (
      <div className="App">
        
            
  
          <header id="home" className="App-header">
            <div className="hero-text">
              <h1>Kontuszowa</h1>
            </div>
          </header>
  
          
  
          <section id="products" className="App-section">
            <h3>Products</h3>
            <p>Explore our range of premium vodkas, each bottle crafted with the finest ingredients.</p>
          </section>
  
          
  
          
      </div>
    );
  }
  

export default Products;
