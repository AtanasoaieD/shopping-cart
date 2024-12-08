import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import WelcomePage from "./WelcomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCart = (productId, quantity) => {
    if (quantity <= 0) {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      setCart(updatedCart);
    }
  };

  // Component to conditionally render the navigation bar
  const Navbar = () => {
    const location = useLocation();

    // Hide nav on the welcome page ("/")
    if (location.pathname === "/") {
      return null;
    }

    return (
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>{" "}
        |{" "}
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </Link>
      </nav>
    );
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} updateCart={updateCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
