import React, { useState, useEffect } from 'react';
import './Apartment.css';

const Apartment = () => {
  const [apartments, setApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [locations] = useState(['Toronto', 'Vancouver', 'Ottawa']);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [soldHousesCount, setSoldHousesCount] = useState(0);
  const [soldPropertiesCount, setSoldPropertiesCount] = useState(0);

  useEffect(() => {
    // Fetch apartment data and sold counts from your Node.js backend
    const fetchData = async () => {
      try {
        // Fetch apartment data
        const response = await fetch('your_apartment_api_endpoint_here');
        const data = await response.json();
        setApartments(data);
        setFilteredApartments(data);

        // Fetch sold counts
        const soldCountsResponse = await fetch('your_sold_counts_api_endpoint_here');
        const soldCountsData = await soldCountsResponse.json();
        setSoldHousesCount(soldCountsData.soldHousesCount);
        setSoldPropertiesCount(soldCountsData.soldPropertiesCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSearch = () => {
    applyFilters();
  };

  const applyFilters = () => {
    let filtered = [...apartments];

    if (selectedLocation) {
      filtered = filtered.filter((apt) => apt.location === selectedLocation);
    }

    if (priceRange) {
      filtered = filtered.filter((apt) => apt.price <= parseInt(priceRange));
    }

    setFilteredApartments(filtered);
  };

  
  return (
    <div className="apartment-container">
      <div className="left-side">
     
        <h3>Your search ends here...</h3>
       

      </div>
      <div className="right-side"> 
      {/* Filters */}
      <div className="filter-container">
        <label htmlFor="location">Location:</label>
        <select id="location" value={selectedLocation} onChange={handleLocationChange}>
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <label htmlFor="priceRange">Price Range:</label>
        <input
          type="text"
          id="priceRange"
          placeholder="Enter max price"
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
      </div>

      {/* Search Button */}
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      {/* Apartment Cards */}
      <div className="apartment-cards">
        <h3>Available Apartments</h3>
        {filteredApartments.map((apt) => (
          <div className="apartment-card" key={apt.id}>
            <h4>{apt.name}</h4>
            <p>Location: {apt.location}</p>
            <p>Price: ${apt.price}</p>
            {/* Add other apartment details as needed */}
          </div>
        ))}
      </div>

      {/* Sold Counts */}
      <div className="sold-counts">
        <h3>Sold Counts</h3>
        <p>Sold Houses: {soldHousesCount}</p>
        <p>Sold Properties: {soldPropertiesCount}</p>
      </div>
      </div>
    </div>
  )
};

export default Apartment;
