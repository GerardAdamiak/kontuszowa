import React, { useState } from 'react';
import handImage from './hand.png'; // Import the image
import logoImage from './LogoKontuszowa.png'; // Import the image

const AgeVerification = ({ setIsVerified, language }) => {
  React.useEffect(() => {
    document.title = language === 'PL' ? 'Weryfikacja Wieku' : 'Age Verification';
  }, [language]);

  const [showMirroredImage, setShowMirroredImage] = useState(false);
  const [animateLeftImage, setAnimateLeftImage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // State to trigger fade-out
  const [fadeOutAll, setFadeOutAll] = useState(false); // State to trigger fade-out
  const [showMessage, setShowMessage] = useState(false); // State to control message display

  const handleYesClick = () => {
    setTimeout(() => {
      setAnimateLeftImage(true);
    }, 1600);
    setFadeOut(true); // Trigger fade-out effect
    setTimeout(() => {
      setShowMirroredImage(true); // Show mirrored image after animation starts
    }, 10);
    setTimeout(() => {
      setIsVerified(true); // After fade-out, mark as verified
    }, 2500); // Ensure this matches the CSS transition duration (1s)
  };

  const handleNoClick = () => {
    setFadeOutAll(true); // Fade out all content
    setTimeout(() => {
      setShowMessage(true); // Show "Do zobaczenia wkrótce" after fade-out
    }, 800); // Ensure this matches the fade-out duration in CSS
  };

  return (
    <div className="age-verification">
      {/* Display message if showMessage is true */}
      {showMessage ? (
        <div className='noContent'>
        <div className="fade-in-message">Do zobaczenia wkrótce</div>
        <div>
        <img
            src={logoImage}
            alt="Hand holding a glass of whiskey"
            className={"fade-in-image"}
          />
        </div>
        </div>
      ) : (
        <>
          {/* Image on the left side with the sliding animation */}
          <img
            src={handImage}
            alt="Hand holding a glass of whiskey"
            className={`whiskey-image ${animateLeftImage ? 'slideInLeft' : ''} ${fadeOutAll ? 'fade-out' : ''}`}
          />

          {/* Age verification text and buttons with fade-out */}
          <div className="metamorphous-regular">
            <div className={`age-verification-content ${fadeOut ? 'fade-out' : ''} ${fadeOutAll ? 'fade-out' : ''}`}>
              <h1>{language === 'PL' ? 'Czy masz ukończone 18 lat?' : 'Are you of legal drinking age?'}</h1>
              <div className="buttons">
                <button onClick={handleYesClick}>{language === 'PL' ? 'Tak' : 'Yes'}</button>
                <button onClick={handleNoClick}>{language === 'PL' ? 'Nie' : 'No'}</button>
              </div>
            </div>
          </div>

          {/* Mirrored image appears when "Yes" is clicked */}
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
