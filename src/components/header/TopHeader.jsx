import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "./header.css";
import SearcBox from "./SearcBox.jsx";

function TopHeader() {
  const { cartItems, favourites } = useContext(CartContext);
  return (
    <div className="top_header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="header_icon">
          <SearcBox />
          <div className="icon">
            <Link to="/favourits">
              <FaRegHeart />
              <span className="count">{favourites.length}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
