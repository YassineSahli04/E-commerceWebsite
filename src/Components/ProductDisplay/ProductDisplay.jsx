import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './ProductDisplay.css';
import { Link } from 'react-router-dom';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { t } = useTranslation();
    const { product, all_product } = props;
    const { addToCart } = useContext(ShopContext);

    // Filtrer pour obtenir deux autres produits du même groupe
    const similarProducts = all_product.filter(p => p.group === product.group && p.id !== product.id).slice(0, 2);

    return (
        <section className='productdisplay' role='region' aria-labelledby={`product_${product.id}_description`}>
            <div className="productdisplay-content">
                <div className="productdisplay-left">
                    <div className="productdisplay-img">
                        <img 
                            className='productdisplay-main-img' 
                            src={product.image} 
                            alt={product.description || t('product_image')} 
                        />
                        <div className="productdisplay-customize-button">
                            {/* Fonctionnalité de personnalisation */}
                        </div>
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1 id={`product_${product.id}_description`}>{t(`product_${product.id}_description`)}</h1>
                    <div className="productdisplay-right-stars" role="img" aria-label={`${t('rating')}: 4 ${t('stars')}`}>
                        <img src={star_icon} alt={t('filled_star')} />
                        <img src={star_icon} alt={t('filled_star')} />
                        <img src={star_icon} alt={t('filled_star')} />
                        <img src={star_icon} alt={t('filled_star')} />
                        <img src={star_dull_icon} alt={t('empty_star')} />
                        <p>(3)</p>
                    </div>
                    <p>{t('overall_rating')}: 4.3</p>
                    <p>{t('most_frequently_used_words')}: <span className="encircled">{t('beautiful')}</span>, <span className="encircled">{t('traditional')}</span>, <span className="encircled">{t('authentic')}</span></p>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                        <div className="productdisplay-right-price-new">${product.new_price}</div>
                    </div>
                    <div className="productdisplay-right-description">
                        <h2>{t('description')}</h2>
                        <p>{t('exquisite_description')}</p>
                        <h2>{t('artisan')}: {product.artisan}</h2>
                        <p>{t('artisan_description', { artisan: product.artisan })}</p>
                        <h2>{t('processes_behind_the_product')}</h2>
                        <ul>
                            <li>{t('clay_preparation')}</li>
                            <li>{t('shaping')}</li>
                            <li>{t('drying')}</li>
                            <li>{t('painting')}</li>
                            <li>{t('quality_check')}</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => { addToCart(product.id) }} aria-label={t('add_to_cart')}>{t('add_to_cart')}</button> {t('OR')}
                        <Link to='/contact'><button aria-label={t('contact_artisan')}>{t('contact_artisan')}</button></Link>
                    </div>
                </div>
            </div>
            <div className='similar-products-section'>
                <p className='products'> {t('those_who_liked_this_product_also_liked')}:</p>
                <div className="similar-products">
                    {similarProducts.map((p, index) => (
                        <div key={index} className="similar-product-item">
                            <Link to={`/product/${p.id}`}>
                                <img src={p.image} alt={p.description} />
                            </Link>
                            <p>{t(`product_${p.id}_description`)}</p>
                            <p>${p.new_price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductDisplay;
