import React from 'react';
import './DescriptionBox.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const DescriptionBox = (props) => {
  const { product } = props;

  return (
    <div className='descriptionbox' role="region" aria-labelledby="reviews-heading">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">{'reviews'}</div>
      </div> 
      
      <div className="descriptionbox-description">
        <h3 id="reviews-heading">Reviews On:  {product.description}</h3>
        
        <div className="review" role="article">
          <p>Jon Wolker</p>
          <div className="review-stars" role="img" aria-label={`${'rating'} 5 ${'stars'}`}>
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
          </div>
          <p>What a nice place to live. I hope someone will be able to afford it.</p>
        </div>
        
        <div className="review" role="article">
          <p>Cathy Ross</p>
          <div className="review-stars" role="img" aria-label={`${'rating'} 4 ${'stars'}`}>
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_dull_icon} alt={'empty_star'} />
          </div>
          <p>I would live here for the rest of my life.</p>
        </div>
        
        <div className="review" role="article">
          <p>Emry Wild</p>
          <div className="review-stars" role="img" aria-label={`${'rating'} 4 ${'stars'}`}>
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_icon} alt={'filled_star'} />
            <img src={star_dull_icon} alt={'empty_star'} />
          </div>
          <p>I really like this property. I would highly recommand.</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
