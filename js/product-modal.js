/**
 * Product Modal Component
 * Handles immersive single-product view with image gallery and product details
 */

class ProductModal {
    constructor() {
        this.currentProduct = null;
        this.currentImageIndex = 0;
        this.isOpen = false;
        this.touchStartY = 0;
        this.touchEndY = 0;

        this.init();
    }

    init() {
        // Create modal container if it doesn't exist
        if (!document.getElementById('productModal')) {
            const modalContainer = document.createElement('div');
            modalContainer.id = 'productModal';
            modalContainer.className = 'product-modal-overlay';
            modalContainer.style.display = 'none';
            document.body.appendChild(modalContainer);
        }

        // Bind event handlers
        this.handleKeyboard = this.handleKeyboard.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }

    open(productId) {
        // Find product by ID
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error('Product not found:', productId);
            return;
        }

        this.currentProduct = product;
        this.currentImageIndex = 0;
        this.isOpen = true;

        this.render();
        this.show();
        this.attachEventListeners();

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Focus trap - focus on modal
        setTimeout(() => {
            const closeBtn = document.querySelector('.modal-close-btn');
            if (closeBtn) closeBtn.focus();
        }, 100);
    }

    close() {
        this.isOpen = false;
        const modal = document.getElementById('productModal');

        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                modal.innerHTML = '';
            }, 300);
        }

        this.detachEventListeners();

        // Restore body scroll
        document.body.style.overflow = '';

        this.currentProduct = null;
        this.currentImageIndex = 0;
    }

    show() {
        const modal = document.getElementById('productModal');
        if (modal) {
            modal.style.display = 'flex';
            // Trigger reflow for animation
            modal.offsetHeight;
            modal.classList.add('active');
        }
    }

    selectImage(index) {
        if (!this.currentProduct || !this.currentProduct.images) return;

        const maxIndex = this.currentProduct.images.length - 1;
        this.currentImageIndex = Math.max(0, Math.min(index, maxIndex));

        this.updateMainImage();
        this.updateThumbnails();
    }

    nextImage() {
        if (!this.currentProduct || !this.currentProduct.images) return;

        const nextIndex = (this.currentImageIndex + 1) % this.currentProduct.images.length;
        this.selectImage(nextIndex);
    }

    previousImage() {
        if (!this.currentProduct || !this.currentProduct.images) return;

        const prevIndex = this.currentImageIndex - 1;
        const wrappedIndex = prevIndex < 0 ? this.currentProduct.images.length - 1 : prevIndex;
        this.selectImage(wrappedIndex);
    }

    updateMainImage() {
        const mainImage = document.querySelector('.modal-main-image');
        if (mainImage && this.currentProduct) {
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.src = this.currentProduct.images[this.currentImageIndex];
                mainImage.style.opacity = '1';
            }, 150);
        }
    }

    updateThumbnails() {
        const thumbnails = document.querySelectorAll('.modal-thumbnail');
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentImageIndex);
        });
    }

    render() {
        const modal = document.getElementById('productModal');
        if (!modal || !this.currentProduct) return;

        const product = this.currentProduct;
        const mainImage = product.images ? product.images[0] : product.image;

        // Generate thumbnails HTML
        const thumbnailsHTML = product.images && product.images.length > 1 ? `
            <div class="modal-thumbnail-carousel">
                ${product.images.map((img, index) => `
                    <img 
                        src="${img}" 
                        alt="${product.name} ${index + 1}" 
                        class="modal-thumbnail ${index === 0 ? 'active' : ''}"
                        data-index="${index}"
                        loading="lazy"
                    >
                `).join('')}
            </div>
        ` : '';

        // Generate sizes HTML
        const sizesHTML = product.sizes ? `
            <div class="modal-sizes">
                <h4>Select Size</h4>
                <div class="modal-size-options">
                    ${product.sizes.map((size, index) => `
                        <button class="modal-size-option ${index === 0 ? 'selected' : ''}" data-size="${size}">
                            ${size}
                        </button>
                    `).join('')}
                </div>
            </div>
        ` : '';

        // Badge HTML
        const badgeHTML = product.isNewIn ? '<span class="product-badge">NEW</span>' : '';
        const brandHTML = product.brand ? `<span class="product-badge brand-badge">${product.brand}</span>` : '';

        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <button class="modal-close-btn" aria-label="Close modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <div class="modal-gallery">
                    <div class="modal-main-image-container">
                        <img 
                            src="${mainImage}" 
                            alt="${product.name}" 
                            class="modal-main-image"
                            loading="eager"
                        >
                        ${product.images && product.images.length > 1 ? `
                            <button class="modal-nav-btn modal-prev-btn" aria-label="Previous image">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button class="modal-nav-btn modal-next-btn" aria-label="Next image">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        ` : ''}
                    </div>
                    ${thumbnailsHTML}
                </div>
                
                <div class="modal-product-info">
                    <div class="modal-badges">
                        ${badgeHTML}
                        ${brandHTML}
                    </div>
                    <h2 class="modal-product-name">${product.name}</h2>
                    <div class="modal-product-price">$${product.price.toFixed(2)}</div>
                    <p class="modal-product-description">${product.description}</p>
                    
                    ${sizesHTML}
                    
                    <div class="modal-actions">
                        <button class="btn btn-primary modal-add-cart" onclick="productModal.addToCart()">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Add to Cart
                        </button>
                        <button class="btn btn-secondary modal-buy-now">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Attach inline event handlers
        this.attachInlineHandlers();
    }

    attachInlineHandlers() {
        // Close button
        const closeBtn = document.querySelector('.modal-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Thumbnail clicks
        const thumbnails = document.querySelectorAll('.modal-thumbnail');
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => this.selectImage(index));
        });

        // Navigation buttons
        const prevBtn = document.querySelector('.modal-prev-btn');
        const nextBtn = document.querySelector('.modal-next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousImage());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextImage());
        }

        // Size selection
        const sizeOptions = document.querySelectorAll('.modal-size-option');
        sizeOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                e.target.classList.add('selected');
            });
        });

        // Buy Now button
        const buyNowBtn = document.querySelector('.modal-buy-now');
        if (buyNowBtn) {
            buyNowBtn.addEventListener('click', () => {
                this.addToCart();
                window.location.href = 'cart.html';
            });
        }
    }

    attachEventListeners() {
        document.addEventListener('keydown', this.handleKeyboard);

        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', this.handleOutsideClick);
        }

        // Touch events for mobile swipe
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('touchstart', this.handleTouchStart, { passive: true });
            modalContent.addEventListener('touchend', this.handleTouchEnd, { passive: true });
        }
    }

    detachEventListeners() {
        document.removeEventListener('keydown', this.handleKeyboard);

        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.removeEventListener('click', this.handleOutsideClick);
        }

        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.removeEventListener('touchstart', this.handleTouchStart);
            modalContent.removeEventListener('touchend', this.handleTouchEnd);
        }
    }

    handleKeyboard(e) {
        if (!this.isOpen) return;

        switch (e.key) {
            case 'Escape':
                this.close();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.previousImage();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextImage();
                break;
        }
    }

    handleOutsideClick(e) {
        if (e.target.classList.contains('modal-backdrop')) {
            this.close();
        }
    }

    handleTouchStart(e) {
        this.touchStartY = e.touches[0].clientY;
    }

    handleTouchEnd(e) {
        this.touchEndY = e.changedTouches[0].clientY;

        // Swipe down to close (threshold: 100px)
        if (this.touchStartY - this.touchEndY < -100) {
            this.close();
        }
    }

    addToCart() {
        if (!this.currentProduct) return;

        // Get selected size
        const selectedSizeBtn = document.querySelector('.modal-size-option.selected');
        const selectedSize = selectedSizeBtn ? selectedSizeBtn.dataset.size : (this.currentProduct.sizes ? this.currentProduct.sizes[0] : null);

        // Use existing addToCart function if available
        if (typeof addToCart === 'function') {
            addToCart(this.currentProduct.id, selectedSize);
        } else {
            console.log('Add to cart:', this.currentProduct.id, 'Size:', selectedSize);
        }
    }
}

// Initialize global instance
const productModal = new ProductModal();

// Global function to open modal (called from product cards)
function openProductModal(productId) {
    productModal.open(productId);
}
