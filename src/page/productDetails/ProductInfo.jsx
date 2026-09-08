import React, { useContext } from "react";
import {
  FaRegHeart,
  FaRegStarHalfStroke,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../components/context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProductInfo({ product }) {
  const {
    cartItems,
    addToCart,
    addToFavourits,
    favourites,
    removeFromFavourits,
  } = useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === product.id);

  const Navigate = useNavigate();

  const handleAddCart = () => {
    addToCart(product);
    toast.success(
      <div className="toast_wrapper">
        <img src={product.images[0]} alt="" className="toast_img" />
        <div className="toast_content">
          <strong>{product.title}</strong>
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

  const isInFav = favourites.some((i) => i.id === product.id);
  const handleAddToFavourit = () => {
    if (isInFav) {
      removeFromFavourits(product.id);
      toast.error(`${product.title} removed to favourits`);
    } else {
      addToFavourits(product);
      toast.success(`${product.title} added to favourits`);
    }
  };

  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>
      <p className="price">$ {product.price}</p>
      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="description">{product.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only {product.stock} products left in stock.</span>
      </h5>
      <button
        className={`btn ${isInCart ? "in-cart" : ""}`}
        onClick={handleAddCart}
      >
        {isInCart ? "Item in Cart" : "Add to Cart "}
        <TiShoppingCart />
      </button>
      <div className="icons">
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

export default ProductInfo;
