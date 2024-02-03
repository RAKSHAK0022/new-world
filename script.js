// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Sample menu items
    const menuItems = [
        { id: 1, name: 'Pizza', price: 10 },
        { id: 2, name: 'Burger', price: 8 },
        { id: 3, name: 'Salad', price: 6 }
    ];

    const menuContainer = document.getElementById('menuItems');
    const cartContainer = document.getElementById('cart');

    // Display menu items
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `<p>${item.name} - $${item.price}</p><button onclick="addToCart(${item.id})">Add to Cart</button>`;
        menuContainer.appendChild(menuItem);
    });

    // Function to add item to the cart
    window.addToCart = function (itemId) {
        const selectedItem = menuItems.find(item => item.id === itemId);

        if (selectedItem) {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `<p>${selectedItem.name} - $${selectedItem.price}</p>`;
            cartContainer.appendChild(cartItem);
        }
    };
});
