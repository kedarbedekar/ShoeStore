
let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(productName + " added to cart!");
    console.log(cart); // Cart can be displayed dynamically in future
}
