// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Product Data (Dynamic Loading)
const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Gaming Laptop", price: 1299.99, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" }
];

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
});

// Cart Functionality
let cartCount = 0;
const cartButtons = document.querySelectorAll('.add-to-cart');
const cartCounter = document.querySelector('.cart-count');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCounter.textContent = cartCount;
        
        // Animation for cart update
        cartCounter.classList.add('animate');
        setTimeout(() => {
            cartCounter.classList.remove('animate');
        }, 300);
    });
});