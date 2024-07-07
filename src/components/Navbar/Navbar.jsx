import React ,{useState}from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css' ;
import logo from '../../assets/logo.png';
import cart from '../../assets/cart_icon.png';
const Navbar = () => {

    const [menu,setMenu]=useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="/">
            </img>
            <p>Book Shopping</p>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:"none"}} to='/'>Shop</Link>{menu==="shop"&&<hr></hr> }</li>
                <li onClick={()=>{setMenu("Personality Development")}}><Link style={{textDecoration:"none"}} to='/Personality'>Personality Development</Link>{menu==="Personality Development"&&<hr></hr>}</li>
                <li onClick={()=>{setMenu("Education")}}><Link style={{textDecoration:"none"}} to='/Education'>Education</Link>{menu==="Education"&& <hr></hr>}</li>
                <li onClick={()=>{setMenu("Fiction")}}><Link style={{textDecoration:"none"}} to='/Fiction'>Fiction</Link>{menu==="Fiction"&&<hr></hr>}</li>
            </ul>
            <div className="nav-logo-cart">
               <Link style={{textDecoration:"none"}} to='/Login'> <button>Login</button></Link>
              <Link style={{textDecoration:"none"}} to='/Cart'>  <img src={cart} alt='/'></img></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
        </div>
  )
}

export default Navbar