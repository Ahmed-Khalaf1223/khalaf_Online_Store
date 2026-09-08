import React from "react";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import ProductDetailsLoading from "./productDetailsLoading.jsx";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./productDetails.css";
import PageTranistion from "../../components/PageTranistion.jsx";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  useEffect(() => {
    // Fetch product details using the id
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .then(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) =>
        console.error("Error fetching related products:", error)
      )
      .finally(() => setLoadingRelatedProducts(false));
  }, [product]);

  if (!product) return <p>Product Not Found</p>;

  return (
    <PageTranistion>
      <div>
        {loading ? (
          <ProductDetailsLoading />
        ) : (
          <div className="item_details">
            <div className="container">
              <ProductImage product={product} />
              <ProductInfo product={product} />
            </div>
          </div>
        )}
        {loadingRelatedProducts ? (
          <SlideProductLoading />
        ) : (
          <SlideProduct
            key={product.category}
            data={relatedProducts}
            title={product.category.replace("-", " ")}
          />
        )}
      </div>
    </PageTranistion>
  );
}

export default ProductDetails;
