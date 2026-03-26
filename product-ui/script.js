const products = [
  { id: 1, name: "Phone", price: 20000, category: "electronics", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 50000, category: "electronics", image: "https://via.placeholder.com/150" },
  { id: 3, name: "T-Shirt", price: 500, category: "clothing", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Jeans", price: 1500, category: "clothing", image: "https://via.placeholder.com/150" }
];

const container = document.getElementById("productContainer");
const filter = document.getElementById("categoryFilter");
const search = document.getElementById("search");

let cart = []; // 🛒 Cart array

// Display Products
function displayProducts(data) {
  container.innerHTML = "";

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

// ✅ Add to Cart Function
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);

  console.log("Cart:", cart);
  alert(product.name + " added to cart!");
}

// Filter + Search
function filterProducts() {
  let filtered = products;

  if (filter.value !== "all") {
    filtered = filtered.filter(p => p.category === filter.value);
  }

  const searchValue = search.value.toLowerCase();
  filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(searchValue)
  );

  displayProducts(filtered);
}

filter.addEventListener("change", filterProducts);
search.addEventListener("input", filterProducts);

// Initial Load
displayProducts(products);