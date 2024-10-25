import React from 'react';

function Home({ language }) {
    React.useEffect(() => {
        document.title = language === 'PL' ? 'Strona Główna' : 'Home';
    }, [language]);

    return (
        <div className="App">
            <header id="home" className="App-header">
                <div className="hero-text-silver">
                    <h1>Kontuszowa</h1>
                </div>
            </header>

            <section className="intro-section">
                <h2>{language === 'PL' ? 'Polska Tradycyjna Wódka Premium' : 'Premium Polish Vodka'}</h2>
                <p>{language === 'PL' ? 'Witamy w Kontuszowej...' : 'Welcome to Kontuszowa...'}</p>
            </section>

            <section className="centered-text-with-images">
                <img src="szlachta1.png" alt="Szlachta 1" className="szlachta-image" />
                <h2>OBUDŹ W SOBIE SZLACHTĘ</h2>
                <img src="szlachta2.png" alt="Szlachta 2" className="szlachta-image" />
            </section>
        </div>
    );
}

export default Home;
