import React, { useState } from 'react';
import '../../Pages/CSS/LoginSignup.css';

export default function Review({ handleSubmitReview }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    comment: '',
    visitConfirmed: false
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
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.rating.trim()) newErrors.rating = 'Rating is required';
    if (!formData.comment.trim()) newErrors.comment = 'Comment is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Review submitted:', formData);
      handleSubmitReview(formData);
      setFormData({
        name: '',
        rating: '',
        comment: '',
        visitConfirmed: false
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>Leave a Review</h2>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className={errors.rating ? 'error-input' : ''}
          >
            <option value="">Rate the experience (1-5)</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          {errors.rating && <span className="error">{errors.rating}</span>}

          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write your feedback..."
            className={errors.comment ? 'error-input' : ''}
            rows="4"
          />
          {errors.comment && <span className="error">{errors.comment}</span>}

          <label className="custom-checkbox-container">
            Did you visit the property?
            <input
              type="checkbox"
              name="visitConfirmed"
              checked={formData.visitConfirmed}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>

          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
}
