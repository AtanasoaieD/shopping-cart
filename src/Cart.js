import React from "react";

function Cart({ cart, updateCart }) {
  /**
   * Handle quantity changes for a product.
   * Update the cart when the user types a new quantity.
   */
  const handleQuantityChange = (productId, quantity) => {
    const newQuantity = parseInt(quantity, 10); // Convert the input to a number
    updateCart(productId, isNaN(newQuantity) ? 0 : newQuantity); // Default to 0 if input is invalid
  };

  // Calculate the total cost of items in the cart
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>
                  {item.name} - ${item.price.toFixed(2)} x{" "}
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    min="0"
                  />
                  <button onClick={() => updateCart(item.id, 0)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
