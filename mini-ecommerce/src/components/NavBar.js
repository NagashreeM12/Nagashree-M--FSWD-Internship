import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ background: "black", color: "white", padding: "10px" }}>
      <h2>🛒 Mini E-Commerce | Cart: {cart.length}</h2>
    </div>
  );
}

export default Navbar;