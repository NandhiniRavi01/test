import React, { useEffect } from 'react';
import './App.css';
import EventList from './Components/Eventlist';
import EventDetail from './Components/Eventdetails';
import Schedule from './Components/Schedule';
import ContactUs from './Components/ContactUs';

import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const isSchedulePage = location.pathname === '/schedule';

  return (
    <div>
      {/* Background Layers */}
      <div className="animated-gradient"></div>
      
      {/* Only show particles if not on the Schedule page */}
      {!isSchedulePage && <Particles />}

      {/* Main Content */}
      <div className="main-content">
      
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetailWrapper />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
      <ContactUs />
    </div>
  );
}

const Particles = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles");

    // Function to create particles
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Randomized particle properties for a soft, varied effect
      const size = Math.random() * 20 + 5 + "px";
      particle.style.width = size;
      particle.style.height = size;
      particle.style.top = Math.random() * 100 + "%";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s"; // Longer animations for soft movement
      particlesContainer.appendChild(particle);

      // Remove particle after animation ends
      setTimeout(() => {
        particlesContainer.removeChild(particle);
      }, 20000);
    };

    // Generate particles more frequently for a denser effect
    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return <div id="particles" className="particles"></div>;
};

const EventDetailWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate('/');
  };

  return <EventDetail id={id} onBack={handleBack} />;
};

export default App;
