import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../Firebase';
function Header() {
    const[{basket,user}, dispatch]=useStateValue();
    const handleAuthentication=()=>{
        if(user){
           auth.signOut();
        }  
    };
    
  return (
    <div className='header'>
        <Link to="/">
    <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
    </Link>
<div className="header_search" >
 <input className='header_searchInput' type='text'/>
 Search Icon
 <SearchIcon className="header_searchIcon"/>
    </div>
    <div className='header_nav'>
        <Link to={!user && '/Login'} >
        <div onClick={handleAuthentication} className='header_option'>
        <span className='header_optionLineOne'>Hello,{user ? user?.email : "Customer"}</span>
            <span className='header_optionLineTwo'>{user ? "Sign Out" : "Sign In"}</span>
        </div>
        </Link>
        <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
        </div>
        <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
        </div>
        <Link to="/checkout">
        <div className='header_optionBasket'>
            Shopping Basket
            <ShoppingBasketIcon/>
            <span className='header_optionLineTwo header_basketCount'>
              
                {basket.length}
            </span>
        </div>
        </Link>
    </div>
      
    </div>
  )
}

export default Header;
