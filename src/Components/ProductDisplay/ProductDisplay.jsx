import React, { useContext } from 'react';
import './ProductDisplay.css';
import { Link } from 'react-router-dom';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { useRef, useEffect } from 'react';

const ProductDisplay = (props) => {

    const { product, all_product } = props;
    const { addToCart } = useContext(ShopContext);

    const similarProducts = all_product.filter(p => p.type === product.type && p.id !== product.id).slice(0, 2);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let requestId;

        const step = () => {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
        }
        requestId = requestAnimationFrame(step);
        };

        requestId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(requestId);
    }, []);
    return (
            <div className="tour-detail">
      <h2 className="tour-title-full">{product.description}</h2>

      <div className="tour-images scroll-container" ref={containerRef}>
        {[...product.images, ...product.images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${product.description} view ${idx + 1}`}
            className="scroll-item large"
          />
        ))}
      </div>


      <div className="tour-content">

        
        <div className="tour-description-box">
            <h3>Description</h3>
            <div className="rating">
                <div className="productdisplay-right-stars" role="img" aria-label={`${"Rating"}: 4 ${'Stars'}`}>
                    <img src={star_icon} alt={'filled_star'} />
                    <img src={star_icon} alt={'filled_star'} />
                    <img src={star_icon} alt={'filled_star'} />
                    <img src={star_icon} alt={'filled_star'} />
                    <img src={star_dull_icon} alt={'empty_star'} />

                </div>
                 <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                        <div className="productdisplay-right-price-new">${product.new_price}</div>

                    </div>
            </div>


        
          <p className="tour-description">{product.description}</p>
        </div>
        <div className="tour-includes-box">
          <h3>What's Included</h3>
          <ul className="tour-includes-list">
            {product.includes.map((inc, idx) => (
              <li key={idx} className="include-item">{`${idx +1} - ${inc}`}</li>
            ))}
          </ul>
        </div>
      </div>
        <div className='action'>
            <button onClick={() => { addToCart(product.id) }} aria-label={'add_to_cart'}>Add To Visits Cart</button> {'OR'}
            <Link to='/contact'><button aria-label={'contact_artisan'}>Contact Seller</button></Link>
        </div>
        <div className='similar-products-section'>
                <p className='products'>Those who liked this property also liked:</p>
                <div className="similar-products">
                    {similarProducts.map((p, index) => (
                        <div key={index} className="similar-product-item">
                            <Link to={`/product/${p.id}`}>
                                <img src={p.image} alt={p.description} />
                                <p>{p.description}</p>
                            </Link>
                            
                        </div>
                    ))}
                </div>
        </div>



    </div>
        // <section className='productdisplay' role='region' aria-labelledby={`product_${product.id}`}>
        //     <div className="productdisplay-content">
        //         <div className="productdisplay-left">
        //             <div className="productdisplay-img">
        //                 <img 
        //                     className='productdisplay-main-img' 
        //                     src={product.image} 
        //                     alt={product.description || "Product Image"} 
        //                 />
        //             </div>
        //         </div>
        //         <div className="productdisplay-right">
        //             <h1 id={`product_${product.id}_description`}>{`product_${product.id}_description`}</h1>

        //             <p>{'most_frequently_used_words'}: <span className="encircled">{'beautiful'}</span>, <span className="encircled">{'traditional'}</span>, <span className="encircled">{'authentic'}</span></p>
        //             <div className="productdisplay-right-prices">
        //                 <div className="productdisplay-right-price-old">${product.old_price}</div>
        //                 <div className="productdisplay-right-price-new">${product.new_price}</div>
        //             </div>

        //             <div>
        //                 <button onClick={() => { addToCart(product.id) }} aria-label={'add_to_cart'}>Add To Visits Cart</button> {'OR'}
        //                 <Link to='/contact'><button aria-label={'contact_artisan'}>Contact Seller</button></Link>
        //             </div>
        //         </div>
        //     </div>

        // </section>
    );
};

export default ProductDisplay;
