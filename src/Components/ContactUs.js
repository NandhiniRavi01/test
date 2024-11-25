import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa'; 
import './ContactUs.css';

function ContactUs() {
  const [contacts, setContacts] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Fetch contact details from the backend API
  useEffect(() => {
    /*const fetchContactData = async () => {
      try {
        const response = await fetch('http://localhost:3001/fetch-contact');
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data:", data);
          setContacts(data.contacts); 
        } else {
          setError('Contact information not found');
        }
      } catch (error) {
        console.error('Error fetching data from the backend:', error);
        setError('Error fetching contact details');
      } finally {
        setLoading(false); 
      }
    };*/
    let contact=[{"name":"1","link":"NISADYA DoMS NITT | LinkedIn","logo":"fab fa-linkedin"},{"name":"2","link":"https://www.instagram.com/nisadyanitt/","logo":"fab fa-instagram"},{"name":"3","link":"https://web.whatsapp.com/","logo":"fab fa-whatsapp"},{"name":"4","link":"1234567890","logo":"fas fa-phone"}]
    setContacts(contact);
    setLoading(false);
    //fetchContactData();
  }, []); 

  return (
    <div className="contact-us-container">
      <div className="contact-details">
        {loading && <div className="loading-spinner">Loading...</div>}
        {error && <p className="error">{error}</p>} 

        {/* Display contact details once data is available */}
        {!loading && !error && contacts && contacts.length > 0 ? (
          <>
            <h4>Contact Us</h4>
            <p>Feel free to reach out through any of the platforms below:</p>

            <div className="contact-links">
              {contacts.map((contact, index) => (
                <div key={index}>
                  {contact.name === "1" && contact.link && (
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                       <i className={`${contact.logo} `}></i>LinkedIn
                    </a>
                  )}
                  {contact.name === "2" && contact.link && (
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <i className={`${contact.logo} `}></i> Instagram
                    </a>
                  )}
                  {contact.name === "3" && contact.link && (
                    <a
                      href={contact.link} // WhatsApp link with correct format
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <i className={`${contact.logo} `}></i>WhatsApp
                    </a>
                  )}
                  {contact.name === "4" && contact.link && (
                    <a
                      href={`tel:${contact.link}`} // Phone number link with `tel:`
                      className="contact-link"
                    >
                      <i className={`${contact.logo} `}></i>{contact.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          !loading && !error && <p>No contact information available</p> // Fallback message if no contacts
        )}
      </div>
    </div>
  );
}

export default ContactUs;
