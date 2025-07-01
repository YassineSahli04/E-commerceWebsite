import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Breadcrum = (props) => {
  const { product } = props;
  const { t } = useTranslation();

  return (
    <div className='breadcrum'>
      <ul className="breadcrum-list">
        <li>
          <Link to='/'>{t('home')} </Link>
        </li>
        <img src={arrow_icon} alt="arrow" className="breadcrum-arrow" />
        <li>
          <Link to='/products'>{t('products')}</Link>
        </li>
        <img src={arrow_icon} alt="arrow" className="breadcrum-arrow" />
        <li className="breadcrum-product">
          {product.description}
        </li>
      </ul>
    </div>
  );
}

export default Breadcrum;
