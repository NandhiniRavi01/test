import React, { useEffect, useState } from 'react';
import './Schedule.css'; // Optional: For styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import axios from 'axios'; // To make HTTP requests

const Schedule = () => {
  const navigate = useNavigate(); // Get navigate function for routing
  const [scheduleData, setScheduleData] = useState([]); // Store schedule data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  
  // Fetch schedule data on component mount
  useEffect(() => {
    // Simulating API call with a hardcoded Schedule (for testing)
    const schedule = [
      {"id":"1","day":"","event":"Sankalp","prizemoney":"17k","registerLink":"https://www.nisadyanitt.in/event/2"},
      {"id":"2","day":"","event":"Chanakya","prizemoney":"15k","registerLink":"https://www.nisadyanitt.in/event/3"},
      {"id":"3","day":"","event":"Merx","prizemoney":"17k","registerLink":"https://www.nisadyanitt.in/event/4"},
      {"id":"4","day":"","event":"Praxis","prizemoney":"17k","registerLink":"https://www.nisadyanitt.in/event/5"},
      {"id":"5","day":"","event":"Vriddhi","prizemoney":"17k","registerLink":"https://www.nisadyanitt.in/event/6"},
      {"id":"6","day":"","event":"Pravaran","prizemoney":"17k","registerLink":"https://www.nisadyanitt.in/event/7"},
      {"id":"7","day":"","event":"Strategy Sprint","prizemoney":"17k","registerLink":"https://www.nisadyanitt.in/event/8"},
      {"id":"8","day":"","event":"Serpentine Draft","prizemoney":"9k","registerLink":"https://www.nisadyanitt.in/event/9"},
      {"id":"9","day":"","event":"Uttar","prizemoney":"5k","registerLink":"https://www.nisadyanitt.in/event/10"},
      {"id":"10","day":"","event":"Gavel","prizemoney":"3k","registerLink":"https://www.nisadyanitt.in/event/11"},
      {"id":"11","day":"","event":"Manifest","prizemoney":"3k","registerLink":"https://www.nisadyanitt.in/event/12"},
      {"id":"12","day":"","event":"Sports Quiz","prizemoney":"Prize in Kind","registerLink":"https://www.nisadyanitt.in/event/13"},
      {"id":"13","day":"","event":"Brand Quiz","prizemoney":"Prize in Kind","registerLink":"https://www.nisadyanitt.in/event/14"},
      {"id":"14","day":"","event":"AI ML Quiz","prizemoney":"Prize in Kind","registerLink":"https://www.nisadyanitt.in/event/15"}
    ];

    setScheduleData(schedule);
    setLoading(false); // Set loading to false after fetching data
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // Get today's date to highlight today's event
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  // Handle clicking on a row, navigate to event details
  const handleRowClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="schedule-container">
      <h5 className="schedule">SCHEDULE</h5>

      {loading ? (
        <p>Loading...</p> // Show loading text if data is still being fetched
      ) : error ? (
        <p>{error}</p> // Show error message if data fetch fails
      ) : (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Prize Money</th>
              <th>View Details</th>
              <th>Register Link</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item) => {
              const isToday = item.day === formattedDate; // Check if the event is today
              return (
                <tr
                  key={item.id} // Use unique id as the key
                  className={isToday ? 'highlight' : ''} // Highlight row if it's today's event
                  onClick={() => handleRowClick(item.id)} // Navigate to event details when row is clicked
                >
                  <td className={isToday ? 'highlight-day' : ''}>{item.day}</td>
                  <td className={isToday ? 'highlight-event' : ''}>{item.event}</td>
                  <td className={isToday ? 'highlight-event' : ''}>{item.prizemoney}</td>
                  
                  <td className={isToday ? 'highlight-event' : ''}>
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); // Prevent row click handler from firing
                        handleRowClick(item.id);
                      }}
                    >
                      View Details
                    </button>
                  </td>

                  <td className={isToday ? 'highlight-event' : ''}>
                    {/* Check if registerLink exists and display it as a clickable link */}
                    {item.registerLink ? (
                      <a 
                        href={item.registerLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Prevent row click handler from firing when clicking on the link
                      >
                        Register Here
                      </a>
                    ) : (
                      <p className="eventlink">No registration link available</p> // Fallback if no registerLink
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <div className="button-wrapper">
        <button onClick={() => navigate('/')} className="center-button">
          <strong>Back to Home</strong>
        </button>
      </div>
    </div>
  );
};

export default Schedule;
