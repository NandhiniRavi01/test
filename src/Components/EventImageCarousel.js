import React, { useEffect, useState, useRef, useCallback } from 'react';

const EventImageCarousel = () => {
  const images = [
    '/Images/event.avif',
    '/Images/event.jpeg',
    '/Images/event1.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = images.length;

  // Ref to store the debounce timeout
  const mouseMoveRef = useRef(null);

  // This flag prevents auto-rotation from resetting on mouse move
  const isMouseMoving = useRef(false);

  // Debounced image update based on mouse move
  const updateImageIndex = (direction) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + direction + totalImages) % totalImages);
  };

  function typeLineByLine() {
    const spans = document.querySelectorAll('.text-container span');
    spans.forEach((span, index) => {
      const delay = parseInt(span.getAttribute('data-delay')) || index * 3; // Delay between lines
      setTimeout(() => {
        span.classList.add('visible'); // Add 'visible' class to trigger typing animation
      }, delay * 1000);
    });
  }

  // Intersection Observer to detect when the text-container becomes visible
  

  // Observe the .text-container element
  // Intersection Observer to detect when the text-container becomes visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeLineByLine(); // Start typing animation
        observer.disconnect(); // Stop observing after the animation starts
      }
    });
  });
  
  // Select the .text-container element
  const textContainer = document.querySelector('.text-container');
  
  // Check if the element exists before observing
  if (textContainer) {
    observer.observe(textContainer);
  } else {
    console.error('.text-container element not found!');
  }
  

  // Mouse move logic for image carousel
  const handleMouseMove = useCallback((event) => {
    if (mouseMoveRef.current) {
      clearTimeout(mouseMoveRef.current);
    }

    mouseMoveRef.current = setTimeout(() => {
      if (event.clientX > window.innerWidth / 2) {
        updateImageIndex(1); // Move to next image
      } else {
        updateImageIndex(-1); // Move to previous image
      }
      isMouseMoving.current = false;
    }, 300); // 300ms debounce time
  }, [totalImages]);

  // Auto-rotation logic for images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseMoving.current) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
      }
    }, 3000); // Auto-rotate every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [totalImages]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseMoveRef.current);
    };
  }, [handleMouseMove]);

  return (
    <div>
      <div className="carousel">
        <img src={images[currentImageIndex]} alt="Event" className="event-image" />
      </div>
      <div class="text-container">


<span data-delay="0">Nisadya, organized by the Department of Management Studies, NIT Trichy, is a one of a kind multifaceted event  </span>
<br></br>
<span data-delay="3">that brings together business acumen and cultural vibrance. Aiming to celebrate the spirit and values of </span>
<br></br>
<span data-delay="6"> NIT Trichy, Nisadya offers a dynamic platform for participants to compete, connect, and celebrate. With </span>
<br></br>
<span data-delay="9">10+ competitions, workshops, and informal events, DoMS NIT Trchy aims to create a valuable experience for  </span>
<br></br>
<span datadelay='12'>our participants. As Nisadya enters its 5th edition, we are back with new exciting events and stages under the </span>
<br></br>
<span datadelay='15'> theme of <a>"AI in Action:  Leading with Responsible Business Innovations".</a> Join us and experience the perfect </span>
<br></br>
<span datadelay='18'> blend of fun and learning with our interactive workshops and thematic competitions.</span>
</div>
    
    </div>
  );
};

export default EventImageCarousel;
