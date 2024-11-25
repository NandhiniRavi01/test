import React, { useEffect, useRef, useCallback, useState } from 'react';
import './Home.css';
import { Link } from 'react-scroll';
import EventImageCarousel from './EventImageCarousel';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      sidebarRef.current.classList.add('show');
    } else {
      sidebarRef.current.classList.remove('show');
    }
  }, [menuOpen]);





function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Function to handle the scroll event
    function handleScroll() {
      // Loop through elements with scroll-animation class
      document.querySelectorAll('.scroll').forEach(function(element) {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });

      // Loop through elements with scroll-animation-right-to-left class
    }
    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Trigger initial check in case elements are already visible
    handleScroll();








  

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('navigation');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header id="navigation" className="navbar-inverse navbar-fixed-top animated-header">
        <div className="title-bar">
          <div className="containerlogo">
            <div className="navbar-brand">
              <a href="/">
                <img src="/Images/nitlogo.png" alt="Logo" style={{ width: '200px' }} />
              </a>
            </div>
          </div>

          <div className="navbar-header">
            <div className="navlinks">
              <nav className="nav-links">
                <Link style={{ padding: '10px', color: 'white' }} to="full-width-image" smooth={true} duration={500} className="event-link">
                  Home
                </Link>
                <Link style={{ padding: '10px' }} to="event-details" smooth={true} duration={500} className="event-link">
                  Events
                </Link>
                <a href="/schedule" style={{ padding: '10px' }}>Schedule</a>
                <Link style={{ padding: '10px' }} to="contact-us-container" smooth={true} duration={500} className="event-link">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>

          {/* Hamburger Icon for Mobile View */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? (
              <span className="close-icon">&#10005;</span>
            ) : (
              <>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </>
            )}
          </div>
        </div>

        {/* Sidebar navigation for Mobile View */}
        <div ref={sidebarRef} className={`sidebar ${menuOpen ? 'show' : ''}`}>
          <ul className="sidebar-nav">
            <li><Link to="full-width-image" smooth={true} duration={500} onClick={toggleMenu} className="event-link">Home</Link></li>
            <li><Link to="event-details" smooth={true} duration={500} onClick={toggleMenu} className="event-link">Events</Link></li>
            <li><a href="/schedule" onClick={toggleMenu}>Schedule</a></li>
            <li><Link to="contact-us-container" smooth={true} duration={500} onClick={toggleMenu} className="contact-info">Contact Us</Link></li>
          </ul>
        </div>
      </header>

      {/* Event Image Carousel */}
      <EventImageCarousel />

      <div className="centered-container">
        <div className="scroll">
          <section className="prizes">
            <h1>PRIZES</h1>
            <hr className="underline" />
            <p>Cash Prizes worth 25K</p>
          </section>

          <section className="events">
            <h1>EVENTS</h1>
            <hr className="underline" />
            <p>15 exciting events!</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
