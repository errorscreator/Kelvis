document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const cartTotal = document.getElementById('cart-total');
    const orderButton = document.getElementById('order-button');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        orderButton.style.display = 'none'; // Hide the "Order" button
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-img">
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

        total += parseFloat(item.price.slice(1)) * item.quantity;
    });

    cartTotal.innerText = `$${total.toFixed(2)}`;

    orderButton.addEventListener('click', () => {
        alert('Thanks for your order'); 
        localStorage.removeItem('cart');
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.innerText = '$0.00'; 
        orderButton.style.display = 'none';
    });
});

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    location.reload(); 
}


