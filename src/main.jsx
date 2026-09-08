import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import reactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./components/context/CartContext.jsx";
reactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
