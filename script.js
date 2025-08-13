const products = [
  { 
    id: 1, 
    name: "Laptop", 
    category: "electronics", 
    price: 45000, 
    image: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg" 
  },
  { 
    id: 2, 
    name: "Smartphone", 
    category: "electronics", 
    price: 25000, 
    image: "https://media.istockphoto.com/id/1316576464/photo/smartphones-store-showcase-with-selling-various-new-smartphones-in-electronics-store-during-a.jpg?s=2048x2048&w=is&k=20&c=9XXy5fw4HxZ4AGwMSfBUXlZn1hOcliLX-GvtNnjzZLw=" 
  },
  { 
    id: 3, 
    name: "T-Shirt", 
    category: "clothing", 
    price: 600, 
    image: "https://media.istockphoto.com/id/1358422711/photo/navy%093d-hq-rendered-t-shirt-with-detailed-and-texture-color.jpg?s=2048x2048&w=is&k=20&c=Ls62kJ69tdDh9oil2U6eNeADSfmx1Y9ByDxnI8lklak=" 
  },
  { 
    id: 4, 
    name: "Jeans", 
    category: "clothing", 
    price: 1200, 
    image: "https://cdn.pixabay.com/photo/2011/06/12/04/58/nanjing-7866_1280.jpg" 
  },
];




let filteredProducts = [...products];
let cart = [];

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cartList");
  const total = document.getElementById("cartTotal");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    sum += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    list.appendChild(li);
  });
  total.textContent = sum;
}

function filterProducts() {
  const category = document.getElementById("filter").value;
  filteredProducts = category === "all" ? [...products] : products.filter(p => p.category === category);
  sortProducts();
}

function sortProducts() {
  const sort = document.getElementById("sort").value;
  const sorted = [...filteredProducts];
  sorted.sort((a, b) => sort === "asc" ? a.price - b.price : b.price - a.price);
  displayProducts(sorted);
}

window.onload = () => {
  displayProducts(products);
};
