import React, { useContext } from "react";
import { products } from "../services/productService";
import { CartContext } from "../context/CartContext";

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;