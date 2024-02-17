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
