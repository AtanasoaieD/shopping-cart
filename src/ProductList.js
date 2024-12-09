import React from "react";
import ElectricKettleImage from "./images/Electric-Kettle.jpg"
import HairDryerImage from "./images/Hair-Dryer.jpg"
import ElectricToothBrushImage from "./images/Electric-Toothbrush.jpg"
import BlenderImage from "./images/Blender.jpg"
import ElectricGrillImage from "./images/Electric-Grill.jpg"
import EarbudsImage from "./images/earbuds.jpg"
import SmartPlugImage from "./images/SmartPlug.jpg"
import ElectricShaverImage from "./images/Electric-Shaver.jpg"
import VacuumCleanerImage from "./images/Vacuum-Cleaner.jpg"
import ElectricHeaterImage from "./images/Electric-Heater.jpg"
import ElectricSkilletImage from "./images/Electric-Skillet.jpg"
import PressureCookerImage from "./images/PressureCooker.jpg"







const products = [
  {
    id: 1,
    name: "Electric Kettle",
    description: "1.7L capacity with automatic shut-off.",
    price: 35.99,
    image: ElectricKettleImage
  },
  {
    id: 2,
    name: "Hair Dryer",
    description: "1800W power with cool shot function.",
    price: 24.99,
    image: HairDryerImage
  },
  {
    id: 3,
    name: "Electric Toothbrush",
    description: "Rechargeable with multiple brush heads.",
    price: 59.99,
    image: ElectricToothBrushImage
  },
  {
    id: 4,
    name: "Blender",
    description: "2-speed blender with glass jar.",
    price: 49.99,
    image: BlenderImage
  },
  {
    id: 5,
    name: "Electric Grill",
    description: "Non-stick surface, perfect for BBQ.",
    price: 89.99,
    image: ElectricGrillImage
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    description: "Noise-cancelling with 8-hour battery life.",
    price: 129.99,
    image: EarbudsImage
  },
  {
    id: 7,
    name: "Smart Plug",
    description: "Wi-Fi enabled, works with Alexa and Google Home.",
    price: 19.99,
    image: SmartPlugImage
  },
  {
    id: 8,
    name: "Electric Shaver",
    description: "Wet and dry operation with rechargeable battery.",
    price: 45.99,
    image: ElectricShaverImage
  },
  {
    id: 9,
    name: "Cordless Vacuum Cleaner",
    description: "Lightweight with powerful suction.",
    price: 159.99,
    image: VacuumCleanerImage

  },
  {
    id: 10,
    name: "Electric Heater",
    description: "Portable and energy-efficient for personal use.",
    price: 39.99,
    image: ElectricHeaterImage
  },
  {
    id: 11,
    name: "Electric Skillet",
    description: "12-inch non-stick surface, adjustable temperature.",
    price: 49.99,
    image: ElectricSkilletImage
  },
  {
    id: 12,
    name: "Electric Pressure Cooker",
    description: "8-in-1 multi-use programmable cooker.",
    price: 99.99,
    image: PressureCookerImage
  }
];






<div className="product">
  <h3 className="product-name">Product Name</h3>
  <p className="product-description">This is a great product!</p>
  <p className="product-price">$29.99</p>
</div>

const ProductList = ({addToCart}) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <img src={product.image} 
  alt={product.name} 
  className="product-image"/>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          {/* Add to Cart Button */}
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};


 

export default ProductList;
