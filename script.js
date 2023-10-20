var cartItems = [];
var cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price, quantity: 1 });
    cartTotal += price;

    updateCartUI();
}

function removeFromCart(index) {
    var removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price * removedItem.quantity;

    updateCartUI();
}

function increaseQuantity(index) {
    cartItems[index].quantity++;
    cartTotal += cartItems[index].price;

    updateCartUI();
}

function decreaseQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        cartTotal -= cartItems[index].price;

        updateCartUI();
    }
}

function updateCartUI() {
    var cartList = document.getElementById("cart-items");
    var totalSpan = document.getElementById("cart-total");
    cartList.innerHTML = "";

    cartItems.forEach(function(item, index) {
        var newItem = document.createElement("li");
        newItem.textContent = `${item.name} - Rp ${item.price} x ${item.quantity}`;

        var decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.onclick = function() {
            decreaseQuantity(index);
        };

        var increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.onclick = function() {
            increaseQuantity(index);
        };

        var removeButton = document.createElement("button");
        removeButton.textContent = "Hapus";
        removeButton.onclick = function() {
            removeFromCart(index);
        };

        newItem.appendChild(decreaseButton);
        newItem.appendChild(increaseButton);
        newItem.appendChild(removeButton);
        cartList.appendChild(newItem);
    });

    totalSpan.textContent = "Rp " + cartTotal;
}
