import React from 'react';
import './sample.css'; // Import the CSS for the animation

const FirefliesBackground = () => {
  const fireflies = [];
  
  // Generate 30 fireflies with random positions and animation delays
  for (let i = 0; i < 30; i++) {
    fireflies.push(
      <div
        className="firefly"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`, // Random delay for each firefly
        }}
        key={i}
      ></div>
    );
  }

  return (
    <div className="fireflies-background">
      {fireflies}
    </div>
  );
};

export default FirefliesBackground;
