import React from 'react';


function AboutUs({ language }) {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'O Nas' : 'About Us';
  }, [language]);

  const storyPL = `
    W sercu Podkarpacia powstała idea odrodzenia szlacheckich tradycji tworzenia wybornych trunków. 
    Kluczowym momentem było nawiązanie współpracy z legendarnym technologiem z Polmosu Łańcut, 
    który pomógł odtworzyć tradycyjne receptury rosolisów. 
    Nasze produkty to hołd dla dawnej Rzeczypospolitej.`;

  const storyEN = `
    In the heart of Podkarpacie, the idea of reviving noble traditions of crafting exquisite liquors emerged. 
    A crucial milestone was partnering with a legendary technologist from Polmos Łańcut, 
    who helped recreate traditional rosolis recipes. 
    Our products are a tribute to the legacy of old Poland.`;

  const story2PL = 'Zakład „Kontuszowa” został założony w 2024 roku, w sąsiedztwie dawnej posiadłości szlacheckiej. Cały proces produkcji opiera się na zasadach zgodnych z duchem dawnej Polski: używa się jedynie lokalnych surowców, takich jak żyto z okolicznych pól, miód z pasiek w Bieszczadach i zioła uprawiane w tradycyjnych ogródkach. Trunki są wytwarzane metodą rzemieślniczą, z zachowaniem wielopokoleniowych receptur, ale z wykorzystaniem nowoczesnych technologii, które zapewniają najwyższą jakość. Wódki i likiery zakładu czerpią nazwy i inspiracje z kultury szlacheckiej: „Clara Nix”, „Ros Ignis” czy „Alter Sol”. Każda butelka zawiera w sobie cząstkę historii – nie tylko poprzez smak, ale i starannie zaprojektowane etykiety przedstawiające herby i cytaty z literatury staropolskiej';
  const story2EN = 'The "Kontuszowa" plant was founded in 2024, next to a former noble estate. The entire production process is based on principles consistent with the spirit of ancient Poland: only local raw materials are used, such as rye from nearby fields, honey from apiaries in the Bieszczady Mountains and herbs grown in traditional gardens. The drinks are produced using the craft method, following multi-generational recipes, but using modern technologies that ensure the highest quality. The companys vodkas and liqueurs draw their names and inspirations from the nobility culture: "Clara Nix", "Ros Ignis" and "Alter Sol". Each bottle contains a piece of history - not only through taste, but also carefully designed labels depicting coats of arms and quotations from Old Polish literature.';
  return (
    <div className="about-container">
      <section id="about" className="about-section">
        <h3 className="about-title">{language === 'PL' ? 'O Nas' : 'About Us'}</h3>
        <p className="about-description">
          {language === 'PL' ? storyPL : storyEN}
        </p>
        <h3 className="about-title">{language === 'PL' ? 'Historia' : 'History'}</h3>
        <p className="about-description">
          {language === 'PL' ? story2PL : story2EN}
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
