import React, { useEffect, useState } from "react";
import "./App.css";

const words = ["democracy", "nihil novi", "tolerance"];

function AnimatedText() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const randomHeight = Math.random() * 80 + 10; // Random position from 10% to 90% height
      const randomDelay = Math.random() * 1000; // Random delay for appearance

      setTexts((prevTexts) => [
        ...prevTexts,
        {
          word: randomWord,
          top: `${randomHeight}%`,
          delay: randomDelay,
        },
      ]);
    }, 3000); // New word every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="animated-text-container">
      {texts.map((text, index) => (
        <div
          key={index}
          className="animated-text"
          style={{
            top: text.top,
            animation: `appear 3s ease forwards ${text.delay}ms`,
          }}
        >
          {text.word}
        </div>
      ))}
    </div>
  );
}

export default AnimatedText;
