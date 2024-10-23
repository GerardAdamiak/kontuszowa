// Home.js
import React from 'react';

function AboutUs({ language }) {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'O Nas' : 'About Us';
  }, [language]);
  
    return (
      <div className="App">
        
            
  
          <header id="home" className="App-header">
            <div className="hero-text-gold">
              <h1>Kontuszowa</h1>
            </div>
          </header>
  
          
          
          <section id="about" className="App-section">
            <h3>{language === 'PL' ? 'O Nas' : 'About Us'}</h3>
            <p>
            {language === 'PL' ? 'W Kontuszowej, wierzymy w zachowanie dobrych, bogatych tradycji polskiego wódkotwórstwa. Nasze przepisy i tradycje są przekazywane od pokoleń' : 'At Kontuszowa, we believe in preserving the rich traditions of Polish vodka making. Our unique recipe has been passed down through generations.'}
            </p>
          </section>
  
          
  
          
      </div>
    );
  }
  

export default AboutUs;
