import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../components/Items/Item';
const ShopCategory = (props) => {

  const {all_products}= useContext(ShopContext);
 
  return (
    <div className='shop-category'>
      <img src={props.banner} alt=''></img>
      <div className="shopcategory-indexsort">
        <p>
         <span>
          Showing 1-12
         </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt =''></img>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.d} name={item.name} image={item.image}  new_price={item.new_price}  old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        <button>
          Explore more
        </button>
      </div>
    </div>
  )
}

export default ShopCategory;