import TopHeader from "./components/header/TopHeader";
import BtmHeader from "./components/header/BtmHeader";
import Home from "./page/home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./page/productDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./components/categoryPage/CategoryPage";
import SearchResults from "./page/SearchResults";
import Favourits from "./page/favourits/Favourits";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5PX",
            padding: "14PX",
          },
        }}
      />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favourits" element={<Favourits />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
