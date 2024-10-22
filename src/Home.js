// Home.js
import React from 'react';

function Home({ language }) {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'Strona Główna' : 'Home';
  }, [language]);

  return (
    <div className="App">
      <header id="home" className="App-header">
        <div className="hero-text-gold">
          <h1>Kontuszowa</h1>
        </div>
      </header>

      <section className="intro-section">
        <h2>{language === 'PL' ? 'Polska Tradycyjna Wódka Premium' : 'Premium Polish Vodka'}</h2>
        <p>
          {language === 'PL'
            ? 'Witamy w Kontuszowej, marce wykwintnej, tradycyjnie destylowanej polskiej wódki. Każda butelka to święto autentyczności.'
            : 'Welcome to Kontuszowa, a brand of exquisite, traditionally distilled Polish vodka. Crafted with care and heritage, every bottle is a celebration of authenticity.'}
        </p>
      </section>
    </div>
  );
}

export default Home;
