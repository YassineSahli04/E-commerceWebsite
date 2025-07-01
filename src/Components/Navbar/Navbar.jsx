import React, { useContext, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import LogoImg from "../Assets/Logo.png"

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  return ( 
    <div className='navbar'>
      <div className="nav-logo">
        <Link to='/' onClick={() => { setMenu("shop") }} >
          <img src={LogoImg} alt="Logo" />
          <p>CarthaNest</p>
        </Link>
      </div> 
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><NavLink to='/' className={menu === "shop" ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li onClick={() => { setMenu("products") }}><Link to='/products' className={menu === "products" ? "nav-link active" : "nav-link"}>Products</Link></li>
        <li onClick={() => { setMenu("contact_us") }}><Link to='/contact_us' className={menu === "contact_us" ? "nav-link active" : "nav-link"}>Contact Us</Link></li>
        <li onClick={() => { setMenu("FAQ") }}><Link to='/FAQ'  className={menu === "FAQ" ? "nav-link active" : "nav-link"}>FAQ</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Log In</button></Link>
        <Link to='/signup'><button>Sign Up</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
