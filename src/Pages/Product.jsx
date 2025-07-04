import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

import ContactArtisan from '../Pages/Contact_us';

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}  all_product={all_product} path='/contact_us' component={ContactArtisan} />

      <DescriptionBox product={product}/>
     
     
    </div>
  )
}

export default Product
