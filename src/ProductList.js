import React from "react";


const products = [
  { id: 1, name: "Apple", price: 1.0 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Orange", price: 0.75 },
];



<div className="product">
  <h3 className="product-name">Product Name</h3>
  <p className="product-description">This is a great product!</p>
  <p className="product-price">$29.99</p>
</div>

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
