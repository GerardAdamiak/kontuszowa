import React from 'react';
import './App.css';


function Home({ language }) {
    React.useEffect(() => {
        document.title = language === 'PL' ? 'Strona Główna' : 'Home';

        const events = document.querySelectorAll(".hIn .event");
        const hOut = document.querySelector(".hOut");
    
        const updateCenterElement = () => {
          const hOutRect = hOut.getBoundingClientRect();
          const centerX = hOutRect.width / 2 + hOutRect.left;
    
          let closestElement = null;
          let closestDistance = Infinity;
    
          events.forEach(event => {
            const eventRect = event.getBoundingClientRect();
            const eventCenterX = eventRect.left + eventRect.width / 2;
            const distance = Math.abs(centerX - eventCenterX);
    
            if (distance < closestDistance) {
              closestDistance = distance;
              closestElement = event;
            }
          });
    
          // Remove 'active' class from all events
          events.forEach(event => event.classList.remove("active"));
    
          // Add 'active' class to the closest element
          if (closestElement) {
            closestElement.classList.add("active");
          }
    
          // Continue checking
          requestAnimationFrame(updateCenterElement);
        };
    
        // Start the loop
        updateCenterElement();
    
        return () => {
          // Cleanup when the component unmounts
          events.forEach(event => event.classList.remove("active"));
        };

    }, [language]);

    

  

  
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
      <img src="intro-section.png" alt="Higher" className="image" />
      
    </div>
    <h2>
    {language === 'PL'
      ? 'Witamy w Kontuszowej, marce wykwintnej, tradycyjnie destylowanej polskiej wódki. Każda butelka to święto autentyczności.'
      : 'Welcome to Kontuszowa, a brand of exquisite, traditionally distilled Polish vodka. Crafted with care and heritage, every bottle is a celebration of authenticity.'}
  </h2>
    {/* <div className="image-text-item-right">
      <img src="zboze.png" alt="Higher" className="image" />
      <div className="text-box right">
        <p> {language === 'PL'
      ? 'Nasze wódki są zrobione z produktów najwyższej jakości.'
      : 'Our vodkas are made out of first-class products.'}</p>
      </div>
    </div>
    {/* Second image with text on the left */}
    {/* <div className="image-text-item-left">
      <img src="3maj.png" alt="Lower" className="image" />
      <div className="text-box left">
        <p>{language === 'PL'
      ? 'Najważniejszymi wartościami dla nas są historia i tradycja.'
      : 'We value history and tradition the most.'}</p>
      </div>
    </div>  */}
  </div>
</section>


            <section className="centered-text-with-images">
                <img src="szlachta1.png" alt="Szlachta 1" className="szlachta-image" />
                <h2>{language === 'PL' ? 'OBUDŹ W SOBIE SZLACHTĘ' : 'FIND YOUR NOBLE SELF'}</h2>
                <img src="szlachta2.png" alt="Szlachta 2" className="szlachta-image" />
            </section>
            {/* Timeline Section */}
            <section className="timeline-section">
                <h1>{language === 'PL' ? 'Poznaj Historię Polski Szlacheckiej' : 'Discover History of Noble Poland'}</h1>
            <div class="hOut"><div class="hIn">
  {/* <div class="event2">
    </div>
    <div class="event2">
    </div>
    <div class="event2">
    </div> */}
  <div class="event">
    <p class="eDate">966</p>
    <p class="eTxt">{language === 'PL' ? 'Chrzest Polski – początek chrześcijańskiej kultury w Polsce, tworzenie fundamentów państwowości.' : 'Baptism of Poland – the beginning of Christian culture in Poland and the foundation of statehood.'}</p>
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
  <div class="event">
    <p class="eDate">966</p>
    <p class="eTxt">{language === 'PL' ? 'Chrzest Polski – początek chrześcijańskiej kultury w Polsce, tworzenie fundamentów państwowości.' : 'Baptism of Poland – the beginning of Christian culture in Poland and the foundation of statehood.'}</p>
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
  {/* <div class="event2">
    </div>
    <div class="event2">
    </div>
    <div class="event2">
    </div> */}
</div></div>
            </section>
            <section className="feast-section">
  <div className="feast-content">
    <h1>{language === 'PL' ? 'Trzy butelki' : 'Three bottles'}</h1>
    <h1>{language === 'PL' ? 'Trzy dzieła' : 'Three works'}</h1>
    <div className="feast-images">
      <div className="feast-item">
        <img src="/claraNixPan.png" alt="Feast 1" className="feast-image" />
        <div className="info-panel">Clara Nix to wyjątkowa wódka biała, destylowana na bazie najwyższej jakości orkiszowego spirytusu.</div>
      </div>
      <div className="feast-item">
        <img src="/alterSolPotop.png" alt="Feast 2" className="feast-image" />
        <div className="info-panel">Alter Sol to wykwintna wódka o delikatnym, miodowym smaku, który doskonale łączy naturalną słodycz z subtelną nutą korzennych przypraw.</div>
      </div>
      <div className="feast-item">
        <img src="/rosIgnisOgien.png" alt="Feast 3" className="feast-image" />
        <div className="info-panel">Ros Ignis to wódka o głębokim, wielowymiarowym smaku, inspirowana bogatą tradycją polskich nalewek ziołowych.</div>
      </div>
    </div>
  </div>
</section>


        </div>
    );
}

export default Home;
