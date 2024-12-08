import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate("/products"); // Navigate to the Product List page
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to Our Shop!</h1>
      <p>Your one-stop destination for amazing products.</p>
      <button onClick={handleStartShopping} className="start-shopping-button">
        Start Shopping
      </button>
    </div>
  );
}

export default WelcomePage;
