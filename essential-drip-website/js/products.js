// Product data
const products = [
    // T-Shirts
    {
        id: '1',
        name: 'Essential Drip Tee',
        description: 'Premium cotton t-shirt with signature drip logo',
        price: 29.99,
        images: [
            'C:\Users\Dell Latitude 5400\Desktop\SHOES CATALOGUE\shoe-1.jpg',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop'
        ],
        category: 'tshirts',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        isNewIn: true
    },
    {
        id: '2',
        name: 'Oversized Comfort Tee',
        description: 'Relaxed fit oversized tee for ultimate comfort',
        price: 34.99,
        images: [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop'
        ],
        category: 'tshirts',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        isNewIn: true
    },
    {
        id: '3',
        name: 'Graphic Print Tee',
        description: 'Bold graphic design on premium fabric',
        price: 32.99,
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=600&fit=crop'
        ],
        category: 'tshirts',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        isNewIn: false
    },
    {
        id: '4',
        name: 'Minimal White Tee',
        description: 'Clean and minimal essential white tee',
        price: 27.99,
        images: [
            'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop'
        ],
        category: 'tshirts',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        isNewIn: false
    },
    
    // Shoes - Nike
    {
        id: '5',
        name: 'Nike Air Max 270',
        description: 'Iconic Air Max cushioning with modern style',
        price: 149.99,
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'nike',
        brand: 'Nike',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: true
    },
    {
        id: '6',
        name: 'Nike Dunk Low',
        description: 'Classic basketball-inspired sneaker',
        price: 119.99,
        images: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'nike',
        brand: 'Nike',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: false
    },
    {
        id: '7',
        name: 'Nike Air Force 1',
        description: 'Legendary streetwear icon',
        price: 109.99,
        images: [
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'nike',
        brand: 'Nike',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: true
    },
    
    // Shoes - Adidas
    {
        id: '8',
        name: 'Adidas Ultraboost',
        description: 'Premium running shoe with Boost cushioning',
        price: 179.99,
        images: [
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'adidas',
        brand: 'Adidas',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: true
    },
    {
        id: '8a',
        name: 'Adidas Samba',
        description: 'Classic soccer-inspired sneaker',
        price: 99.99,
        images: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'adidas',
        brand: 'Adidas',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: false
    },
    {
        id: '8b',
        name: 'Adidas Superstar',
        description: 'Iconic shell-toe design',
        price: 89.99,
        images: [
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'adidas',
        brand: 'Adidas',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: false
    },
    
    // Shoes - New Balance
    {
        id: '8c',
        name: 'NB100',
        description: 'A retro-inspired sneaker blending Y2K design with modern comfort',
        price: 59.99,
        images: [
            'https://i.pinimg.com/1200x/e6/62/ff/e662ff318b1d59006290a60c147c6d22.jpg',
            'https://i.pinimg.com/1200x/e0/b3/9b/e0b39b9b109497a39af72f57310267cc.jpg',
            'https://i.pinimg.com/1200x/dd/05/17/dd05172fd0e9dab7f8ba09e915965aba.jpg',
            'https://i.pinimg.com/736x/d9/5f/ed/d95fed64d56b9903ef03aee69642b5af.jpg'
        ],
        category: 'shoes',
        subcategory: 'new-balance',
        brand: 'New Balance',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: true
    },
    {
        id: '8d',
        name: 'New Balance 574',
        description: 'Classic heritage running shoe',
        price: 84.99,
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'new-balance',
        brand: 'New Balance',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: false
    },
    {
        id: '8e',
        name: 'New Balance 990',
        description: 'Premium Made in USA sneaker',
        price: 184.99,
        images: [
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'new-balance',
        brand: 'New Balance',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: true
    },
    
    // Shoes - Timberland
    {
        id: '8f',
        name: 'Timberland 6-Inch Boot',
        description: 'Iconic waterproof leather boot',
        price: 199.99,
        images: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'timberland',
        brand: 'Timberland',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: true
    },
    {
        id: '8g',
        name: 'Timberland Chukka',
        description: 'Versatile casual boot',
        price: 139.99,
        images: [
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'timberland',
        brand: 'Timberland',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: false
    },
    {
        id: '8h',
        name: 'Timberland Euro Hiker',
        description: 'Rugged hiking boot for urban adventures',
        price: 119.99,
        images: [
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop'
        ],
        category: 'shoes',
        subcategory: 'timberland',
        brand: 'Timberland',
        sizes: ['7', '8', '9', '10', '11', '12'],
        isNewIn: false
    },
    
    // Cargo Pants
    {
        id: '9',
        name: 'Tactical Cargo',
        description: 'Multi-pocket cargo pants with adjustable fit',
        price: 64.99,
        images: [
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&h=600&fit=crop'
        ],
        category: 'cargo-pants',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: true
    },
    {
        id: '10',
        name: 'Urban Utility',
        description: 'Sleek cargo design for urban explorers',
        price: 69.99,
        images: [
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop'
        ],
        category: 'cargo-pants',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    },
    {
        id: '11',
        name: 'Relaxed Cargo',
        description: 'Comfortable relaxed fit cargo pants',
        price: 59.99,
        images: [
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&h=600&fit=crop'
        ],
        category: 'cargo-pants',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    },
    {
        id: '12',
        name: 'Slim Cargo',
        description: 'Modern slim-fit cargo pants',
        price: 67.99,
        images: [
            'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop'
        ],
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
        images: [
            'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1548883354-a9a8e8e9d1c0?w=500&h=600&fit=crop'
        ],
        category: 'jeans',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    },
    {
        id: '14',
        name: 'Black Skinny Jeans',
        description: 'Sleek black skinny fit jeans',
        price: 57.99,
        images: [
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&h=600&fit=crop'
        ],
        category: 'jeans',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: true
    },
    {
        id: '15',
        name: 'Distressed Denim',
        description: 'Edgy distressed style jeans',
        price: 62.99,
        images: [
            'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1548883354-a9a8e8e9d1c0?w=500&h=600&fit=crop'
        ],
        category: 'jeans',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    },
    {
        id: '16',
        name: 'Straight Fit Jeans',
        description: 'Classic straight fit for everyday wear',
        price: 52.99,
        images: [
            'https://images.unsplash.com/photo-1548883354-a9a8e8e9d1c0?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop'
        ],
        category: 'jeans',
        sizes: ['28', '30', '32', '34', '36', '38'],
        isNewIn: false
    }
];

// Helper function to create product card HTML
function createProductCard(product) {
    const badgeHTML = product.isNewIn ? '<span class="product-badge">NEW</span>' : '';
    const brandHTML = product.brand ? `<span class="product-badge" style="background-color: var(--dark-elevated); color: var(--accent); margin-left: 0.5rem;">${product.brand}</span>` : '';
    const sizesHTML = product.sizes.map((size, index) => 
        `<button class="size-option ${index === 0 ? 'selected' : ''}" data-size="${size}">${size}</button>`
    ).join('');
    
    // Use first image as main image, or fallback to old 'image' property
    const mainImage = product.images ? product.images[0] : product.image;
    
    // Create image gallery thumbnails if multiple images exist
    const galleryHTML = product.images && product.images.length > 1 ? `
        <div class="image-gallery">
            ${product.images.map((img, index) => 
                `<img src="${img}" alt="${product.name} ${index + 1}" 
                     class="gallery-thumb ${index === 0 ? 'active' : ''}" 
                     onclick="changeProductImage('${product.id}', '${img}', ${index})">`
            ).join('')}
        </div>
    ` : '';
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${mainImage}" alt="${product.name}" class="product-image" id="img-${product.id}">
                ${galleryHTML}
            </div>
            <div class="product-info">
                ${badgeHTML}${brandHTML}
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

// Function to change product image in gallery
function changeProductImage(productId, imageUrl, index) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (!productCard) return;
    
    const mainImage = productCard.querySelector('.product-image');
    const thumbnails = productCard.querySelectorAll('.gallery-thumb');
    
    if (mainImage) {
        mainImage.src = imageUrl;
    }
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Initialize size selection handlers
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('size-option')) {
        const container = e.target.closest('.product-sizes');
        container.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});
