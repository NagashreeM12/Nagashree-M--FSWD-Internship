import React, { useState, useEffect } from "react";

function App() {

  // Step 4.1: Create product list
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  // Step 4.2: Create state for cart
  const [cartCount, setCartCount] = useState(0);

  // Step 4.3: Add to cart function
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  // Step 4.4: useEffect for logging
  useEffect(() => {
    console.log("Cart updated:", cartCount);
  }, [cartCount]);

  // Step 4.5: UI
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🛒 Product Cart</h1>

      <h2>Cart Items: {cartCount}</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;