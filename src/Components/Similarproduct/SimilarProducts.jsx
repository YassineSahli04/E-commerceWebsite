import React from 'react';
import './Similarproducts.css';

const SimilarProducts = ({ similarProducts }) => {
  return (
    <div className="similar-products">
      <h3>Vous pourriez aussi aimer</h3>
      <div className="similar-products-list">
        {similarProducts.map(product => (
          <div key={product.id} className="similar-product-item">
            <img src={product.image} alt={product.description} />
            <p>{product.description}</p>
            <p>{product.new_price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
