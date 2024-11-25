import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './App.css';

// Importing Components
import EventList from './Components/Eventlist';
import EventDetailexcel from './Components/Eventexcel';
import Schedule from './Components/Schedule';
import ContactUs from './Components/ContactUs';

// Main Application Component
function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

// MainApp Component
function MainApp() {
  return (
    <div className="App">
      {/* Background Layers */}
      <ParticlesBackground />
      <div className="animated-gradient"></div>

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetailexcelWrapper />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>

      {/* Always render ContactUs component */}
      <ContactUs />
    </div>
  );
}

// Wrapper for EventDetailexcel to handle the event ID from URL
const EventDetailexcelWrapper = () => {
  const { id } = useParams(); // Get event ID from URL
  return <EventDetailexcel eventId={id} />; // Pass the id to EventDetailexcel
};

// Particles Animation Component
const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.1,
            },
          },
          links: {
            enable: true,
            distance: 120,
            color: '#FFD700',
            opacity: 0.6,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'out',
            },
            attract: {
              enable: true,
              rotateX: 3000,
              rotateY: 3000,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default App;
