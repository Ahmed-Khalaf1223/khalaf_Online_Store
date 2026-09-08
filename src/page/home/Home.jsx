import React from "react";
import { useState, useEffect } from "react";
import HeroSlider from "../../components/header/HeroSlider";
import "./home.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import PageTranistion from "../../components/PageTranistion";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "womens-watches",
  "sports-accessories",
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <PageTranistion>
      <div>
        <HeroSlider />

        {loading
          ? categories.map((category) => <SlideProductLoading key={category} />)
          : categories.map((category) => (
              <SlideProduct
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))}
      </div>
    </PageTranistion>
  );
}

export default Home;
