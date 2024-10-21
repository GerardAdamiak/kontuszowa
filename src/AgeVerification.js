import React, { useState } from 'react';
import handImage from './hand.png'; // Import the image


const AgeVerification = ({ setIsVerified }) => {
  const [showMirroredImage, setShowMirroredImage] = useState(false);
  const [animateLeftImage, setAnimateLeftImage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // State to trigger fade-out

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
    alert('You must be of legal age to access this site.');
    setIsVerified(false); // Redirect or block access
  };

  return (
    
    <div className="age-verification">
      
      {/* Image on the left side with the sliding animation */}
      <img
        src={handImage}
        alt="Hand holding a glass of whiskey"
        className={`whiskey-image ${animateLeftImage ? 'slideInLeft' : ''}`}
      />

      {/* Age verification text and buttons with fade-out */}
      <div className='metamorphous-regular'>
        
      <div className={`age-verification-content ${fadeOut ? 'fade-out' : ''}`}>
        <h1>Are you of legal drinking age?</h1>
        <div className="buttons">
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
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
    </div>
  );
};

export default AgeVerification;
