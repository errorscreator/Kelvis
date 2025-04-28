let cart = JSON.parse(localStorage.getItem('cart')) || []; 

function addToCart() {
    const productName = document.querySelector('.product-text h4').innerText;
    const productPrice = document.querySelector('.product-text h2').innerText;
    const productSize = document.querySelector('.product-text select').value; 
    const productQuantity = parseInt(document.querySelector('.product-text input[type="number"]').value);
    const productImage = document.getElementById('main-img').src; 

    if (!productSize || productSize === "Select Size") {
        alert('Please select a size.');
        return;
    }

    const product = {
        id: Date.now().toString(), 
        name: productName,
        price: productPrice,
        size: productSize,
        quantity: productQuantity,
        image: productImage 
    };

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} (Size: ${productSize}) added to cart!`);

    window.location.href = 'cart.html';
}
