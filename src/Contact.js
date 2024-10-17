// Home.js
import React from 'react';

function Contact() {
    React.useEffect(() => {
      document.title = "Kontuszowa Contact";
    }, []);
  
    return (
      <div className="App">
        
            
  
          <header id="home" className="App-header">
            <div className="hero-text">
              <h1>Kontuszowa</h1>
            </div>
          </header>
  
          
          
          <section id="contact" className="App-section">
            <h3>Contact Us</h3>
            <p>Email: info@kontuszowa.com</p>
            <p>Phone: +48 123 456 789</p>
          </section>
  
          
      </div>
    );
  }
  

export default Contact;
