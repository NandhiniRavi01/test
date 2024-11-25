import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Eventlist.css'; // Custom styles for event list
import Home from './Home';
import Schedule from "./Schedule";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti'; // Import arrow icons

function EventList() {
  const [activeEvent, setActiveEvent] = useState(null); 
  const [events, setEvents] = useState([]); // State to store the event details
  const [error, setError] = useState(null); // State for handling errors
  const [loading, setLoading] = useState(true); // State for loading indication
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  
  const eventyoutube = {
    1: {
      youtube_title: 'YOUTUBE LINK',
      youtube: ''
    }
  };
  const handleVideoClick = () => {
    setShowVideo(true);
  };



  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  // Safeguard for currentIndex not being out of bounds
  const currentEvent = events[currentIndex];

  // Fetch event details from the backend API
  useEffect(() => {
      /*axios
        .get(`http://localhost:3001/fetch-eventlists`) // Fetch event data
        .then((response) => {
          console.log("Event data fetched:", response.data); // Log the response to verify data
          setEvents(response.data.events); // Save event data to state
          setLoading(false); // Stop loading once the data is fetched
        })
        .catch((error) => {
          console.error("Error fetching the event data:", error);
          setError("Error fetching event details"); // Handle error case
          setLoading(false); // Stop loading on error
        });*/
        let eventResponse = [{"id":"1","event":"Sankalp","description":"Ready to transform your ideas into actionable success? Sankalp is the ultimate platform where future business innovators bring their strategies to life! .........","link":"https://www.nisadyanitt.in/event/2","icon":"fas fa-lightbulb fa-3x"},{"id":"2","event":"Chanakya","description":"Ready to take your leadership skills to the next level? CHANAKYA is where future business leaders rise to the challenge! .........","link":"https://www.nisadyanitt.in/event/3","icon":"fas fa-bullseye fa-3x"},{"id":"3","event":"Merx","description":"Ready to revolutionize the way brands connect with audiences? MERX is the ultimate marketing showdown where creative minds and strategic thinkers collide! .........","link":"https://www.nisadyanitt.in/event/4","icon":"fas fa-chart-bar fa-3x"},{"id":"4","event":"Praxis","description":"Are you ready to master the art of operational excellence? Praxis is the ultimate operations challenge where future business leaders put their skills to the test! .........","link":"https://www.nisadyanitt.in/event/5","icon":"fas fa-cogs fa-3x"},{"id":"5","event":"Vriddhi","description":"Are you ready to enhance your financial acumen? Vriddhi is the premier competition for aspiring finance professionals to showcase their expertise in real-world financial scenarios. .........","link":"https://www.nisadyanitt.in/event/6","icon":"fas fa-seedling fa-3x"},{"id":"6","event":"Pravaran","description":"Are you ready to shape the future of talent management? Pravaran is the ultimate HR event where aspiring leaders demonstrate their expertise in people management, organizational development, and employee engagement. .........","link":"https://www.nisadyanitt.in/event/7","icon":"fas fa-pencil-ruler fa-3x"},{"id":"7","event":"Strategy Sprint","description":"Are you ready to lead businesses to new heights? Strategy Sprint is the high-energy consulting competition where the sharpest minds tackle complex business challenges under intense time pressure. .........","link":"https://www.nisadyanitt.in/event/8","icon":"fas fa-wallet fa-3x"},{"id":"8","event":"Serpentine Draft","description":"Are you ready to dive into the thrilling world of cricket strategy? Serpentine Draft is the ultimate IPL-themed event where aspiring team managers and cricket enthusiasts compete to build the best franchise! .........","link":"https://www.nisadyanitt.in/event/9","icon":"fas fa-chess fa-3x"},{"id":"9","event":"Uttar","description":"Are you ready to challenge your knowledge and showcase your skills? Uttar B Quiz is the ultimate quiz competition where curious minds come together to compete for glory! .........","link":"https://www.nisadyanitt.in/event/10","icon":"fas fa-comments fa-3x"},{"id":"10","event":"Gavel","description":"Are you ready to sharpen your debating skills and engage in thought-provoking discussions? Gavel is the premier event where passionate speakers and critical thinkers come together to articulate their ideas and challenge opposing viewpoints! .........","link":"https://www.nisadyanitt.in/event/11","icon":"fas fa-balance-scale fa-3x"},{"id":"11","event":"Manifest","description":"Get ready for a fun and interactive twist on networking and business strategy! Manifest Business Charades is the ultimate event where creativity and communication collide! .........","link":"https://www.nisadyanitt.in/event/12","icon":"fas fa-bolt fa-3x"},{"id":"12","event":"Sports Quiz","description":"Sports Quiz","link":"https://www.nisadyanitt.in/event/13","icon":"fas fa-trophy fa-3x"},{"id":"13","event":"Brand Quiz","description":"Brand Quiz","link":"https://www.nisadyanitt.in/event/14","icon":"fas fa-tags fa-3x"},{"id":"14","event":"AI ML Quiz","description":"AI ML Quiz","link":"https://www.nisadyanitt.in/event/15","icon":"fas fa-brain fa-3x"}]
        setEvents(eventResponse);
        setLoading(false); 
  }, []); // Trigger effect only once when the component mounts
  const handleCardClick = (eventId) => {
    navigate(`/event/${eventId}`); // Navigate to event detail page
  };
  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [events.length]);
  // Slick Slider Settings
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="slick-next"><TiChevronRightOutline size={30} /></div>,
    prevArrow: <div className="slick-prev"><TiChevronLeftOutline size={30} /></div>,
    centerMode: true,
    centerPadding: '0',
  };
  return (
    <>
    <Home />
    <div>
      <div>
        {loading && <p>Loading event details...</p>} {/* Show loading message */}
        {error && <p className="error">{error}</p>} {/* Show error message */}
        {events.length > 0 && !loading ? (
          <div className="carousel-container">
            {/* Left Button */}
            <div className="left-button">
              <button className="arrow" onClick={handlePrev}>
                <TiChevronLeftOutline size={30} />
              </button>
            </div>

            <div className="event-details">
              <div className="event-card" onClick={() => handleCardClick(events[currentIndex].id)}>
                
                <i className={`${currentEvent.icon} event-icon`}></i>
                <h4 className="event-name">{currentEvent.event}</h4>
                <p className="describe">{currentEvent.description}</p>
                <p className="eventlink">
                  <a href={currentEvent.link} target="_blank" rel="noopener noreferrer">Register Here</a>
                </p>
              </div>
            </div>

            {/* Right Button */}
            <div className="right-button">
              <button className="arrow" onClick={handleNext}>
                <TiChevronRightOutline size={30} />
              </button>
            </div>
          </div>
        ) : (
          !loading && !error && <p>No event found</p>
        )}
      </div>
      <div>
      {eventyoutube[currentEvent] && (
              <div className="video-section">
                <button onClick={handleVideoClick}>Watch Video</button>
                {showVideo && (
                  <iframe
                    src={eventyoutube[currentEvent].youtube}
                    title={eventyoutube[currentEvent].youtube_title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                )}
                </div>
              
            )}

</div>
      <Schedule />
    </div>
  </>
);
}

export default EventList;