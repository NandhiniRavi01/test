import React, { useEffect, useState } from "react";
import axios from "axios";
import './Eventdetails.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing



function EventDetailexcel({ eventId }) {
  const [eventDetails, setEventDetails] = useState(null);
  const [scrollClass, setScrollClass] = useState("scroll-animation");
  const [error, setError] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Get navigate function for routing

  const eventyoutube = {
    1: {
      youtube_title: 'YOUTUBE LINK',
      youtube: ''
    }
  };

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  // Function to handle the scroll event
  function handleScroll() {
    // Loop through elements with scroll-animation class
    document.querySelectorAll('.scroll-animation').forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });

    // Loop through elements with scroll-animation-right-to-left class
    document.querySelectorAll('.scroll-animation-right-to-left').forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }

  // Add event listener for scroll event
  window.addEventListener('scroll', handleScroll);

  // Trigger initial check in case elements are already visible
  handleScroll();

  

  useEffect(() => {
    /*if (eventId) {
      axios
        .get(`http://localhost:3001/fetch-excel/${eventId}`)
        .then((response) => {
          setEventDetails(response.data);
          setError(null);
        })
        .catch((error) => {
          console.error("Error fetching the event data:", error);
          setError("Error fetching event details");
        });
    }*/
    let mockEventDetails=[
  {
    "id": "1",
    "title": "Sankalp",
    "description": "Ready to transform your ideas into actionable success? Sankalp is the ultimate platform where future business innovators bring their strategies to life! This high-impact business plan competition will challenge your entrepreneurial spirit, strategic insight, and business acumen as you navigate real-world scenarios to develop groundbreaking solutions. From identifying market opportunities to building sustainable business models, each round will push you to think big and deliver results. Stand before a panel of industry leaders, showcase your vision, and prove that you have what it takes to turn bold ideas into thriving ventures. Step up and seize the opportunity—Sankalp is where your business journey begins!",
    "date": "",
    "domain": "Business Plan",
    "participants": "UG & PG",
    "prize_money": "17k",
    "rounds": { "Total": "3" },
    "Online": "2",
    "Offline": "1",
    "judges": "2",
    "links": "https://www.nisadyanitt.in/event/2"
  },
  {
    "id": "2",
    "title": "Chanakya",
    "description": "Ready to take your leadership skills to the next level? CHANAKYA is where future business leaders rise to the challenge! This high-stakes competition will push your decision-making, problem-solving, and leadership abilities to the limit through real-world business scenarios. From crisis management to innovative strategy development, every round will test your ability to think on your feet and lead with confidence. Stand out by impressing a panel of experts with your solutions and prove that you have what it takes to thrive in today’s competitive business world. Step into the spotlight—CHANAKYA is your moment to shine!",
    "date": "",
    "domain": "Best Manager",
    "participants": "PG",
    "prize_money": "15k",
    "rounds": { "Total": "3" },
    "Online": "2",
    "Offline": "1",
    "judges": "2",
    "links": "https://www.nisadyanitt.in/event/3"
  },
  {
    "id": "3",
    "title": "Merx",
    "description": "Ready to leave your mark on the world of marketing? MERX is the ultimate marketing event where creative minds come together to craft impactful campaigns that drive real results! This high-energy competition will challenge your ability to strategize, execute, and innovate as you develop marketing campaigns that engage audiences and generate buzz. Stand before a panel of experts and showcase your marketing skills—prove that you have what it takes to make an unforgettable impact in the world of branding and consumer engagement. Step up and make your mark—MERX is your chance to shine in the marketing world!",
    "date": "",
    "domain": "Marketing",
    "participants": "UG & PG",
    "prize_money": "12k",
    "rounds": { "Total": "3" },
    "Online": "2",
    "Offline": "1",
    "judges": "2",
    "links": "https://www.nisadyanitt.in/event/4"
  },
  {
    "id": "4",
    "title": "Praxis",
    "description": "Ready to test your operational excellence? PRAXIS is where future leaders and operational experts come together to tackle real-world challenges! This exciting competition will push your ability to optimize processes, streamline operations, and drive results in dynamic business environments. From supply chain management to process improvement, each round will challenge you to think critically and apply your operational knowledge to real-life scenarios. Stand out by impressing a panel of industry experts with your strategic insights and execution. Step up to the challenge—PRAXIS is your opportunity to demonstrate your operational skills!",
    "date": "",
    "domain": "Operations",
    "participants": "UG & PG",
    "prize_money": "10k",
    "rounds": { "Total": "3" },
    "Online": "2",
    "Offline": "1",
    "judges": "2",
    "links": "https://www.nisadyanitt.in/event/5"
  },
  {
    "id": "5",
    "title": "Vriddhi",
    "description": "Are you passionate about sustainability and social impact? VRIDDHI is the perfect competition for you! This event challenges you to come up with innovative solutions that drive positive change and make a lasting impact on society and the environment. From tackling climate change to creating sustainable business models, each round will test your ability to think creatively and develop actionable solutions that benefit both the world and businesses. Step up and take charge—VRIDDHI is where change-makers rise!",
    "date": "",
    "domain": "Sustainability",
    "participants": "UG & PG",
    "prize_money": "8k",
    "rounds": { "Total": "2" },
    "Online": "2",
    "Offline": "0",
    "judges": "2",
    "links": "https://www.nisadyanitt.in/event/6"
  },
  {
    "id": "6",
    "title": "Pravaran",
    "description": "Are you ready to take your leadership and problem-solving skills to the next level? PRAVARAN is a competition that will challenge you to think critically, communicate effectively, and lead teams to success! In this event, you’ll face a series of thought-provoking scenarios that test your decision-making, strategy development, and team management abilities. From handling real-world business problems to leading teams in high-pressure situations, PRAVARAN will push you to perform at your best. Showcase your leadership skills and prove that you can rise to any challenge—PRAVARAN is your chance to shine!",
    "date": "",
    "domain": "Leadership",
    "participants": "UG & PG",
    "prize_money": "10k",
    "rounds": { "Total": "2" },
    "Online": "1",
    "Offline": "1",
    "judges": "2",
    "links": "https://www.nisadyanitt.in/event/7"
  },
  {
    "id": "7",
    "title": "Nivesh",
    "description": "Ready to make your mark in the world of finance? NIVESH is your chance to shine as a future investment guru! This competition challenges you to think like an investor, analyze financial markets, and make strategic investment decisions that yield the highest returns. From stock market simulations to portfolio management, every round will test your financial acumen and ability to predict market trends. Step into the world of finance—NIVESH is where your investment skills will be put to the test!",
    "date": "",
    "domain": "Finance",
    "participants": "UG & PG",
    "prize_money": "7k",
    "rounds": { "Total": "2" },
    "Online": "2",
    "Offline": "0",
    "judges": "2",
    "links": "https://www.nisadyanitt.in/event/8"
  },
  {
    "id": "8",
    "title": "Serpentine Draft",
    "description": "Are you ready to dive into the thrilling world of cricket strategy? Serpentine Draft is the ultimate IPL-themed event where aspiring team managers and cricket enthusiasts compete to build the best franchise! This dynamic competition will challenge your analytical skills, player assessment abilities, and strategic planning as you draft and manage your dream team. Step up to the crease—Serpentine Draft is your chance to showcase your cricketing prowess and strategy in the high-stakes world of IPL!",
    "date": "",
    "domain": "IPL ",
    "participants": "UG & PG",
    "prize_money": "9k",
    "rounds": { "Total": "2" },
    "Online": "0",
    "Offline": "2",
    "judges": "0",
    "links": "https://www.nisadyanitt.in/event/9"
  },
  {"id":"9","title":"Uttar","description":"Are you ready to challenge your knowledge and showcase your skills? Uttar B Quiz is the ultimate quiz competition where curious minds come together to compete for glory! This exciting event will test your knowledge across a wide range of topics, from current affairs and history to science and pop culture. Join us for an exhilarating experience—Uttar B Quiz is where the brightest minds compete for the title of quiz champion!","date":"","domain":"B - Quiz","participants":"UG & PG","prize_money":"5k","rounds":"{\"Total\":\"2\"}","Online":"TBD","Offline":"TBD","judges":"0","links":"https://www.nisadyanitt.in/event/10"},

  {
    "id": "10",
    "title": "Gavel",
    "description": "Are you ready to sharpen your debating skills and engage in thought-provoking discussions? Gavel is the premier event where passionate speakers and critical thinkers come together to articulate their ideas and challenge opposing viewpoints! This dynamic competition will test your ability to construct compelling arguments, think on your feet, and engage in respectful discourse. Step into the arena—Gavel is where future leaders and communicators rise to the occasion!!",
    "date": "",
    "domain": "Debate",
    "participants": "UG & PG",
    "prize_money": "3k",
    "rounds": { "Total": "2" },
    "Online": "0",
    "Offline": "2",
    "judges": "1",
    "links": "https://www.nisadyanitt.in/event/11"
  },
  {
    "id": "11",
    "title": "Manifest",
    "description": "Ready to showcase your creative genius? MANIFEST is the ultimate event for innovators and creators to bring their ideas to life! This exciting competition will push your problem-solving, innovation, and presentation skills to the limit as you craft solutions to real-world problems and present them to a panel of experts. Stand out with your unique ideas and demonstrate that you can turn vision into reality. Step up and make an impact—MANIFEST is where your creativity meets opportunity!",
    "date": "",
    "domain": "Innovation",
    "participants": "UG & PG",
    "prize_money": "12k",
    "rounds": { "Total": "2" },
    "Online": "1",
    "Offline": "1",
    "judges": "2",
    "links": "https://www.nisadyanitt.in/event/12"
  },
  {
    "id": "12",
    "title": "Sports Quiz",
    "description": "Are you a sports enthusiast with an unquenchable thirst for knowledge? The SPORTS QUIZ is the ultimate challenge for those who live and breathe sports! This fast-paced competition will test your knowledge of sports history, current events, players, and teams across a range of sports. From obscure trivia to major sporting events, every round will keep you on your toes and push your memory to the limit. Step up to the challenge—SPORTS QUIZ is your chance to prove that you’re the ultimate sports expert!",
    "date": "",
    "domain": "Sports",
    "participants": "UG & PG",
    "prize_money": "3k",
    "rounds": { "Total": "2" },
    "Online": "0",
    "Offline": "2",
    "judges": "2",
    "links": "https://www.nisadyanitt.in/event/13"
  },
  {
    "id": "13",
    "title": "Brand Quiz",
    "description": "Ready to test your knowledge of the branding world? The BRAND QUIZ is your opportunity to showcase your expertise in marketing, logos, advertising campaigns, and all things brand-related! This exciting competition will challenge your ability to recall iconic brands, their history, and the strategies behind their success. From global brands to niche players, every round will test your marketing knowledge and creativity. Step up and show the world your branding brilliance—BRAND QUIZ is where the best marketers rise to the occasion!",
    "date": "",
    "domain": "Branding",
    "participants": "UG & PG",
    "prize_money": "4k",
    "rounds": { "Total": "2" },
    "Online": "0",
    "Offline": "2",
    "judges": "0",
    "links": "https://www.nisadyanitt.in/event/14"
  },
  {
    "id": "13",
    "title": "AI ML Quiz",
    "description": "Are you passionate about artificial intelligence and machine learning? The AI ML QUIZ is the ultimate challenge for tech enthusiasts and aspiring data scientists! This fast-paced competition will test your knowledge of AI, ML algorithms, neural networks, and the latest advancements in the field. From basic concepts to cutting-edge technologies, every round will keep you on your toes and push your knowledge to the limit. Step into the world of AI—AI ML QUIZ is where the future of technology meets knowledge!",
    "date": "14",
    "domain": "AI & ML",
    "participants": "UG & PG",
    "prize_money": "3k",
    "rounds": { "Total": "2" },
    "Online": "0",
    "Offline": "2",
    "judges": "0",
    "links": "https://www.nisadyanitt.in/event/15"
  }
]

    
  const selectedEvent = mockEventDetails.find((event) => event.id === eventId);
  
    if (selectedEvent) {
      setEventDetails(selectedEvent);
    } else {
      setError("Event not found");
    }
    
  }, [eventId]);
  

  return (
    <>
      <header id="navigation" className="navbar-inverse navbar-fixed-top animated-header">
        <div className="title-bar">
          <div className="containerlogo">
            <div className="navbar-brand">
              <a href="/">
                <img src="/Images/nitlogo.png" alt="Logo" style={{ width: '200px' }} />
              </a>
            </div>
          </div>
        </div>
      </header>
  
     
      {eventDetails ? (
      
          <div className="container">
            <div className="background-container">
              <div className="text-over1">
                <div className="event-details">
                  {error ? (
                    <p className="error">{error}</p>
                  ) : (
                    <>
                      <h1 className="scroll-animation-right-to-left">{eventDetails.title}</h1>
                      <h2 className="scroll-animation-right-to-left">Description:</h2>
                      <p className="scroll-animation-right-to-left">{eventDetails.description}</p>
                      <h2 className="scroll-animation-right-to-left">Domain:</h2>
                      <p className="scroll-animation-right-to-left">{eventDetails.domain}</p>
                      <h2 className="scroll-animation-right-to-left">Participants:</h2>
                      <p className="scroll-animation-right-to-left">{eventDetails.participants}</p>
                      <h2 className="scroll-animation-right-to-left">Prize Money:</h2>
                      <p className="scroll-animation-right-to-left">{eventDetails.prize_money}</p>
                      <h2 className="scroll-animation-right-to-left">Rounds:</h2>
                      <p className="scroll-animation-right-to-left">Rounds: {eventDetails.rounds.Total}</p>
                      <h2 className="scroll-animation-right-to-left">Online:</h2>
                      <p className="scroll-animation-right-to-left">{eventDetails.Online} Rounds</p>
                      <h2 className="scroll-animation-right-to-left">Offline:</h2>
                      <p className="scroll-animation-right-to-left">{eventDetails.Offline} Rounds</p>
                      <h2 className="scroll-animation-right-to-left">Judges:</h2>
                      <p className="scroll-animation-right-to-left">{eventDetails.judges} Judges</p>
                      <h2 className="scroll-animation-right-to-left">Links:</h2>
                      <a
                        href={eventDetails.links}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '30px', paddingLeft: '20px' }}
                        className="scroll-animation-right-to-left"
                      >
                        Event Link
                      </a>
                    </>
                  )}
                </div>
              </div>

              <div className="button-wrapper">
                <button onClick={() => navigate('/')} className="center-button">
                  <strong>Back to Home</strong>
                </button>
              </div>
            </div>
          </div>
      
      ) : (
        <p>Loading event details...</p>
      )}

    </>
  );
}

export default EventDetailexcel;