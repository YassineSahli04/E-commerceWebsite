import React from 'react';
import './CSS/FAQ.css';

const FAQ = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>How can we cancel the order?</h3>
        <p>You can cancel the order within 24 hours of placing it. Please contact our support team with your order ID to initiate the cancellation process.</p>
      </div>
      <div className="faq-item">
        <h3>How much time does it take for delivery?</h3>
        <p>Delivery typically takes between 5 to 7 business days, depending on your location. You will receive a tracking number once your order has been shipped.</p>
      </div>
      <div className="faq-item">
        <h3>What is the return policy?</h3>
        <p>Our return policy allows you to return products within 30 days of receipt. Please ensure the products are unused and in their original packaging. Contact our support team to initiate a return.</p>
      </div>
    </div>
  );
};

export default FAQ;
