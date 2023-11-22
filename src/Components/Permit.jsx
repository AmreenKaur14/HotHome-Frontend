import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Permit.css'; // Import your CSS file for styling

const Permit = () => {
  const [formData, setFormData] = useState({
    builderID: '',
    builderName: '',
    builderEmail: '',
    builderPhoneNumber: '',
    location: '',
    details: '',
    status: 'Pending', // Default to 'Pending'
  });

  const [formErrors, setFormErrors] = useState({
    builderID: '',
    builderName: '',
    builderEmail: '',
    builderPhoneNumber: '',
    location: '',
    details: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Clear the related validation error when the user starts typing
    setFormErrors({
      ...formErrors,
      [e.target.id]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const newFormErrors = { ...formErrors };

    // Example validation, customize according to your requirements
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newFormErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    // If there are validation errors, update state and prevent form submission
    if (Object.values(newFormErrors).some((error) => error !== '')) {
      setFormErrors(newFormErrors);
      return;
    }

    // Proceed with form submission
    try {
      // Make an API call to your Node.js backend to submit the form data
      const response = await fetch('your_api_endpoint_here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response as needed (e.g., show success message)
      const data = await response.json();
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="permit-form-container">
      <div className="left-side">
       <video controls width="600">
          <source src="apt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       </div>
       <div className="right-side"> 
      <h1>Permit Application Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="builderID">
          <Form.Label>Builder ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter builder ID"
            value={formData.builderID}
            onChange={handleChange}
          />
          <span className="error">{formErrors.builderID}</span>
        </Form.Group>

        <Form.Group controlId="builderName">
          <Form.Label>Builder Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter builder name"
            value={formData.builderName}
            onChange={handleChange}
          />
          <span className="error">{formErrors.builderName}</span>
        </Form.Group>

        <Form.Group controlId="builderEmail">
          <Form.Label>Builder Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter builder email"
            value={formData.builderEmail}
            onChange={handleChange}
          />
          <span className="error">{formErrors.builderEmail}</span>
        </Form.Group>

        <Form.Group controlId="builderPhoneNumber">
          <Form.Label>Builder Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter builder phone number"
            value={formData.builderPhoneNumber}
            onChange={handleChange}
          />
          <span className="error">{formErrors.builderPhoneNumber}</span>
        </Form.Group>

        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
          />
          <span className="error">{formErrors.location}</span>
        </Form.Group>

        <Form.Group controlId="details">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter details"
            value={formData.details}
            onChange={handleChange}
          />
          <span className="error">{formErrors.details}</span>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default Permit;
