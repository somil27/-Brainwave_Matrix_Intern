const products = [
  {
    name: "Reusable Water Bottle",
    price: 15,
    img: "images/S_wellInsulatedReusableWaterBottle500ml-RoseMarble.png"
  },
  {
    name: "Bamboo Toothbrush",
    price: 3,
    img: "images/download.jpeg"
  },
  {
    name: "Eco Bag",
    price: 5,
    img: "images/images.jpeg"
  },
  {
    name: "Metal Straw Set",
    price: 7,
    img: "images/straw.jpeg"
  }
];

const grid = document.getElementById('product-grid');
let cartCount = 0;

products.forEach((product, index) => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;
  grid.appendChild(div);
});

function addToCart(index) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`Added ${products[index].name} to cart.`);
}
