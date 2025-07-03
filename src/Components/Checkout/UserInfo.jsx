import React, { useState } from 'react';
import '../../Pages/CSS/LoginSignup.css';

export default function UserInfo({ handleContinueClick })  {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    entryDate: '',
    requireVisit: false,
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.entryDate.trim()) newErrors.entryDate = 'Entry date is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        entryDate: '',
        requireVisit: false,
        password: ''
      });
      handleContinueClick();
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Checkout</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Full Name'
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email Address'
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Phone Number'
            className={errors.phone ? 'error-input' : ''}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <input
            type="date"
            name="entryDate"
            value={formData.entryDate}
            onChange={handleChange}
            className={errors.entryDate ? 'error-input' : ''}
          />
                    <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
            className={errors.password ? 'error-input' : ''}
          />
          {errors.entryDate && <span className="error">{errors.entryDate}</span>}

            <label className="custom-checkbox-container">
            Require a visit before purchase?
            <input
                type="checkbox"
                name="requireVisit"
                checked={formData.requireVisit}
                onChange={handleChange}
            />
            <span className="checkmark"></span>
            </label>

          {formData.requireVisit && (
            <p style={{ fontSize: '14px', color: '#555' }}>
              The property fee will be refunded if you decide not to proceed after the visit.
            </p>
          )}

          {errors.password && <span className="error">{errors.password}</span>}

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};
