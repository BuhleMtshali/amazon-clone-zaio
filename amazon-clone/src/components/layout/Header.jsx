import { useContext } from 'react';
import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import ShoppingContext from '../../context/shopping/shoppingContext';
import { auth } from '../../firebase';
import { useStateValue } from '../StateProvider';

const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentification = () => {
        if(user){
            auth.signOut();    
        }
    }
            return(
                     <div className="header">
                     <Link to={"/"}>
                     <img src="/logo.png" alt="logo image" className="logo-img"/>
                     </Link>
                     <div className="header_search">
                     <input type="search" name="search-icon" id="search-icon" />
                     <SearchIcon className="search-btn"/>
                     </div>
                     {/* end of header search */}
                 <div className="header_nav">
                    <Link to={!user && '/login'}>
                     <div className="header_option" onClick={handleAuthentification}>
                     <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                     <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                     </div>
                     </Link>
                     <div className="header_option">
                     <span className="header_optionLineOne">Returns</span>
                     <span className="header_optionLineTwo">Orders</span>
                     </div>
                     <div className="header_option">
                     <span className="header_optionLineOne">Your</span>
                     <span className="header_optionLineTwo">Prime</span>
                     </div>
                     <Link to={"/home"}>
                     <div className="header_optionBasket">
                     <ShoppingBasketIcon />
                     <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                     </div>
                     </Link>
                 </div>
                 {/* end of header_nav */}
     
             </div>)
}

export default Header;