import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Card title="Product 1" />
        <Card title="Product 2" />
        <Card title="Product 3" />
      </div>

      <Footer />
    </div>
  );
}

export default App;