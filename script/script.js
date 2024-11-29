fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((products) => {
  const container = document.getElementById("products-container");
  container.innerHTML = ""; // Clear any existing content

  // Loop through each product and create a card
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h2>${product.title}</h2>
      <p>${product.description.substring(0, 100)}...</p>
      <span>$${product.price.toFixed(2)}</span>
      <button>
      <i class="bi bi-cart"></i>
      add cart
      </button>
    `;

    // Append the product card to the container
    container.appendChild(productCard);
  });
})
.catch((error) => {
  console.error("Error fetching products:", error);
});

// Get the current year in footer
const dateTxt = new Date().getFullYear();
let date = document.getElementById("date");
date.innerHTML = dateTxt;


