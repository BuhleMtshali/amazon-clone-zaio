import { useContext } from 'react';
import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

const Header = ({ onLogout }) => {
    const ctx = useContext(AuthContext);
     return(
                     <div className="header">
                     <Link to={"/home"}>
                     <img src="/logo.png" alt="logo image" className="logo-img"/>
                     </Link>
                     <div className="header_search">
                     <input type="search" name="search-icon" id="search-icon" />
                     <SearchIcon className="search-btn"/>
                     </div>
                     {/* end of header search */}
                 <div className="header_nav">
                     { ctx.isLoggedIn ?  (<Link to={"/"}>
                     <div className="header_option" onClick={onLogout}>
                     <span className="header_optionLineOne">Hello User</span>
                     <span className="header_optionLineTwo">Logout</span>
                     </div>
                     </Link>) : (<Link to={"/login"}>
                     <div className="header_option">
                     <span className="header_optionLineOne">Hello Guest</span>
                     <span className="header_optionLineTwo">Sign In</span>
                     </div>
                     </Link>) }
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
                     <span className="header_optionLineTwo header_basketCount">0</span>
                     </div>
                     </Link>
                 </div>
                 {/* end of header_nav */}
     
             </div>)
}

export default Header;