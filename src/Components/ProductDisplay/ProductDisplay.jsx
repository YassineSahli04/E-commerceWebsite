import React, { useContext } from 'react';
import './ProductDisplay.css';
import { Link } from 'react-router-dom';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product, all_product } = props;
    const { addToCart } = useContext(ShopContext);

    const similarProducts = all_product.filter(p => p.group === product.group && p.id !== product.id).slice(0, 2);

    return (
        <section className='productdisplay' role='region' aria-labelledby={`product_${product.id}`}>
            <div className="productdisplay-content">
                <div className="productdisplay-left">
                    <div className="productdisplay-img">
                        <img 
                            className='productdisplay-main-img' 
                            src={product.image} 
                            alt={product.description || "Product Image"} 
                        />
                        <div className="productdisplay-customize-button">
                            {/* Fonctionnalité de personnalisation */}
                        </div>
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1 id={`product_${product.id}_description`}>{`product_${product.id}_description`}</h1>
                    <div className="productdisplay-right-stars" role="img" aria-label={`${"Rating"}: 4 ${'Stars'}`}>
                        <img src={star_icon} alt={'filled_star'} />
                        <img src={star_icon} alt={'filled_star'} />
                        <img src={star_icon} alt={'filled_star'} />
                        <img src={star_icon} alt={'filled_star'} />
                        <img src={star_dull_icon} alt={'empty_star'} />
                        <p>(3)</p>
                    </div>
                    <p>{'overall_rating'}: 4.3</p>
                    <p>{'most_frequently_used_words'}: <span className="encircled">{'beautiful'}</span>, <span className="encircled">{'traditional'}</span>, <span className="encircled">{'authentic'}</span></p>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                        <div className="productdisplay-right-price-new">${product.new_price}</div>
                    </div>
                    <div className="productdisplay-right-description">
                        <h2>{'description'}</h2>
                        <p>{'exquisite_description'}</p>
                        <h2>{'artisan'}: {product.artisan}</h2>
                        <p>{'artisan_description'+ { artisan: product.artisan }}</p>
                        <h2>{'processes_behind_the_product'}</h2>
                        <ul>
                            <li>{'clay_preparation'}</li>
                            <li>{'shaping'}</li>
                            <li>{'drying'}</li>
                            <li>{'painting'}</li>
                            <li>{'quality_check'}</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => { addToCart(product.id) }} aria-label={'add_to_cart'}>{'add_to_cart'}</button> {'OR'}
                        <Link to='/contact'><button aria-label={'contact_artisan'}>{'contact_artisan'}</button></Link>
                    </div>
                </div>
            </div>
            <div className='similar-products-section'>
                <p className='products'> {'those_who_liked_this_product_also_liked'}:</p>
                <div className="similar-products">
                    {similarProducts.map((p, index) => (
                        <div key={index} className="similar-product-item">
                            <Link to={`/product/${p.id}`}>
                                <img src={p.image} alt={p.description} />
                            </Link>
                            <p>{`product_${p.id}_description`}</p>
                            <p>${p.new_price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductDisplay;
