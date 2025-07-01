import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
     
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
     
      <p>{props.description}</p>
      <p> Artisan :{props.artisan}</p>
      <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
        
      </div>
      <Link to={`/product/${props.id}`}> 
      <p className='link'>Learn more about the product</p></Link>
    </div>
  )
}

export default Item
