// Main.jsx

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Main.css';


const Main = () => {
  return (
    <div>
      <div className="search-bar">
        <h2>DREAM HERE... </h2>
        <input type="text" placeholder="Search for apartments..." />
        <FaSearch className="search-icon" />
      </div>

      <div className="background-image">
        {/* Apartment Card 1 */}
        <div className="apartment-card">
          <img src="img.jpeg" alt='img.jpeg' />
          <h3>Apartment 1</h3>
          <p>Details about Apartment 1.</p>
        </div>

        {/* Apartment Card 2 */}
        <div className="apartment-card">
          <img src="apt2.jpeg" alt="Apartment 2" />
          <h3>Apartment 2</h3>
          <p>Details about Apartment 2.</p>
        </div>

        <div className="apartment-card">
          <img src="apt3.jpeg" alt="Apartment 3" />
          <h3>Apartment 3</h3>
          <p>Details about Apartment 3.</p>
        </div>
      </div>

      <div className="total-sold">
        <h3>Total Sold Apartments</h3>
      </div>

      <div className="footer">
        <h3>Footer </h3>
      </div>
     
    </div>
  );
};

export default Main;
