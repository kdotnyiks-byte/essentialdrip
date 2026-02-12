// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get selected size
    const sizeContainer = document.querySelector(`[data-product-id="${productId}"]`);
    const selectedSizeBtn = sizeContainer?.querySelector('.size-option.selected');
    const selectedSize = selectedSizeBtn?.dataset.size || product.sizes[0];

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === productId && item.size === selectedSize);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images ? product.images[0] : product.image,
            size: selectedSize,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification('Added to cart!');
}

// Remove item from cart
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    updateCartCount();
    if (typeof renderCart === 'function') {
        renderCart();
    }
}

// Update item quantity
function updateQuantity(productId, size, change) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            saveCart();
            if (typeof renderCart === 'function') {
                renderCart();
            }
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Get cart total
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Generate detailed WhatsApp invoice message
function generateWhatsAppInvoice() {
    const subtotal = getCartTotal();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + shipping;
    const date = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    const invoiceNumber = 'INV-' + Date.now().toString().slice(-8);
    
    // Header
    let message = `*ESSENTIAL DRIP APPAREL*%0A`;
    message += `SALES INVOICE%0A`;
    message += `================================%0A`;
    message += `Invoice No: ${invoiceNumber}%0A`;
    message += `Date: ${date}%0A`;
    message += `Total Items: ${cart.length}%0A`;
    message += `================================%0A%0A`;
    
    // Items Header
    message += `*ITEM DETAILS*%0A`;
    message += `--------------------------------%0A`;
    
    // Items
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        message += `%0A${index + 1}. ${item.name}%0A`;
        message += `   Size: ${item.size}%0A`;
        message += `   Quantity: ${item.quantity}%0A`;
        message += `   Unit Price: $${item.price.toFixed(2)}%0A`;
        message += `   Line Total: $${itemTotal.toFixed(2)}%0A`;
    });
    
    // Summary
    message += `%0A================================%0A`;
    message += `*PAYMENT BREAKDOWN*%0A`;
    message += `--------------------------------%0A`;
    message += `Subtotal: $${subtotal.toFixed(2)}%0A`;
    message += `Shipping: ${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}%0A`;
    if (shipping === 0) {
        message += `(Free shipping on orders over $50)%0A`;
    }
    message += `--------------------------------%0A`;
    message += `*GRAND TOTAL: $${total.toFixed(2)}*%0A`;
    message += `================================%0A%0A`;
    
    // Footer
    message += `*CUSTOMER ACTION REQUIRED:*%0A`;
    message += `Please provide the following:%0A%0A`;
    message += `1. Full Delivery Address%0A`;
    message += `2. Contact Phone Number%0A`;
    message += `3. Preferred Payment Method%0A%0A`;
    message += `--------------------------------%0A`;
    message += `Thank you for choosing Essential Drip Apparel.%0A`;
    message += `We will process your order upon confirmation.`;
    
    return message;
}

// Generate PDF-style invoice (text format for printing/saving)
function generatePDFInvoice() {
    const subtotal = getCartTotal();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + shipping;
    const date = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    const invoiceNumber = 'INV-' + Date.now().toString().slice(-8);
    
    let invoice = `
╔════════════════════════════════════════════════════════╗
║           ESSENTIAL DRIP APPAREL                       ║
║              SALES INVOICE                             ║
╚════════════════════════════════════════════════════════╝

Invoice Number: ${invoiceNumber}
Date: ${date}
Total Items: ${cart.length}

────────────────────────────────────────────────────────

ITEM DETAILS:

`;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        invoice += `${index + 1}. ${item.name}\n`;
        invoice += `   Size: ${item.size}\n`;
        invoice += `   Quantity: ${item.quantity}\n`;
        invoice += `   Unit Price: $${item.price.toFixed(2)}\n`;
        invoice += `   Line Total: $${itemTotal.toFixed(2)}\n\n`;
    });
    
    invoice += `────────────────────────────────────────────────────────\n\n`;
    invoice += `PAYMENT BREAKDOWN:\n\n`;
    invoice += `Subtotal:           $${subtotal.toFixed(2)}\n`;
    invoice += `Shipping:           ${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}\n`;
    if (shipping === 0) {
        invoice += `(Free shipping on orders over $50)\n`;
    }
    invoice += `\n────────────────────────────────────────────────────────\n`;
    invoice += `GRAND TOTAL:        $${total.toFixed(2)}\n`;
    invoice += `════════════════════════════════════════════════════════\n\n`;
    invoice += `CUSTOMER ACTION REQUIRED:\n`;
    invoice += `Please provide the following:\n\n`;
    invoice += `1. Full Delivery Address\n`;
    invoice += `2. Contact Phone Number\n`;
    invoice += `3. Preferred Payment Method\n\n`;
    invoice += `────────────────────────────────────────────────────────\n`;
    invoice += `Thank you for choosing Essential Drip Apparel.\n`;
    invoice += `We will process your order upon confirmation.\n`;
    
    return invoice;
}

// Download invoice as text file
function downloadInvoice() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    try {
        const invoice = generatePDFInvoice();
        const blob = new Blob([invoice], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Essential-Drip-Invoice-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        showNotification('Invoice downloaded!');
    } catch (error) {
        console.error('Download error:', error);
        showNotification('Error downloading invoice. Please try again.');
    }
}

// Checkout via WhatsApp
function checkoutWhatsApp() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const invoiceMessage = generateWhatsAppInvoice();
    const whatsappUrl = `https://wa.me/263781527753?text=${invoiceMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCartCount();
        if (typeof renderCart === 'function') {
            renderCart();
        }
        showNotification('Cart cleared!');
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #1E40AF;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Render cart page
function renderCart() {
    const cartContent = document.getElementById('cartContent');
    if (!cartContent) return;

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Add some items to get started!</p>
                <a href="shop.html" class="btn btn-primary">Shop Now</a>
            </div>
        `;
        return;
    }

    const cartItemsHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Size: ${item.size}</p>
                <p class="product-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button onclick="updateQuantity('${item.id}', '${item.size}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', '${item.size}', 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}', '${item.size}')">🗑️</button>
            </div>
        </div>
    `).join('');

    const subtotal = getCartTotal();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + shipping;

    cartContent.innerHTML = `
        <div class="cart-grid">
            <div class="cart-items">
                ${cartItemsHTML}
            </div>
            <div class="cart-summary">
                <h3>Order Summary</h3>
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Shipping:</span>
                    <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
                </div>
                <div class="cart-total">
                    <span>Total:</span>
                    <span class="total-price">$${total.toFixed(2)}</span>
                </div>
                <button onclick="checkoutWhatsApp()" class="btn btn-primary" style="width: 100%; text-align: center;">
                    Checkout via WhatsApp
                </button>
                <button onclick="downloadInvoice()" class="btn btn-secondary" style="width: 100%; margin-top: 1rem;">
                    Download Invoice
                </button>
                <button onclick="clearCart()" class="btn btn-secondary" style="width: 100%; margin-top: 1rem;">
                    Clear Cart
                </button>
            </div>
        </div>
    `;
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    // Render cart if on cart page
    if (document.getElementById('cartContent')) {
        renderCart();
    }
});
