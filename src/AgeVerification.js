import React, { useState, useEffect, useMemo } from 'react';
import handImage from './hand.png';
import logoImage from './LogoKontuszowa.png';

const AgeVerification = ({ setIsVerified, language}) => {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'Weryfikacja Wieku' : 'Age Verification';
  }, [language]);

  const [showMirroredImage, setShowMirroredImage] = useState(false);
  const [animateLeftImage, setAnimateLeftImage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeOutAll, setFadeOutAll] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const preloadImages = useMemo(
    () => ['/hero.png', '/pergaminDol.png'],
    []
  );

  const handleYesClick = () => {
    setTimeout(() => {
      setAnimateLeftImage(true);
    }, 1600);
    setFadeOut(true);
    setTimeout(() => {
      setShowMirroredImage(true);
    }, 10);
    setTimeout(() => {
      setIsVerified(true);
    }, 2500);
  };

  const handleNoClick = () => {
    setFadeOutAll(true);
    setTimeout(() => {
      setShowMessage(true);
    }, 800);
  };

  // Preload images when the component mounts
  useEffect(() => {
    if (preloadImages) {
      preloadImages.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    }
  }, [preloadImages]);

  return (
    <div className="age-verification">
      {showMessage ? (
        <div className="noContent">
          <div className="fade-in-message">Do zobaczenia wkrótce</div>
          <div>
            <img src={logoImage} alt="Logo Kontuszowa" className="fade-in-image" />
          </div>
        </div>
      ) : (
        <>
          <img
            src={handImage}
            alt="Hand holding a glass of whiskey"
            className={`whiskey-image ${animateLeftImage ? 'slideInLeft' : ''} ${fadeOutAll ? 'fade-out' : ''}`}
          />
          <div className="metamorphous-regular">
            <div className={`age-verification-content ${fadeOut ? 'fade-out' : ''} ${fadeOutAll ? 'fade-out' : ''}`}>
              <h1>{language === 'PL' ? 'Czy masz ukończone 18 lat?' : 'Are you of legal drinking age?'}</h1>
              <div className="buttons">
                <button onClick={handleYesClick}>{language === 'PL' ? 'Tak' : 'Yes'}</button>
                <button onClick={handleNoClick}>{language === 'PL' ? 'Nie' : 'No'}</button>
              </div>
            </div>
          </div>
          {showMirroredImage && (
            <img
              src={handImage}
              alt="Mirrored hand holding a glass of whiskey"
              className="mirrored-image"
            />
          )}
        </>
      )}
    </div>
  );
};

export default AgeVerification;
