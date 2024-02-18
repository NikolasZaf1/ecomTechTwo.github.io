function addToCart(product) {
    // Simulate adding product to cart
    const cart = document.querySelector('#cart ul');
    const item = document.createElement('li');
    item.textContent = product;
    cart.appendChild(item);
}

function checkout() {
    alert('Thank you for shopping with SuperTech Eshop!');
}

// Function to display a pop-up message when a product is added to the cart
function showAddedToCartMessage() {
    alert('Product added to cart!');
}

// Function to display a pop-up message when a product is removed from the cart
function showRemovedFromCartMessage() {
    alert('Product removed from cart!');
}

// Function to handle product quantity changes in the cart
function updateCartItemQuantity(itemId, newQuantity) {
    // Here you could perform operations like updating the quantity in the cart
    console.log(`Updated quantity of item ${itemId} to ${newQuantity}`);
}

// Function to fetch recommended products based on user preferences
function fetchRecommendedProducts(userId) {
    // Here you could make an AJAX request to fetch recommended products
    console.log(`Fetching recommended products for user ${userId}`);
}

// Function to track user interactions with the website
function trackUserInteractions(action) {
    // Here you could send data to a tracking service or analytics platform
    console.log(`User performed action: ${action}`);
}

// Function to dynamically load additional content or features
function loadAdditionalContent() {
    // Here you could load additional content based on certain conditions or triggers
    console.log('Loading additional content...');
}

