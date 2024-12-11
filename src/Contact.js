// Home.js
import React from 'react';

function Contact({ language }) {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'Kontakt' : 'Contacts';
  }, [language]);
    return (
      <div className="App">
        
{/*             
  
          <header id="home" className="App-header">
            <div className="hero-text-red">
              
            </div>
          </header>
  
           */}
          
          <section id="contact" className="App-section">
            <h3>{language === 'PL' ? 'Skontaktuj się z Nami' : 'Contact Us'}</h3>
            <p>Email: info@kontuszowa.com</p>
            <p>{language === 'PL' ? 'Telefon: +48 123 456 789' : 'Phone: +48 123 456 789'}</p>
            <p>Facebook: Kontuszowa</p>
          </section>

          <script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-9945ace6-6534-43bf-aefe-5537c365f11e" data-elfsight-app-lazy></div>
  
          
      </div>
    );
  }
  

export default Contact;
