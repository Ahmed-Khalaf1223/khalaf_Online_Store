import React from "react";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext.jsx";
import "./cart.css";
import { FaTrashAlt } from "react-icons/fa";
import PageTranistion from "../../components/PageTranistion.jsx";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeCart } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log(cartItems);

  return (
    <PageTranistion>
      <div className="checkout">
        <div className="orddersmmary">
          <h1>Order Summary</h1>
          <div className="items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div className="item_cart" key={index}>
                  <div className="image_name">
                    <div className="img_item">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className="price_item">$ {item.price}</p>
                      <div className="quantity_control">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeCart(item.id)}
                    className="delete_item"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="bottom_sammary">
            <div className="shop_table">
              <p>Total:</p>
              <span className="totlal_checkout">${total.toFixed(2)}</span>
            </div>
            <div className="btn_div">
              <button type="submit">place order</button>
            </div>
          </div>
        </div>
      </div>
    </PageTranistion>
  );
}

export default Cart;
