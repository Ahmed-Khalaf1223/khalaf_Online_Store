import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import Product from "../../components/slideProducts/Product";
import PageTranistion from "../../components/PageTranistion";

function Favourits() {
  const { favourites } = useContext(CartContext);

  return (
    <PageTranistion>
      <div className="category_products favouritsPage">
        <div className="container">
          <div className="top_slide">
            <h2>Your Favourites</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              quia.
            </p>
          </div>

          {favourites.length === 0 ? (
            <p>No Favourites Products yet</p>
          ) : (
            <div className="products">
              {favourites.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTranistion>
  );
}

export default Favourits;
