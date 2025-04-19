// Cart object to hold products
let cart = [];

// Sample products array
const products = [
    {
        id: 1,
        name: "Red Dog Collar",
        price: 12.99,
        image: "images/product1.jpg",
        category: "dogs"
    },
    {
        id: 2,
        name: "Cat Cozy Bed",
        price: 24.99,
        image: "images/product2.jpg",
        category: "cats"
    },
    {
        id: 3,
        name: "Squeaky Toy",
        price: 6.49,
        image: "images/product3.jpg",
        category: "toys"
    },
    {
        id: 4,
        name: "Luxury Pet Bed",
        price: 35.99,
        image: "images/product4.jpg",
        category: "beds"
    }
    // Add more products if needed
];

// Function to add item to the cart
function addToCart(productId, productName, productPrice) {
    const product = {
        id: productId,
        name: productName,
        price: productPrice
    };

    cart.push(product);
    alert(`${productName} has been added to your cart!`);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const cartCount = document.getElementById("cart-count");

    if (cartList && cartCount) {
        cartList.innerHTML = "";
        let totalAmount = 0;
        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(listItem);
            totalAmount += item.price;
        });

        cartCount.textContent = `Items in Cart: ${cart.length}`;
        const totalAmountElement = document.getElementById("total-amount");
        if (totalAmountElement) {
            totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
        }
    }
}

// Function to handle the checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to checkout...");
    // Add additional checkout logic here
}

// Function to display products
function renderProducts(productList) {
    const container = document.getElementById("all-products");
    if (!container) return;

    container.innerHTML = "";
    productList.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button 
                class="add-to-cart" 
                data-product-id="${product.id}" 
                data-product-name="${product.name}" 
                data-product-price="${product.price}">
                Add to Cart
            </button>
        `;

        container.appendChild(productCard);
    });

    // Re-bind addToCart buttons after rendering
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.dataset.productId;
            const productName = button.dataset.productName;
            const productPrice = parseFloat(button.dataset.productPrice);
            addToCart(productId, productName, productPrice);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Render all products on shop.html
    renderProducts(products);

    // Optional: Add filter/sort logic here later
});
