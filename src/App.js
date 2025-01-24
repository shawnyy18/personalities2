import React, { useState } from "react";
import './App.css';

function App() {
  const fullName = "SHAWN ASHLEE GUARIN - IT3A"; // Your Name and Section
  const [displayText, setDisplayText] = useState("C-PEITEL3 EXPECTATIONS");

  const handleButtonClick = (text) => {
    setDisplayText(text);
  };

  return (
    <div className="CalculatorContainer">
      <h1>{fullName}</h1>
      <div className="Display">{displayText}</div>
      <div className="ButtonContainer">
        {[
          { key: "1", text: "Being On Time" },
          { key: "2", text: "Making An Effort" },
          { key: "3", text: "Being High Energy" },
          { key: "4", text: "Having A Positive Attitude" },
          { key: "5", text: "Being Passionate" },
          { key: "6", text: "Using Good Body Language" },
          { key: "7", text: "Being Coachable" },
          { key: "8", text: "Doing A Little Extra" },
          { key: "9", text: "Being Prepared" },
          { key: "RESET", text: "10 Things That Require Zero Talent", className: "special span-two" },
          { key: "0", text: "Having A Strong Work Ethic" },
          { key: "NAME", text: fullName.toUpperCase(), className: "special span-two" },
          {
            key: "What I learned?",
            text: "I learned how to create a React app and manage state effectively.",
          },
          {
            key: "What I want to learn?",
            text: "I want to learn advanced React concepts like hooks and context.",
          },
          {
            key: "How will I learn?",
            text: "I will learn by building projects, taking online courses, and exploring documentation.",
          },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => handleButtonClick(item.text)}
            className={item.className || ""}
          >
            {item.key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
