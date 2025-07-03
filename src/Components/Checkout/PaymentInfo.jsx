import React, { useState } from 'react';
import '../../Pages/CSS/LoginSignup.css';

export default function PaymentInfo({handlePayClick}) {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
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
    const newErrors = {};

    if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
    if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';

    return newErrors;
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Payment info submitted:', formData);
      handlePayClick();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>Payment Information</h2>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            placeholder="Cardholder Name"
            className={errors.cardName ? 'error-input' : ''}
          />
          {errors.cardName && <span className="error">{errors.cardName}</span>}

          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            className={errors.cardNumber ? 'error-input' : ''}
          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}

          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            className={errors.expiryDate ? 'error-input' : ''}
          />
          {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}

          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="CVV"
            className={errors.cvv ? 'error-input' : ''}
          />
          {errors.cvv && <span className="error">{errors.cvv}</span>}

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
}
