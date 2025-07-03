import React, { useContext,  useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, isCartEmpty } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState('');
  const navigate = useNavigate();
  

  const handlePromoCodeChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPromoCode(value);
      setPromoError('');
    } else {
      setPromoError('Must be just numbers');
    }
  };

  const handleCheckoutClick = () => {
    if (!isCartEmpty) {
      navigate('/checkout');
    }
  };

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p> 
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.description}</p>
                <p>${e.new_price}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Taxes</p>
              <p>${getTotalCartAmount()*0.15}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${Math.round(getTotalCartAmount()*1.15)}</h3>
            </div>
          </div>
          <button disabled={isCartEmpty}
                onClick={handleCheckoutClick}
                style={{ opacity: isCartEmpty ? 0.6 : 1, cursor: isCartEmpty ? 'not-allowed' : 'pointer' }}
          >PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input 
              type="text" 
              placeholder='Promo code' 
              value={promoCode} 
              onChange={handlePromoCodeChange} 
              className={promoError ? 'error-input' : ''}
            />
            <button>Submit</button>
          </div>
          {promoError && <span className="error">{promoError}</span>}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
