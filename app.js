// Initialize cart
let cart = [];

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    let product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    let productExists = cart.find(item => item.name === product.name);
    
    if (productExists) {
        productExists.quantity += 1;
    } else {
        cart.push(product);
    }

    updateCartCount();
    console.log(cart);  // For debugging purposes
}

// Function to update the cart count in the navigation
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.reduce((total, product) => total + product.quantity, 0);
}

// Function to view product details (redirects to individual product pages)
function viewDetails(productPage) {
    window.location.href = productPage;
}

// Save cart data to localStorage to persist the cart between pages
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart data from localStorage when the page loads
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Call loadCart when the page loads
window.onload = loadCart;

// Save cart data when the user leaves the page
window.onbeforeunload = saveCart;
