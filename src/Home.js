import React from 'react';

function Home({ language }) {
    React.useEffect(() => {
        document.title = language === 'PL' ? 'Strona Główna' : 'Home';
    }, [language]);

    return (
        <div className="App">
            <header id="home" className="App-header">
                <div className="hero-text-silver">
                    
                </div>
            </header>

            <section className="intro-section">
                
                <h2> {language === 'PL' ? 'Witamy w Kontuszowej, marce wykwintnej, tradycyjnie destylowanej polskiej wódki. Każda butelka to święto autentyczności.' :
                 'Welcome to Kontuszowa, a brand of exquisite, traditionally distilled Polish vodka. Crafted with care and heritage, every bottle is a celebration of authenticity.'} </h2>
            </section>

            <section className="centered-text-with-images">
                <img src="szlachta1.png" alt="Szlachta 1" className="szlachta-image" />
                <h2>{language === 'PL' ? 'OBUDŹ W SOBIE SZLACHTĘ' : 'FIND YOUR NOBLE SELF'}</h2>
                <img src="szlachta2.png" alt="Szlachta 2" className="szlachta-image" />
            </section>
        </div>
    );
}

export default Home;
