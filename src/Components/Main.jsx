import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaComment, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './Main.css';

const Main = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');

  const handleChatIconClick = () => {
    setShowChat(true);
    setMessage('We would love to hear from you...');
  };

  // Function to handle feedback submission
  const handleSubmitFeedback = async () => {
    try {
      // Make an API call to save the feedback message
      const response = await fetch('your_api_endpoint_here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedbackMessage: message }), // Use the 'message' state for feedback
      });

      // Handle the response as needed (e.g., show success message)
      const data = await response.json();
      console.log('API Response:', data);

      // Close the feedback box after sending the message
      setShowChat(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <h2>DREAM HERE... </h2>
        <input type="text" placeholder="Search for apartments..." />
        <Link to="/apartment">
          <FaSearch className="search-icon" />
        </Link>
      </div>

      <div className="about-section">
        <h2>The Best Place to find your dream home...</h2>
        <h5>
          Welcome to your dream home search – a sanctuary where aspirations meet reality, and every corner resonates
          with the promise of a perfect abode. Discover unparalleled elegance and comfort as you embark on a journey with
          us, your guide to finding the best place to call home. Explore the finest listings, tailored to meet your unique
          preferences, making your dream home a tangible reality. It's not just a search; it's an experience – The Best
          Place to find your dream home.
        </h5>
      </div>

      <div className="video-section">
        <video controls width="600">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="footer">
        <div className="footer-content">
          <h3>HotHome - A Real Estate Company </h3>

          <div className="chat-icon" onClick={handleChatIconClick}>
            <FaComment />
          </div>

          {showChat && (
            <div className="chat-box">
              <div className="chat-header">
                <span>Chat</span>
                <button onClick={() => setShowChat(false)}>Close</button>
              </div>
              <div className="chat-body">
                <p>{message}</p>
               
              </div>
              <div className="chat-footer">
                <input
                  type="text"
                  
                  value={message}
                  placeholder="Type your message..."
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSubmitFeedback}>Send</button>
              </div>
            </div>
          )}

          <div className="social-icons">
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://www.whatsapp.com/">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </div>

          <p>&copy; Amreen</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
