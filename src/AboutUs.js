import React from 'react';


function AboutUs({ language }) {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'O Nas' : 'About Us';
  }, [language]);

  const storyPL = `
    W sercu Podkarpacia powstała idea odrodzenia szlacheckich tradycji tworzenia wybornych trunków. 
    Kluczowym momentem było nawiązanie współpracy z legendarnym technologiem z Polmosu Łańcut, 
    który pomógł odtworzyć tradycyjne receptury rosolisów. 
    Nasze produkty, takie jak "Sarmacka Perła" czy "Rosolis Ziołowy", to hołd dla dawnej Rzeczypospolitej.`;

  const storyEN = `
    In the heart of Podkarpacie, the idea of reviving noble traditions of crafting exquisite liquors emerged. 
    A crucial milestone was partnering with a legendary technologist from Polmos Łańcut, 
    who helped recreate traditional rosolis recipes. 
    Our products, like "Sarmacka Pearl" and "Herbal Rosolis," are a tribute to the legacy of old Poland.`;

  return (
    <div className="about-container">
      <section id="about" className="about-section">
        <h3 className="about-title">{language === 'PL' ? 'O Nas' : 'About Us'}</h3>
        <p className="about-description">
          {language === 'PL' ? storyPL : storyEN}
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
