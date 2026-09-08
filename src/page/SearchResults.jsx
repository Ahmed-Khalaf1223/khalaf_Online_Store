import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SlideProductLoading from "../components/slideProducts/SlideProductLoading";
import PageTranistion from "../components/PageTranistion";
import Product from "../components/slideProducts/Product";

function SearchResults() {
  const [results, setResults] = useState([]);

  const query = new URLSearchParams(useLocation().search).get("query");

  const [loading, setLoading] = useState(true);

  console.log(results);

  useEffect(() => {
    setLoading(true);
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("search error :", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);

  return (
    <PageTranistion key={query}>
      <div className="category_products">
        {loading ? (
          <SlideProductLoading key={query} />
        ) : results.length > 0 ? (
          <div className="container">
            <div className="top_slide">
              <h2>Results For: {query}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                quia.
              </p>
            </div>
            <div className="products">
              {results.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <p>No Results found.</p>
          </div>
        )}
      </div>
    </PageTranistion>
  );
}

export default SearchResults;
