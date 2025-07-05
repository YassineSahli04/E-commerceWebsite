import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './Navbar.css';
import LogoImg from "../Assets/Logo.png";
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to='/'>
          <img src={LogoImg} alt="Logo" />
          <p>CarthaNest</p>
        </Link>
      </div> 

      <ul className="nav-menu">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Products</NavLink></li>
        <li><NavLink to="/contact_us" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact Us</NavLink></li>
        <li><NavLink to="/FAQ" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>FAQ</NavLink></li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Log In</button></Link>
        <Link to='/signup'><button>Sign Up</button></Link>
        <Link to='/checkout'><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
