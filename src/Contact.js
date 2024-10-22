// Home.js
import React from 'react';

function Contact({ language }) {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'Kontakt' : 'Contacts';
  }, [language]);
    return (
      <div className="App">
        
            
  
          <header id="home" className="App-header">
            <div className="hero-text">
              <h1>Kontuszowa</h1>
            </div>
          </header>
  
          
          
          <section id="contact" className="App-section">
            <h3>{language === 'PL' ? 'Skontaktuj się z Nami' : 'Contact Us'}</h3>
            <p>Email: info@kontuszowa.com</p>
            <p>{language === 'PL' ? 'Telefon: +48 123 456 789' : 'Phone: +48 123 456 789'}</p>
          </section>
  
          
      </div>
    );
  }
  

export default Contact;
