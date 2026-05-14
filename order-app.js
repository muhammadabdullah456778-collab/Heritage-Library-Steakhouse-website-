/* ═══════════════════════════════════════════════════
   ORDER-APP.JS — Cart functionality for Order page
   ═══════════════════════════════════════════════════ */

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartMsg = document.getElementById('emptyCartMsg');
    const cartTotalVal = document.getElementById('cartTotalVal');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        if (emptyCartMsg) {
            cartItemsContainer.appendChild(emptyCartMsg);
            emptyCartMsg.style.display = 'block';
        }
    } else {
        if (emptyCartMsg) emptyCartMsg.style.display = 'none';
        cart.forEach((item, index) => {
            total += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div>
                    <span class="cart-item-title">${item.name}</span>
                    <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fas fa-times"></i></button>
                </div>
                <span class="cart-item-price">${item.price.toLocaleString()} PKR</span>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    }
    cartTotalVal.innerText = `${total.toLocaleString()} PKR`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add some items before checking out.');
        return;
    }

    const receiptModal = document.getElementById('receiptModal');
    const receiptItems = document.getElementById('receiptItems');
    const receiptTotalVal = document.getElementById('receiptTotalVal');
    const receiptID = document.getElementById('receiptID');
    const receiptDate = document.getElementById('receiptDate');

    // Generate random Order ID
    const randomID = Math.floor(1000 + Math.random() * 9000);
    receiptID.innerText = `#HL-${randomID}`;

    // Set Date
    const now = new Date();
    receiptDate.innerText = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    // Populate Items
    receiptItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const lineItem = document.createElement('div');
        lineItem.className = 'receipt-line-item';
        lineItem.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price.toLocaleString()}</span>
        `;
        receiptItems.appendChild(lineItem);
    });

    receiptTotalVal.innerText = `${total.toLocaleString()} PKR`;

    // Show Modal
    receiptModal.style.display = 'block';
}

function closeReceipt() {
    document.getElementById('receiptModal').style.display = 'none';
    cart = [];
    renderCart();
    window.scrollTo({top: 0, behavior: 'smooth'});
}
