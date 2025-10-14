// Product data
const products = [
    // T-Shirts
    {
        id: '1',
        name: 'Essential Drip Tee',
        description: 'Premium cotton t-shirt with signature drip logo',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
        category: 'tshirts',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        isNewIn: true
    },
    {
        id: '2',
        name: 'Oversized Comfort Tee',
        description: 'Relaxed fit oversized tee for ultimate comfort',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
        category: 'tshirts',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        isNewIn: true
    },
    {
        id: '3',
        name: 'Graphic Print Tee',
        description: 'Bold graphic design on premium fabric',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
        category: 'tshirts',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        isNewIn: false
    },
    {
        id: '4',
        name: 'Minimal White Tee',
        description: 'Clean and minimal essential white tee',
        price: 27.99,
        image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=600&fit=crop',
        category: 'tshirts',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        isNewIn: false
    },
    
    // Shoes
    {
        id: '5',
        name: 'Urban Runner',
        description: 'Lightweight running shoes with premium cushioning',
        price: 89.99,
        image: 'https://i.pinimg.com/1200x/e6/62/ff/e662ff318b1d59006290a60c147c6d22.jpg',
        category: 'shoes',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: true
    },
    {
        id: '6',
        name: 'Street Classic',
        description: 'Timeless streetwear sneakers',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
        category: 'shoes',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: false
    },
    {
        id: '7',
        name: 'High Top Elite',
        description: 'Premium high-top sneakers for style',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=600&fit=crop',
        category: 'shoes',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: true
    },
    {
        id: '8',
        name: 'Minimal Low',
        description: 'Clean low-top design for everyday wear',
        price: 74.99,
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop',
        category: 'shoes',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: false
    },
    
    // Cargo Pants
    {
        id: '9',
        name: 'Tactical Cargo',
        description: 'Multi-pocket cargo pants with adjustable fit',
        price: 64.99,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
        category: 'cargo-pants',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: true
    },
    {
        id: '10',
        name: 'Urban Utility',
        description: 'Sleek cargo design for urban explorers',
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop',
        category: 'cargo-pants',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    },
    {
        id: '11',
        name: 'Relaxed Cargo',
        description: 'Comfortable relaxed fit cargo pants',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
        category: 'cargo-pants',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    },
    {
        id: '12',
        name: 'Slim Cargo',
        description: 'Modern slim-fit cargo pants',
        price: 67.99,
        image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&h=600&fit=crop',
        category: 'cargo-pants',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    },
    
    // Jeans
    {
        id: '13',
        name: 'Classic Blue Denim',
        description: 'Timeless blue jeans with perfect fit',
        price: 54.99,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
        category: 'jeans',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    },
    {
        id: '14',
        name: 'Black Skinny Jeans',
        description: 'Sleek black skinny fit jeans',
        price: 57.99,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
        category: 'jeans',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: true
    },
    {
        id: '15',
        name: 'Distressed Denim',
        description: 'Edgy distressed style jeans',
        price: 62.99,
        image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&h=600&fit=crop',
        category: 'jeans',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    },
    {
        id: '16',
        name: 'Straight Fit Jeans',
        description: 'Classic straight fit for everyday wear',
        price: 52.99,
        image: 'https://images.unsplash.com/photo-1548883354-a9a8e8e9d1c0?w=500&h=600&fit=crop',
        category: 'jeans',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    }
];

// Helper function to create product card HTML
function createProductCard(product) {
    const badgeHTML = product.isNewIn ? '<span class="product-badge">NEW</span>' : '';
    const sizesHTML = product.sizes.map((size, index) => 
        `<button class="size-option ${index === 0 ? 'selected' : ''}" data-size="${size}">${size}</button>`
    ).join('');
    
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                ${badgeHTML}
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-sizes" data-product-id="${product.id}">
                    ${sizesHTML}
                </div>
                <button class="btn btn-primary" style="width: 100%;" onclick="addToCart('${product.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Initialize size selection handlers
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('size-option')) {
        const container = e.target.closest('.product-sizes');
        container.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});
