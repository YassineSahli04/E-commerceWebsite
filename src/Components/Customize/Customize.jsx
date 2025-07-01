import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShopContext } from '../../Context/ShopContext';
import './Customize.css';

const Customize = () => {
  const { t } = useTranslation();
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find(product => product.id === parseInt(productId));

  const [formData, setFormData] = useState({
    color: '',
    color2: '',
    shape: '',
    dimension: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  if (!product) {
    return <p>{t('no_product_found')}</p>;
  }

  return (
    <div className="customize-container" role="form" aria-labelledby="customize-title">
      <div className="product-display">
        <h1 id="customize-title">{t('customize_title')}</h1>
        
      </div>
      <form className="customize-form" onSubmit={handleSubmit}>
        {(product.id === 1 || product.id === 2 || product.id === 3) && (
          <>
            <label className="input">
              {t('choose_color_vase')}
              <input 
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder={t('placeholder_white')}
                aria-label={t('choose_color_vase')}
              />
            </label>
            <label className="input">
              {t('choose_color_pattern')}
              <input
                type="text"
                name="color2"
                value={formData.color2}
                onChange={handleChange}
                placeholder={t('placeholder_blue')}
                aria-label={t('choose_color_pattern')}
              />
            </label>
            <label className="input">
              {t('add_personalized_message')}
              <input
                type="text"
                name="personalizedMessage"
                value={formData.personalizedMessage}
                onChange={handleChange}
                placeholder={t('placeholder_happy_birthday')}
                aria-label={t('add_personalized_message')}
              />
            </label>
            <div className="fieldset">
              <label>{t('choose_shape')}</label>
              <div className="radio-group">
                {product.shapes.map((shape, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="shape"
                      value={shape}
                      onChange={handleChange}
                      aria-label={t(`shape_${shape.toLowerCase().replace(/ /g, '_')}`)}
                    />
                    {t(`shape_${shape.toLowerCase().replace(/ /g, '_')}`)}
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {(product.id === 4 || product.id === 5) && (
          <div className="fieldset">
            <label>{t('choose_dimension')}</label>
            <div className="radio-group">
              {product.dimension.map((dimension, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="dimension"
                    value={dimension}
                    onChange={handleChange}
                    aria-label={t(`dimension_${dimension.toLowerCase().replace(/ /g, '_').replace(/:/g, '').replace(/cm/g, 'cm').replace(/m/g, 'm')}`)}
                  />
                  {t(`dimension_${dimension.toLowerCase().replace(/ /g, '_').replace(/:/g, '').replace(/cm/g, 'cm').replace(/m/g, 'm')}`)}
                </label>
              ))}
            </div>
          </div>
        )}

        {product.id === 6 && (
          <>
            <label className="input">
              {t('choose_color_bowl')}
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder={t('placeholder_white')}
                aria-label={t('choose_color_bowl')}
              />
            </label>
            <label className="input">
              {t('choose_color_pattern_4')}
              <input
                type="text"
                name="color2"
                value={formData.color2}
                onChange={handleChange}
                placeholder={t('placeholder_colors')}
                aria-label={t('choose_color_pattern_4')}
              />
            </label>
          </>
        )}

        {product.id === 7 && (
          <label className="input">
            {t('choose_two_colors')}
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder={t('placeholder_brown_green')}
              aria-label={t('choose_two_colors')}
            />
          </label>
        )}

        {(product.id === 8 || product.id === 9) && (
          <label className="input">
            {t('choose_color')}
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder={t('placeholder_green')}
              aria-label={t('choose_color')}
            />
          </label>
        )}

        {(product.id === 10 || product.id === 11 || product.id === 12) && (
          <div className="fieldset">
            <label>{t('choose_dimension')}</label>
            <div className="radio-group">
              {product.dimension.map((dimension, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="dimension"
                    value={dimension}
                    onChange={handleChange}
                    aria-label={t(`dimension_${dimension.toLowerCase().replace(/ /g, '_').replace(/:/g, '').replace(/cm/g, 'cm').replace(/m/g, 'm')}`)}
                  />
                  {t(`dimension_${dimension.toLowerCase().replace(/ /g, '_').replace(/:/g, '').replace(/cm/g, 'cm').replace(/m/g, 'm')}`)}
                </label>
              ))}
            </div>
          </div>
        )}

        <button type="submit">{t('submit')}</button>
      </form>
    </div>
  );
};

export default Customize;
