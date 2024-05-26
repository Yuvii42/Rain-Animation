// script.js

// Function to create a raindrop
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    document.getElementById('rain').appendChild(raindrop);
  }
  
  // Function to start the rain animation
  function startRain() {
    setInterval(createRaindrop, 100); // Adjust interval for raindrop creation
  }
  
  // Start the rain animation when the window loads
  window.onload = startRain;
  