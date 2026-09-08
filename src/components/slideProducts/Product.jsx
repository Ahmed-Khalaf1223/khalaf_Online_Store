import React from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Product({ item }) {
  const {
    cartItems,
    addToCart,
    addToFavourits,
    favourites,
    removeFromFavourits,
  } = useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === item.id);

  const Navigate = useNavigate();

  const handleAddCart = () => {
    addToCart(item);
    toast.success(
      <div className="toast_wrapper">
        <img src={item.images[0]} alt="" className="toast_img" />
        <div className="toast_content">
          <strong>{item.title}</strong>
          added to Cart
          <div>
            <button className="btn" onClick={() => Navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 4000 }
    );
  };

  // Favourits

  const isInFav = favourites.some((i) => i.id === item.id);
  const handleAddToFavourit = () => {
    if (isInFav) {
      removeFromFavourits(item.id);
      toast.error(`${item.title} removed to favourits`);
    } else {
      addToFavourits(item);
      toast.success(`${item.title} added to favourits`);
    }
  };

  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/product/${item.id}`} className="link_product">
        <span className="stat_cart">
          <FaCheck /> in cart
        </span>

        <div className="img_product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
        <p className="price">
          <span>$ {item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="btn_addtocart" onClick={handleAddCart}>
          <FaCartArrowDown />
        </span>
        <span
          className={`${isInFav ? "in-fav" : ""}`}
          onClick={handleAddToFavourit}
        >
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
