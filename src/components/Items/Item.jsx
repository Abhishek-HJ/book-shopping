import React from 'react'
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} style={{width:'300px', height:'300px'}}></img>
        <p>{props.name}</p>
        <dic className="item-prices">
            <div className="item-price-new">${props.new_price}</div>
            <div className="item-price-old">${props.old_price}</div>
        </dic></div>
  )
}

export default Item