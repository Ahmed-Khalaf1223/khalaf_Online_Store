import React from "react";
import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

function CartProvider({ children }) {
  // Favourits
  const [favourites, setFavourites] = useState(() => {
    const saveFav = localStorage.getItem("favouritsItems");
    return saveFav ? JSON.parse(saveFav) : [];
  });

  const addToFavourits = (item) => {
    setFavourites((prevItems) => {
      if (prevItems.some((i) => i.id === item.id)) return prevItems;
      return [...prevItems, item];
    });
  };
  useEffect(() => {
    localStorage.setItem("favouritsItems", JSON.stringify(favourites));
  }, [favourites]);

  const removeFromFavourits = (id) => {
    setFavourites((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // cart
  const [cartItems, setCartItems] = useState(() => {
    const saveCart = localStorage.getItem("cartItems");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  // increaseQuantity

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decreaseQuantity

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //removeCart

  const removeCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeCart,
        addToFavourits,
        favourites,
        removeFromFavourits,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
