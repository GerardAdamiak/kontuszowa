// Home.js
import React from 'react';

function AboutUs() {
    React.useEffect(() => {
      document.title = "Kontuszowa About Us";
    }, []);
  
    return (
      <div className="App">
        
            
  
          <header id="home" className="App-header">
            <div className="hero-text">
              <h1>Kontuszowa</h1>
            </div>
          </header>
  
          
          
          <section id="about" className="App-section">
            <h3>About Us</h3>
            <p>
              At Kontuszowa, we believe in preserving the rich traditions of Polish vodka making. Our unique recipe has been passed down through generations.
            </p>
          </section>
  
          
  
          
      </div>
    );
  }
  

export default AboutUs;
