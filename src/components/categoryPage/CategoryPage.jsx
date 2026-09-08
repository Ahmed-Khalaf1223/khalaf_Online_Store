import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../slideProducts/Product";
import "./CategoryPage.css";
import SlideProductLoading from "../slideProducts/SlideProductLoading";
import PageTranistion from "../PageTranistion";
function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) =>
        res.json().then((data) => {
          setCategoryProducts(data);
        })
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <PageTranistion key={category}>
      <div className="category_products">
        {loading ? (
          <SlideProductLoading key={category} />
        ) : (
          <div className="container">
            <div className="top_slide">
              <h2>
                {category} : ({categoryProducts.limit})
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                quia.
              </p>
            </div>
            <div className="products">
              {categoryProducts.products.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTranistion>
  );
}

export default CategoryPage;
