// Shop page functionality
let currentCategory = 'all';
let currentSubcategory = 'all';

// Get category and subcategory from URL parameter
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        category: urlParams.get('category') || 'all',
        subcategory: urlParams.get('subcategory') || 'all'
    };
}

// Display products based on category and subcategory
function displayProducts(category = 'all', subcategory = 'all') {
    const container = document.getElementById('shopProducts');
    const categoryTitle = document.getElementById('categoryTitle');
    
    if (!container) return;
    
    let filteredProducts = products;
    
    // Filter by category
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    // Filter by subcategory
    if (subcategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory);
    }
    
    // Update title based on category and subcategory
    const categoryNames = {
        'all': 'Browse our collection of premium streetwear',
        'tshirts': 'Premium T-Shirts Collection',
        'shoes': 'Stylish Footwear Collection',
        'cargo-pants': 'Tactical Cargo Pants Collection',
        'jeans': 'Classic Denim Collection'
    };
    
    const subcategoryNames = {
        'nike': 'Nike Collection',
        'adidas': 'Adidas Collection',
        'new-balance': 'New Balance Collection',
        'timberland': 'Timberland Collection'
    };
    
    if (categoryTitle) {
        if (subcategory !== 'all') {
            categoryTitle.textContent = subcategoryNames[subcategory] || categoryNames[category] || categoryNames['all'];
        } else {
            categoryTitle.textContent = categoryNames[category] || categoryNames['all'];
        }
    }
    
    if (filteredProducts.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--text-secondary);">No products found in this category.</p>';
        return;
    }
    
    container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Show/hide subcategory filters
    updateSubcategoryFilters(category);
}

// Update subcategory filters visibility
function updateSubcategoryFilters(category) {
    const subcategoryContainer = document.getElementById('subcategoryFilters');
    if (!subcategoryContainer) return;
    
    if (category === 'shoes') {
        subcategoryContainer.style.display = 'flex';
    } else {
        subcategoryContainer.style.display = 'none';
        currentSubcategory = 'all';
    }
}

// Handle filter button clicks
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all category buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and display products
            const category = this.getAttribute('data-category');
            currentCategory = category;
            currentSubcategory = 'all'; // Reset subcategory when changing main category
            displayProducts(category, 'all');
            
            // Reset subcategory buttons
            const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
            subcategoryButtons.forEach(btn => btn.classList.remove('active'));
            const allSubBtn = document.querySelector('.subcategory-btn[data-subcategory="all"]');
            if (allSubBtn) allSubBtn.classList.add('active');
            
            // Update URL without reloading page
            const newUrl = category === 'all' 
                ? 'shop.html' 
                : `shop.html?category=${category}`;
            window.history.pushState({category, subcategory: 'all'}, '', newUrl);
        });
    });
    
    // Handle subcategory button clicks
    const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
    subcategoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all subcategory buttons
            subcategoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get subcategory and display products
            const subcategory = this.getAttribute('data-subcategory');
            currentSubcategory = subcategory;
            displayProducts(currentCategory, subcategory);
            
            // Update URL without reloading page
            const newUrl = subcategory === 'all'
                ? `shop.html?category=${currentCategory}`
                : `shop.html?category=${currentCategory}&subcategory=${subcategory}`;
            window.history.pushState({category: currentCategory, subcategory}, '', newUrl);
        });
    });
}

// Initialize shop page
function initShop() {
    // Get category and subcategory from URL
    const urlParams = getCategoryFromURL();
    currentCategory = urlParams.category;
    currentSubcategory = urlParams.subcategory;
    
    // Set active filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        const btnCategory = btn.getAttribute('data-category');
        if (btnCategory === currentCategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Set active subcategory button
    const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
    subcategoryButtons.forEach(btn => {
        const btnSubcategory = btn.getAttribute('data-subcategory');
        if (btnSubcategory === currentSubcategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Display products for the selected category and subcategory
    displayProducts(currentCategory, currentSubcategory);
    
    // Setup filter button handlers
    setupFilterButtons();
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state) {
        currentCategory = event.state.category || 'all';
        currentSubcategory = event.state.subcategory || 'all';
        displayProducts(currentCategory, currentSubcategory);
        
        // Update active filter button
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            const btnCategory = btn.getAttribute('data-category');
            btn.classList.toggle('active', btnCategory === currentCategory);
        });
        
        // Update active subcategory button
        const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
        subcategoryButtons.forEach(btn => {
            const btnSubcategory = btn.getAttribute('data-subcategory');
            btn.classList.toggle('active', btnSubcategory === currentSubcategory);
        });
    }
});

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShop);
} else {
    initShop();
}
