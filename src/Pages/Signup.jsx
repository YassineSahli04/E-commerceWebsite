import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
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
        name: '',
        email: '',
        password: ''
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder='Jane Smitherton' 
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder='email@janesfakedomain.net' 
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder='Password' 
            className={errors.password ? 'error-input' : ''}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">Already have an account ? <Link to='/login'><span>Log in here</span></Link></p>
      </div>
    </div>
  ) 
}

export default Signup;
