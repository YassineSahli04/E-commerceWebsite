import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className='breadcrum'>
      <ul className="breadcrum-list">

        <li>
          <Link to='/products'>Products</Link>
        </li>
        <h1>{">"}</h1>
        <li className="breadcrum-product">
          {product.description}
        </li>
      </ul>
    </div>
  );
}

export default Breadcrum;
