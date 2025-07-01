// src/pages/Customize.js
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Customize = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <h1>Customize Product</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {all_product.map((product) => (
          <div key={product.id} style={{ margin: '10px' }}>
            <img src={product.image} alt={product.description} style={{ width: '150px', height: '150px' }} />
            <p>{product.description}</p>
            <p>Artisan: {product.artisan}</p>
            <p>Price: ${product.new_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customize;
