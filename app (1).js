
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on page load
document.getElementById('cart-count').textContent = cart.length;

// Add items to cart and store in localStorage
function addToCart(productName, price) {
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + " added to cart!");
    document.getElementById('cart-count').textContent = cart.length; // Update cart count
}

// Display cart items on the cart page
function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `<p>${item.productName} - $${item.price}</p>`;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total;
}

// Clear the cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('cart-total').textContent = '0';
    document.getElementById('cart-count').textContent = '0';
}

// Load cart on the cart page
if (document.body.contains(document.getElementById('cart-items'))) {
    loadCart();
}
