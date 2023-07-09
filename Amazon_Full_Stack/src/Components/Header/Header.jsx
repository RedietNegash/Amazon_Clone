import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import usFlag from "../../assets/us-flag.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import { useStateValue } from "../Context/StateProvider";
import { auth } from "../Firebase";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(basket[0].id)
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  const getQuantity = (basket) => {
    return basket?.reduce((qty, item) => qty + item.quantity, 0);
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <FmdGoodIcon className="ssss" />

        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Select your address</span>
        </div>
        {/* <span className="header__optionLineOne hello">
            <FmdGoodIcon className="eay" />
            <span>
              Hello <br />
              <p className="select">Select your address</p>
            </span>
          </span>
          <span className="header__optionLineTwo select"></span> */}
        <div className="header__option"></div>
        <div className="header__search">
          <span className="all"> All</span>
          <ArrowDropDownIcon className="arow" />
          <span className="ffff ddd">Search </span>
          <span className="ffff">Amazon </span>

          <input className="header__searchinput" type="text" />

          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="flag">
            <img src={usFlag} alt="us-flag" />
            <span>
              EN <ArrowDropDownIcon className="flagDrop" />
            </span>
          </div>
          <Link to={!user && "/login"} className="header__clearlink">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Gues" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" className="header__clearlink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>

        <Link to="/Checkout" className="header__optionBasket header__clearlink">
          {/* <AddShoppingCartIcon />
            {/* <ShoppingBasketIcon /> */}
          {/* <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span> */}
          <div className="header__optionCart ">
            <span className="header__optionLineTwo header__cart__count">
              {getQuantity(basket)}
            </span>
            <AddShoppingCartIcon />
            <span className="header__optionLineTwo">Cart</span>
          </div>
        </Link>
      </div>
      <nav className="subnavigation" id="top">
        <ul className="submenu">
          <li>
            <a href="##">
              <MenuIcon className="menu__icon" /> All
            </a>
          </li>
          <li>
            <a href="">Clinic</a>
          </li>
          <li>
            <a href="">Best Sellers</a>
          </li>
          <li>
            <a href=""> Customer Service</a>
          </li>
          <li>
            <a href="">Amazon Basics</a>
          </li>
          <li>
            <a href="">New Releases</a>
          </li>
          <li>
            <a href="">
              Prime <ArrowDropDownIcon className="flagDrop" />
            </a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Today's Deals</a>
          </li>
          <li>
            <a href="">Books</a>
          </li>
          <li>
            <a href="">Registry</a>
          </li>
          <li>
            <a href="">Fashion</a>
          </li>
          <li>
            <a href="">Amazon Home</a>
          </li>
          <li>
            <a href="">Pharmacy</a>
          </li>
          <li>
            <a href="">Gift Cards</a>
          </li>
          <li>
            <a href="">Toys&Games</a>
          </li>
        </ul>
        <ul className="submenu">
          <li className="submenu__right">
            <a href="">Shop great deals now</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
