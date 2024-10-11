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
    updateCartTotal();
    saveCart();
}

// Function to update the cart count in the navigation
function updateCartCount() {
    const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Function to update the cart total
function updateCartTotal() {
    const cartTotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const totalElement = document.getElementById('cart-total');
    if (totalElement) {
        totalElement.innerText = cartTotal.toFixed(2);
    }
}

// Function to handle category modal (instead of redirecting immediately)
function openCategoryModal() {
    document.getElementById('category-modal').style.display = 'block';
}

// Function to close the category modal
function closeCategoryModal() {
    document.getElementById('category-modal').style.display = 'none';
}

// Attach event listener to the Shop Now button
const shopNowButton = document.querySelector('.shop-now');
if (shopNowButton) {
    shopNowButton.addEventListener('click', openCategoryModal);
}

// Close modal if the user clicks outside it
window.onclick = function(event) {
    const modal = document.getElementById('category-modal');
    if (event.target == modal) {
        closeCategoryModal();
    }
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
        updateCartTotal();
    }
}

// Call loadCart when the page loads
window.onload = loadCart;

// Save cart data when the user leaves the page
window.onbeforeunload = saveCart;

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartCount();
    updateCartTotal();
    saveCart();
    document.getElementById('cart-items').innerHTML = '';
}
