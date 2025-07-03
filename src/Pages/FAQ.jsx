import React from 'react';
import './CSS/FAQ.css';
import CollapsibleList from '../Components/Filter/CollapsibleList';

const FAQ = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>

      <CollapsibleList
        defaultVisible={false}
        title="How do I schedule a property visit?"
      >
        <div className='answer'>
          <p>You can schedule a visit by selecting the "Require a visit before purchase" option during checkout. We'll then contact you to arrange a suitable time.</p>
        </div>
      </CollapsibleList>

      <CollapsibleList
        defaultVisible={false}
        title="What payment methods are accepted?"
      >
        <div className='answer'>
          <p>We accept major credit and debit cards (Visa, MasterCard, AMEX), and secure online payment gateways.</p>
        </div>
      </CollapsibleList>

      <CollapsibleList
        defaultVisible={false}
        title="Can I cancel my booking after confirmation?"
      >
        <div className='answer'>
          <p>Yes, cancellations are possible within 24 hours of confirmation. For assistance, contact our support team with your booking reference.</p>
        </div>
      </CollapsibleList>

      <CollapsibleList
        defaultVisible={false}
        title="How do I know if a property is still available?"
      >
        <div className='answer'>
          <p>All property listings are updated in real-time. If a property is marked as available, it is ready for booking or visit scheduling.</p>
        </div>
      </CollapsibleList>

      <CollapsibleList
        defaultVisible={false}
        title="Do I need to create an account to book a property?"
      >
        <div className='answer'>
          <p>Yes, you must create an account to finalize your booking and track your order. This also helps us provide personalized support.</p>
        </div>
      </CollapsibleList>

    </div>
  );
};

export default FAQ;
