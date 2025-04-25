// let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart or initialize an empty array

// function addToCart() {
//     // Get product details
//     const productName = document.querySelector('.product-text h4').innerText;
//     const productPrice = document.querySelector('.product-text h2').innerText;
//     const productSize = document.querySelector('.product-text select').value; // Get selected size
//     const productQuantity = parseInt(document.querySelector('.product-text input[type="number"]').value);
//     const productImage = document.getElementById('main-img').src; // Main product image
//     const smallImage = document.querySelector('.small-img img').src; // Small product image

//     // Validate size selection
//     if (!productSize || productSize === "Select Size") {
//         alert('Please select a size.');
//         return;
//     }

//     // Create a product object
//     const product = {
//         id: Date.now().toString(), // Unique ID for the product
//         name: productName,
//         price: productPrice,
//         size: productSize,
//         quantity: productQuantity,
//         image: productImage,
//         smallImage: smallImage // Add small image URL
//     };

//     // Add product to the cart
//     cart.push(product);

//     // Save updated cart to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${productName} (Size: ${productSize}) added to cart!`);

//     // Redirect to cart.html
//     window.location.href = 'cart.html';
// }


let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart or initialize an empty array

function addToCart() {
    // Get product details
    const productName = document.querySelector('.product-text h4').innerText;
    const productPrice = document.querySelector('.product-text h2').innerText;
    const productSize = document.querySelector('.product-text select').value; // Get selected size
    const productQuantity = parseInt(document.querySelector('.product-text input[type="number"]').value);
    const productImage = document.getElementById('main-img').src; // Get the currently displayed main image

    // Validate size selection
    if (!productSize || productSize === "Select Size") {
        alert('Please select a size.');
        return;
    }

    // Create a product object
    const product = {
        id: Date.now().toString(), // Unique ID for the product
        name: productName,
        price: productPrice,
        size: productSize,
        quantity: productQuantity,
        image: productImage // Save the currently displayed main image
    };

    // Add product to the cart
    cart.push(product);

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} (Size: ${productSize}) added to cart!`);

    // Redirect to cart.html
    window.location.href = 'cart.html';
}
