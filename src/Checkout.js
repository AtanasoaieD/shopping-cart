import React, { useState } from "react";

function Checkout({ cart }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handle input changes in the form.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /**
   * Handle form submission.
   * Displays a confirmation message and clears the form.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty. Add some items before checking out!");
      return;
    }
    setIsSubmitted(true);
    setForm({ name: "", email: "", address: "" });
  };

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (isSubmitted) {
    return (
      <div>
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>

      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
