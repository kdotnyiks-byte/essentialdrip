// Cart management using localStorage

function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Get selected size
    const sizeContainer = document.querySelector(`[data-product-id="${productId}"]`);
    const selectedSizeBtn = sizeContainer.querySelector('.size-option.selected');
    const size = selectedSizeBtn ? selectedSizeBtn.dataset.size : product.sizes[0];
    
    const cart = getCart();
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.productId === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            size: size,
            quantity: 1
        });
    }
    
    saveCart(cart);
    
    // Show feedback
    alert(`${product.name} (Size: ${size}) added to cart!`);
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadCart();
}

function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) return;
    
    const cart = getCart();
    cart[index].quantity = newQuantity;
    saveCart(cart);
    loadCart();
}

function updateCartBadge() {
    const cart = getCart();
    const badge = document.getElementById('cartBadge');
    
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            badge.textContent = totalItems;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.productId);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}

function loadCart() {
    const cart = getCart();
    const container = document.getElementById('cartItemsContainer');
    const emptyCart = document.getElementById('emptyCart');
    const cartSummary = document.getElementById('cartSummary');
    
    if (!container) return;
    
    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        container.innerHTML = '';
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';
    
    container.innerHTML = cart.map((item, index) => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return '';
        
        const subtotal = product.price * item.quantity;
        
        return `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${product.name}</h3>
                    <p>Size: ${item.size}</p>
                    <p>Price: $${product.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button onclick="updateQuantity(${index}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                        <span style="padding: 0 1rem;">${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                    </div>
                    <div style="font-weight: bold; font-size: 1.25rem;">
                        $${subtotal.toFixed(2)}
                    </div>
                    <button class="btn btn-secondary" style="padding: 0.5rem 1rem;" onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    // Update total
    const totalElement = document.getElementById('cartTotal');
    if (totalElement) {
        totalElement.textContent = `$${getCartTotal().toFixed(2)}`;
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartBadge();
    if (typeof loadCart === 'function') {
        loadCart();
    }
}

// Initialize cart badge on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
});
