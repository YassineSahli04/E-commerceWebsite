import React, { useState } from 'react';
import './CSS/Contact_us.css'; 
import hero_image from '../Components/Assets/Picture1.jpg';

const Contact_us = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    article: '',
    artisan: '', 
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        category: '',
        article: '',
        artisan: '',
        message: ''
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact">
        <h1>Contact us for any questions you have</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            First name
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              placeholder="Jane" 
              className={errors.firstName ? 'error-input' : ''}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </label>
          <label>
            Last name
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              placeholder="Smitherton" 
              className={errors.lastName ? 'error-input' : ''}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </label>
          <label>
            Email address
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="email@janesfakedomain.net" 
              className={errors.email ? 'error-input' : ''}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Your Message
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Enter your question or message" 
              className={errors.message ? 'error-input' : ''}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="hero1">
        <img src={hero_image} alt="Hero1" />
      </div>
    </div>
  );
};

export default Contact_us;

