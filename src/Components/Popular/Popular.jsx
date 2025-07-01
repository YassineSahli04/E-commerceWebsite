import React from 'react';
import './Popular.css';
import aboutImage from '../Assets/AboutImg.jpg'; // Import your image here

const Popular = () => {
  return (
    <div className='popular'>
      <h1>ABOUT US</h1>
      <hr />
      <div className="popular-item">
        <img src={aboutImage} alt="About us" />
        <p>At CarthaNest, we believe a home is more than just a place, it's a reflection of history, culture, and identity.
Rooted in the spirit of Carthage and inspired by the Mediterranean lifestyle, CarthaNest offers a unique platform for discovering elegant and meaningful homes across Tunisia.

Whether you're searching for a coastal escape, a traditional dar in the medina, or a modern sanctuary, CarthaNest connects you to spaces that blend comfort, heritage, and authenticity.

With transparency, simplicity, and a touch of art de vivre, we make the journey to your perfect home as beautiful as the destination itself.</p>
     </div>
    </div>
  );
}

export default Popular;
