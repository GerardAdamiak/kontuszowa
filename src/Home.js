import React, { useEffect, useState } from "react";
import "./App.css";

function Home({ language }) {
  React.useEffect(() => {
    document.title = language === "PL" ? "Strona Główna" : "Home";

    const events = document.querySelectorAll(".hIn .event");
    const hOut = document.querySelector(".hOut");

    const updateCenterElement = () => {
      const hOutRect = hOut.getBoundingClientRect();
      const centerX = hOutRect.width / 2 + hOutRect.left;

      let closestElement = null;
      let closestDistance = Infinity;

      events.forEach((event) => {
        const eventRect = event.getBoundingClientRect();
        const eventCenterX = eventRect.left + eventRect.width / 2;
        const distance = Math.abs(centerX - eventCenterX);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestElement = event;
        }
      });

      // Remove 'active' class from all events
      events.forEach((event) => event.classList.remove("active"));

      // Add 'active' class to the closest element
      if (closestElement) {
        closestElement.classList.add("active");
      }

      // Continue checking
      requestAnimationFrame(updateCenterElement);
    };

    // Start the loop
    updateCenterElement();

    // Cleanup when the component unmounts
    return () => {
      events.forEach((event) => event.classList.remove("active"));
    };
  }, [language]);

  React.useEffect(() => {
    const elements = document.querySelectorAll(".image, h2");
  
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };
  
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("fade-out");
        } else {
          entry.target.classList.remove("fade-in");
          entry.target.classList.add("fade-out");
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);
  



  


  const [texts, setTexts] = useState([]);

  useEffect(() => {

    const words = ["demokracja", "nihil novi", "tolerancja", "religia", "husaria", "szlachta", "wiara", "unia", "dobrowolność", "siła", "potęga", "jedność"];

    const intervalId = setInterval(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      
      const randomHeight = Math.random() * 80 + 10; // Random position from 10% to 90% height
      
      const randomDelay = 0; // Random delay for appearance

      setTexts((prevTexts) => [
        ...prevTexts,
        {
          word: randomWord,
          top: `${randomHeight}%`,
          delay: randomDelay,
        },
      ]);
    }, 2000); // New word every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  
    return (

        

        <div className="App">
            <header id="home" className="App-header">
                <div className="hero-text-silver"></div>
            </header>
            <div className='space'></div>
            <section className="intro-section">
            
  <div className="image-text-container">
    {/* First image with text on the right */}
    <div className="image-text-item">
      <img src="LogoKontuszowa.png" alt="Higher" className="image" />
      
    </div>
    <h2 id="intro-text">
    {language === 'PL'
      ? 'Marka Kontuszowa to hołd dla polskiego dziedzictwa, tradycji i historii. Inspirowana tradycjami Rzeczpospolitej Szlacheckiej wódka premium, oddaje ducha polskiej szlachty, jej gościnność, wolność oraz militarną chwałę. Każda butelka to podróż przez historię, pełną niezwykłych wartości, które przez wieki kształtowały narodową tożsamość Polski.'
      : 'Welcome to Kontuszowa, a brand of exquisite, traditionally distilled Polish vodka. Crafted with care and heritage, every bottle is a celebration of authenticity.'}
  </h2>
   
  </div>

  <section className="feast-section">
  <div className="feast-content">
    <h1>{language === 'PL' ? 'Nasze produkty' : 'Our products'}</h1>
 
    <div className="feast-images">
      <div className="feast-item">
        <img src="/claraNixBig.png" alt="Feast 1" className="feast-image" />
        {/* <div className="info-panel"> Clara Nix to wyjątkowa wódka biała, destylowana na bazie najwyższej jakości orkiszowego spirytusu.</div> */}
        <div className="bottle-name">Clara Nix</div>
      </div>
      <div className="feast-item">
        <img src="/alterSolBig.png" alt="Feast 2" className="feast-image" />
        {/* <div className="info-panel">Alter Sol to wykwintna wódka o delikatnym, miodowym smaku, który doskonale łączy naturalną słodycz z subtelną nutą korzennych przypraw.</div> */}
        <div className="bottle-name">Alter Sol</div>
      </div>
      <div className="feast-item">
        <img src="/rosIgnisBig.png" alt="Feast 3" className="feast-image" />
        {/* <div className="info-panel">Ros Ignis to wódka o głębokim, wielowymiarowym smaku, inspirowana bogatą tradycją polskich nalewek ziołowych.</div> */}
        <div className="bottle-name">Ros Ignis</div>
      </div>
    </div>
  </div>
</section>


</section>


            <section className="centered-text-with-images">
                <img src="szlachta1.png" alt="Szlachta 1" className="szlachta-image" />
                <h2>{language === 'PL' ? 'OBUDŹ W SOBIE SZLACHTĘ' : 'FIND YOUR NOBLE SELF'}</h2>
                <img src="szlachta2.png" alt="Szlachta 2" className="szlachta-image" />
            </section>

            <section className="centered-section">
      {/* Section Title */}
      <h2 className="section-title">Historia inspirowana wartościami</h2>

      {/* Section Body */}
      <p className="section-body">
      Przez trzy wieki (XVI – XVII – XVIII) w Centralnej Europie istniało niezwykle rozległe i potężne
państwo, o wyjątkowych i oryginalnych rozwiązaniach na polach społecznych i politycznych,
w którym dominującą rolę odgrywała szlachta:
      </p>

      <div className="animated-text-container">
            {texts.map((text, index) => (
             <div
        key={index}
        className="animated-text"
        style={{
          top: 0, // Random vertical position
          left: `${Math.random() * 30 + 30}%`, // Random horizontal position
          animation: `growAndFade 1.5s ease forwards ${text.delay}ms`,
        }}
      >
        {text.word}
      </div>
      ))}
    </div>
    <img src="obrys.png" alt="obrys" className="image" id="obrys" />
    </section>


            {/* Timeline Section */}
            <section className="timeline-section">
                <h2>{language === 'PL' ? 'Poznaj Historię Polski Szlacheckiej' : 'Discover History of Noble Poland'}</h2>
            <div class="hOut"><div class="hIn">
 
 <div className="event">
  <p className="eDate">966</p>
  <p className="eTxt">
    {language === 'PL'
      ? 'Chrzest Polski'
      : 'Baptism of Poland'}
    <span className="eTxt-long">
      {language === 'PL'
        ? 'Początek chrześcijańskiej kultury w Polsce, tworzenie fundamentów państwowości.'
        : 'The beginning of Christian culture in Poland, the foundation of statehood.'}
    </span>
  </p>
  <img
    className="event-img"
    src="/chrzest.jpg"
    alt="Event Illustration"
  />
</div>

  <div class="event">
    <p class="eDate">XV w.</p>
    <p class="eTxt">{language === 'PL' ? 'Pierwsze wzmianki o produkcji mocnych alkoholi – destylacja alkoholu w celach medycznych i kulinarnych. Powstanie pierwszych gorzelni przy klasztorach.' : 'First mentions of strong alcohol production – distillation of alcohol for medical and culinary purposes. The establishment of the first distilleries in monasteries.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1531</p>
    <p class="eTxt">{language === 'PL' ? 'Bitwa pod Obertynem - zwycięska bitwa polskich wojsk, powstrzymująca wojska mołdawskie.' : 'Battle of Obertyn – a victorious battle by Polish forces, halting the Moldavian army.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1569</p>
    <p class="eTxt">{language === 'PL' ? 'Unia Lubelska – stworzenie Rzeczpospolitej Obojga Narodów, największego państwa Europy, opierającego się na dobrowolności i współpracy.' : 'Union of Lublin – the creation of the Polish-Lithuanian Commonwealth, the largest state in Europe, based on voluntariness and cooperation.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1573</p>
    <p class="eTxt">{language === 'PL' ? 'Pierwsza wolna elekcja – wybór Henryka Walezego na króla Polski, symbol polskiej demokracji szlacheckiej.' : 'First free election – the selection of Henry III of France as King of Poland, symbolizing Polish noble democracy.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1605</p>
    <p class="eTxt">{language === 'PL' ? 'Bitwa pod Kircholmem - wygrana polskich wojsk, mimo 3-krotnej przewagi liczebnej przeciwnika' : 'Battle of Kircholm – a victory of Polish forces despite the enemy’s threefold numerical advantage.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1611</p>
    <p class="eTxt">{language === 'PL' ? 'Bitwa pod Kłuszynem – spektakularne zwycięstwo husarii, jedno z największych sukcesów militarnych Rzeczpospolitej.' : 'Battle of Klushino – a spectacular victory of the Polish hussars, one of the greatest military achievements of the Commonwealth.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1659</p>
    <p class="eTxt">{language === 'PL' ? 'Rozkwit produkcji wódki – wódka zaczyna być uważana za towar eksportowy.' : 'The flourishing of vodka production – vodka begins to be considered an export product.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1683</p>
    <p class="eTxt">{language === 'PL' ? 'Odsiecz wiedeńska – zwycięstwo Jana III Sobieskiego nad armią osmańską, kluczowe wydarzenie dla Europy chrześcijańskiej.' : 'Relief of Vienna – John III Sobieski’s victory over the Ottoman army, a crucial event for Christian Europe.'}</p>
  </div>
  <div class="event">
    <p class="eDate">XVIII w.</p>
    <p class="eTxt">{language === 'PL' ? 'Złoty wiek polskiej szlachty – rozwój tradycji biesiad, polowań oraz zestawiania wódek na różne okazje.' : 'Golden age of Polish nobility – the development of traditions such as feasting, hunting, and pairing vodkas for various occasions.'}</p>
  </div>
  <div className="event">
  <img
    className="event-img"
    src="/chrzest.jpg"
    alt="Event Illustration"
  />
  <p className="eDate">966</p>
  <p className="eTxt">
  {language === 'PL'
      ? 'Chrzest Polski'
      : 'Baptism of Poland'}
      <br />
    <span className="eTxt-long">
      {language === 'PL'
        ? 'Początek chrześcijańskiej kultury w Polsce, tworzenie fundamentów państwowości.'
        : 'The beginning of Christian culture in Poland, the foundation of statehood.'}
    </span>
  </p>
  
</div>
<div className="event">
  <img
    className="event-img"
    src="/kluszyn.jpg"
    alt="Event Illustration"
  />
  <p className="eDate">XV w.</p>
  <p className="eTxt">
  {language === 'PL'
      ? 'Pierwsze wzmianki o produkcji mocnych alkoholi'
      : 'First mentions of strong alcohol production'}
      <br />
    <span className="eTxt-long">
      {language === 'PL'
        ? 'Destylacja alkoholu w celach medycznych i kulinarnych. Powstanie pierwszych gorzelni przy klasztorach.'
        : 'Distillation of alcohol for medical and culinary purposes. The establishment of the first distilleries in monasteries.'}
    </span>
  </p>
  
</div>
  <div class="event">
    <p class="eDate">1531</p>
    <p class="eTxt">{language === 'PL' ? 'Bitwa pod Obertynem - zwycięska bitwa polskich wojsk, powstrzymująca wojska mołdawskie.' : 'Battle of Obertyn – a victorious battle by Polish forces, halting the Moldavian army.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1569</p>
    <p class="eTxt">{language === 'PL' ? 'Unia Lubelska – stworzenie Rzeczpospolitej Obojga Narodów, największego państwa Europy, opierającego się na dobrowolności i współpracy.' : 'Union of Lublin – the creation of the Polish-Lithuanian Commonwealth, the largest state in Europe, based on voluntariness and cooperation.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1573</p>
    <p class="eTxt">{language === 'PL' ? 'Pierwsza wolna elekcja – wybór Henryka Walezego na króla Polski, symbol polskiej demokracji szlacheckiej.' : 'First free election – the selection of Henry III of France as King of Poland, symbolizing Polish noble democracy.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1605</p>
    <p class="eTxt">{language === 'PL' ? 'Bitwa pod Kircholmem - wygrana polskich wojsk, mimo 3-krotnej przewagi liczebnej przeciwnika' : 'Battle of Kircholm – a victory of Polish forces despite the enemy’s threefold numerical advantage.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1611</p>
    <p class="eTxt">{language === 'PL' ? 'Bitwa pod Kłuszynem – spektakularne zwycięstwo husarii, jedno z największych sukcesów militarnych Rzeczpospolitej.' : 'Battle of Klushino – a spectacular victory of the Polish hussars, one of the greatest military achievements of the Commonwealth.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1659</p>
    <p class="eTxt">{language === 'PL' ? 'Rozkwit produkcji wódki – wódka zaczyna być uważana za towar eksportowy.' : 'The flourishing of vodka production – vodka begins to be considered an export product.'}</p>
  </div>
  <div class="event">
    <p class="eDate">1683</p>
    <p class="eTxt">{language === 'PL' ? 'Odsiecz wiedeńska – zwycięstwo Jana III Sobieskiego nad armią osmańską, kluczowe wydarzenie dla Europy chrześcijańskiej.' : 'Relief of Vienna – John III Sobieski’s victory over the Ottoman army, a crucial event for Christian Europe.'}</p>
  </div>
  <div class="event">
    <p class="eDate">XVIII w.</p>
    <p class="eTxt">{language === 'PL' ? 'Złoty wiek polskiej szlachty – rozwój tradycji biesiad, polowań oraz zestawiania wódek na różne okazje.' : 'Golden age of Polish nobility – the development of traditions such as feasting, hunting, and pairing vodkas for various occasions.'}</p>
  </div>
  {/* <div class="event2">
    </div>
    <div class="event2">
    </div>
    <div class="event2">
    </div> */}
</div></div>

            </section>
          

        </div>
    );
}

export default Home;
