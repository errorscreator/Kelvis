// document.addEventListener('DOMContentLoaded', () => {
//     const cartContainer = document.getElementById('cart-container');
//     const cartTotal = document.getElementById('cart-total');
//     const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage

//     if (cart.length === 0) {
//         cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//         return;
//     }

//     let total = 0;

//     cart.forEach((item, index) => {
//         const cartItem = `
//             <div class="cart-item">
//                 <img src="${item.smallImage}" alt="${item.name}" class="cart-small-img"> <!-- Small image -->
//                 <div class="cart-details">
//                     <h4>${item.name}</h4>
//                     <p>Price: ${item.price}</p>
//                     <p>Size: ${item.size}</p>
//                     <p>Quantity: ${item.quantity}</p>
//                 </div>
//                 <button onclick="removeFromCart(${index})">Remove</button>
//             </div>
//         `;
//         cartContainer.innerHTML += cartItem;

//         // Calculate total
//         total += parseFloat(item.price.slice(1)) * item.quantity;
//     });

//     cartTotal.innerText = `$${total.toFixed(2)}`;
// });

// // Function to remove an item from the cart
// function removeFromCart(index) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.splice(index, 1); // Remove the item at the specified index
//     localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
//     location.reload(); // Reload the page to update the cart
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const cartContainer = document.getElementById('cart-container');
//     const cartTotal = document.getElementById('cart-total');
//     const orderButton = document.getElementById('order-button');
//     const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage

//     if (cart.length === 0) {
//         cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//         return;
//     }

//     let total = 0;

//     cart.forEach((item, index) => {
//         const cartItem = `
//             <div class="cart-item">
//                 <img src="${item.image}" alt="${item.name}" class="cart-img"> <!-- Display the saved image -->
//                 <div class="cart-details">
//                     <h4>${item.name}</h4>
//                     <p>Price: ${item.price}</p>
//                     <p>Size: ${item.size}</p>
//                     <p>Quantity: ${item.quantity}</p>
//                 </div>
//                 <button onclick="removeFromCart(${index})">Remove</button>
//             </div>
//         `;
//         cartContainer.innerHTML += cartItem;

//         // Calculate total
//         total += parseFloat(item.price.slice(1)) * item.quantity;
//     });

//     cartTotal.innerText = `$${total.toFixed(2)}`;

//     // Handle "Order" button click
//     orderButton.addEventListener('click', () => {
//         alert('Thanks for your order'); // Show alert
//         localStorage.removeItem('cart'); // Clear the cart from localStorage
//         cartContainer.innerHTML = '<p>Your cart is empty.</p>'; // Update the cart container
//         cartTotal.innerText = '$0.00'; // Reset the total
//     });
// });

// // Function to remove an item from the cart
// function removeFromCart(index) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.splice(index, 1); // Remove the item at the specified index
//     localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
//     location.reload(); // Reload the page to update the cart
// }

document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const cartTotal = document.getElementById('cart-total');
    const orderButton = document.getElementById('order-button');
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        orderButton.style.display = 'none'; // Hide the "Order" button
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-img"> <!-- Display the saved image -->
                <div class="cart-details">
                    <h4>${item.name}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Size: ${item.size}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartContainer.innerHTML += cartItem;

        // Calculate total
        total += parseFloat(item.price.slice(1)) * item.quantity;
    });

    cartTotal.innerText = `$${total.toFixed(2)}`;

    // Handle "Order" button click
    orderButton.addEventListener('click', () => {
        alert('Thanks for your order'); // Show alert
        localStorage.removeItem('cart'); // Clear the cart from localStorage
        cartContainer.innerHTML = '<p>Your cart is empty.</p>'; // Update the cart container
        cartTotal.innerText = '$0.00'; // Reset the total
        orderButton.style.display = 'none'; // Hide the "Order" button
    });
});

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    location.reload(); // Reload the page to update the cart
}


