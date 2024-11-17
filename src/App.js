import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./styles.css"

function App() {
  // Holds the items in the shopping cart
  const [cart, setCart] = useState([]);

  /**
   * Add a product to the cart.
   * If the product is already in the cart, increase its quantity.
   * Otherwise, add it to the cart with a quantity of 1.
   */
  const addToCart = (product) => {
    // Check if the product is already in the cart
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
      // Remove the product if quantity is 0 or less
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
    } else {
      // Update the product quantity
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      setCart(updatedCart);
    }
  };

  return (
    <div>
      <h1>Shopping Cart App</h1>
      {/* Pass the addToCart function to ProductList */}
      <ProductList addToCart={addToCart} />
      {/* Pass the cart and updateCart function to Cart */}
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default App;
