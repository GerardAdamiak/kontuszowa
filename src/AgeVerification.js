import React, { useState } from 'react';
import handImage from './hand.png'; // Import the image

const AgeVerification = ({ setIsVerified }) => {
  const [showMirroredImage, setShowMirroredImage] = useState(false);
  const [animateLeftImage, setAnimateLeftImage] = useState(false); // New state to animate the left image

  const handleYesClick = () => {
    setAnimateLeftImage(true); // Trigger animation for the left image
    setTimeout(() => {
      setShowMirroredImage(true); // Show mirrored image after the left image starts animating
    }, 10); // Adjust time to sync animations
    setTimeout(() => {
      setIsVerified(true); // After animation, mark as verified
    }, 2500); // Adjust time based on animation duration
  };

  const handleNoClick = () => {
    alert('You must be of legal age to access this site.');
    setIsVerified(false);  // Redirect or block access
  };

  return (
    <div className="age-verification">
      {/* Image on the left side with the sliding animation */}
      <img
        src={handImage}
        alt="Hand holding a glass of whiskey"
        className={`whiskey-image ${animateLeftImage ? 'slideInLeft' : ''}`} // Add the animation class conditionally
      />

      {/* Age verification text and buttons */}
      <div className="age-verification-content">
        <h1>Are you of legal drinking age?</h1>
        <div className="buttons">
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
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
