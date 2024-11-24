import React, { useState } from "react";

function Checkout({ cart, setCart }) {
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    setIsPurchaseComplete(true); // Mark the purchase as complete
    setCart([]); // Clear the cart
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {/* Show confirmation message if purchase is complete */}
      {isPurchaseComplete ? (
        <div className="purchase-message">
          <h3>Thank you for your purchase!</h3>
          <p>Your order has been placed successfully.</p>
        </div>
      ) : (
        // Show the form if purchase is not complete
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Full Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              placeholder="Your Delivery Address"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="card">Card Details</label>
            <input
              type="text"
              id="card"
              placeholder="1234 5678 9101 1121"
              required
            />
          </div>

          <button type="submit" className="checkout-button">
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
