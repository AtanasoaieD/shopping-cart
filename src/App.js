import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function App() {
  // Holds the items in the shopping cart
  const [cart, setCart] = useState([]);

  /**
   * Add a product to the cart.
   * If the product is already in the cart, increase its quantity.
   * Otherwise, add it to the cart with a quantity of 1.
   */
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // Update the quantity of the existing product
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add the new product to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  /**
   * Update the quantity of a product in the cart.
   * If the quantity is set to 0, remove the product from the cart.
   */
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

  return (
    <Router>
      {/* Navigation Bar */}
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>{" "}
        |{" "}
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        {/* Home Page - Product List */}
        <Route
          path="/"
          element={<ProductList addToCart={addToCart} />}
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={<Cart cart={cart} updateCart={updateCart} />}
        />

        {/* Checkout Page */}
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
