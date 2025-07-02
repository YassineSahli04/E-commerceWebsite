import React, { useContext, useState } from 'react';
import Filter from '../Components/Filter/Filter';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [displayedItems, setDisplayedItems] = useState(all_product);

  return (
    <div className='shop-category'>

      <div className="shopcategory-body" style={{ display: 'flex' }}>
          <Filter items={all_product} onFilter={setDisplayedItems}/>

          <div className="shopcategory-products">
            {Array.isArray(displayedItems) && displayedItems.map((item, i) => (
              <Item key={i} id={item.id} artisan={item.artisan} description={item.description} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            ))}
          </div>
        </div>
    </div>
  );
}

export default ShopCategory;
