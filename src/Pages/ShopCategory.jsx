import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [selectedCategories, setSelectedCategories] = useState({
    Pottery: false,
    Vases: false,
    Bowls: false,
    Handbag: false,
    'Handwoven_Bags': false,
    'Straw_baskets': false,
  }); 

  const handleCheckboxChange = (category) => {
    let newSelectedCategories = { ...selectedCategories };
   
      // Reset other main categories when a new main category is selected
      newSelectedCategories = {
        Pottery: false,
        Vases: false,
        Bowls: false,
        Handbag: false,
        'Handwoven_Bags': false,
        'Straw_baskets': false,
      };
    
    
    newSelectedCategories[category] = !selectedCategories[category];
    
    setSelectedCategories(newSelectedCategories);
  };

  const getFilteredProducts = () => {
    let filteredProducts = all_product;
    if (selectedCategories.Pottery) {
      filteredProducts = filteredProducts.filter(product => product.group === 'Vases' || product.group === 'Bowls');
    }
    if (selectedCategories.Vases) {
      filteredProducts = filteredProducts.filter(product => product.group === 'Vases');
    }
    if (selectedCategories.Bowls) {
      filteredProducts = filteredProducts.filter(product => product.group === 'Bowls');
    }
    if (selectedCategories.Handbag) {
      filteredProducts = filteredProducts.filter(product => product.group === 'Handwoven_Bags' || product.group === 'Straw_baskets');
    }
    if (selectedCategories['Handwoven_Bags']) {
      filteredProducts = filteredProducts.filter(product => product.group === 'Handwoven_Bags');
    }
    if (selectedCategories['Straw_baskets']) {
      filteredProducts = filteredProducts.filter(product => product.group === 'Straw_baskets');
    }
    if (selectedCategories.Pottery && selectedCategories.Handbag) {
      filteredProducts = filteredProducts.filter(product => product.group === 'Vases' || product.group === 'Bowls');
    }

    return filteredProducts; 
  };

  return (
    <div className='shop-category'>
      <div className="shopcategory-indexSort">
        <p>
          Discover our amazing and authentic products
        </p>
        <Dropdown className="shopcategory-sort">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
           Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleCheckboxChange('Pottery')} className="main-category">
              Pottery
            </Dropdown.Item>
            
             
                <Dropdown.Item onClick={() => handleCheckboxChange('Vases')} className="sub-category">
                  Vases
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCheckboxChange('Bowls')} className="sub-category">
                  Bowls
                </Dropdown.Item>
             
           
            <Dropdown.Item onClick={() => handleCheckboxChange('Handbag')} className="main-category">
              Handbag
            </Dropdown.Item>
           
                <Dropdown.Item onClick={() => handleCheckboxChange('Handwoven_Bags')} className="sub-category">
                  Handwoven Bags
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCheckboxChange('Straw_baskets')} className="sub-category">
                  Straw baskets
                </Dropdown.Item>
           
           
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="shopcategory-products">
        {getFilteredProducts().map((item, i) => (
          <Item key={i} id={item.id} artisan={item.artisan} description={item.description} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
