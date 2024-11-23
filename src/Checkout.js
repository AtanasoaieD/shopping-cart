import React from "react";

function Checkout() {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Full Name" required />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>

        {/* Address Field */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            placeholder="Your Delivery Address"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Card Details Field */}
        <div className="form-group">
          <label htmlFor="card">Card Details</label>
          <input
            type="text"
            id="card"
            placeholder="1234 5678 9101 1121"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="checkout-button">
          Place Order
        </button>
      </form>
    </div>
  );
}



export default Checkout;
