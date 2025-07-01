import React from 'react';
import { useTranslation } from 'react-i18next';
import './DescriptionBox.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const DescriptionBox = (props) => {
  const { t } = useTranslation();
  const { product } = props;

  return (
    <div className='descriptionbox' role="region" aria-labelledby="reviews-heading">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">{t('reviews')}</div>
      </div> 
      
      <div className="descriptionbox-description">
        <h3 id="reviews-heading">{t('reviews_on')} {t(`product_${product.id}_description`)}</h3>
        
        <div className="review" role="article">
          <p>{t('review_1')}:</p>
          <div className="productdisplay-right-stars" role="img" aria-label={`${t('rating')} 5 ${t('stars')}`}>
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
          </div>
          <p>{t('review_1_text')}</p>
          <p><strong>{t('rating')}:</strong> 5/5</p>
        </div>
        
        <div className="review" role="article">
          <p>{t('review_2')}:</p>
          <div className="productdisplay-right-stars" role="img" aria-label={`${t('rating')} 4 ${t('stars')}`}>
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_dull_icon} alt={t('empty_star')} />
          </div>
          <p>{t('review_2_text')}</p>
          <p><strong>{t('rating')}:</strong> 4/5</p>
        </div>
        
        <div className="review" role="article">
          <p>{t('review_3')}:</p>
          <div className="productdisplay-right-stars" role="img" aria-label={`${t('rating')} 4 ${t('stars')}`}>
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_icon} alt={t('filled_star')} />
            <img src={star_dull_icon} alt={t('empty_star')} />
          </div>
          <p>{t('review_3_text')}</p>
          <p><strong>{t('rating')}:</strong> 4/5</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
