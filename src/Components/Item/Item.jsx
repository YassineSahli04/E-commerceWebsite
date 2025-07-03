import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`} className="t-card scroll-item-card large-card">
      <div className="t-image">
        <img src={props.image} alt={"Image"} />
      </div>
      <h4>{props.description}</h4>
      <h6>{props.city}</h6>
      <p>{props.type}</p>
      <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
        
      </div>
      <p className='link'>Learn more about the property</p>
    </Link>

  )
}

export default Item
