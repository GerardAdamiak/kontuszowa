// Home.js
import React from 'react';

function Home() {
    React.useEffect(() => {
      document.title = "Kontuszowa Home";
    }, []);
  
    return (
      <div className="App">
        
            
  
          <header id="home" className="App-header">
            <div className="hero-text">
              <h1>Kontuszowa</h1>
            </div>
          </header>
  
          <section className="intro-section">
            <h2>Premium Polish Vodka</h2>
            <p>
              Welcome to Kontuszowa, a brand of exquisite, traditionally distilled Polish vodka. Crafted with care and heritage, every bottle is a celebration of authenticity.
            </p>
          </section>
  
          
      </div>
    );
  }
  

export default Home;
