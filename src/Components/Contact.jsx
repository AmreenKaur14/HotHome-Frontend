import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [ setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the related validation error when the user starts typing
    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const newFormErrors = { ...formErrors };

    if (!formData.firstName.trim()) {
      newFormErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newFormErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newFormErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newFormErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newFormErrors.message = 'Message is required';
    }

    // If there are validation errors, update state and prevent form submission
    if (Object.values(newFormErrors).some((error) => error !== '')) {
      setFormErrors(newFormErrors);
      return;
    }

    // Proceed with form submission
    try {
      const response = await fetch('http://your-nodejs-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully!');
        // You can handle success accordingly (e.g., show a success message)
      } else {
        console.error('Failed to send data.');
       
      }
    } catch (error) {
      console.error('Error sending data:', error)
      setError(error); 
    }
  };

  return (
    <div>

      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <span className="error">{formErrors.firstName}</span>
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <span className="error">{formErrors.lastName}</span>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error">{formErrors.email}</span>
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <span className="error">{formErrors.message}</span>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
