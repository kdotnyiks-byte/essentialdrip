// Main JavaScript file

// Hero Background Slideshow
function initHeroSlideshow() {
    // Background slideshow (if exists)
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        setInterval(nextSlide, 5000);
    }
    
    // Right-side slideshow (if exists)
    const slidesRight = document.querySelectorAll('.slide-right');
    if (slidesRight.length > 0) {
        let currentSlideRight = 0;
        
        function nextSlideRight() {
            slidesRight[currentSlideRight].classList.remove('active');
            currentSlideRight = (currentSlideRight + 1) % slidesRight.length;
            slidesRight[currentSlideRight].classList.add('active');
        }
        
        setInterval(nextSlideRight, 5000);
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animateElements = document.querySelectorAll('.product-card, .feature-card, .category-card, .section-title');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Enhanced Navbar on Scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 212, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.boxShadow = '';
        }
        
        lastScroll = currentScroll;
    });
}

// Nike Swoosh Cursor
document.addEventListener('DOMContentLoaded', function() {
    const swooshCursor = document.getElementById('swooshCursor');
    
    if (swooshCursor) {
        document.addEventListener('mousemove', function(e) {
            swooshCursor.style.left = (e.clientX - 12) + 'px';
            swooshCursor.style.top = (e.clientY - 12) + 'px';
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Load new in products on homepage
    const newInProducts = document.getElementById('newInProducts');
    if (newInProducts && typeof products !== 'undefined') {
        const newProducts = products.filter(p => p.isNewIn).slice(0, 4);
        newInProducts.innerHTML = newProducts.map(product => createProductCard(product)).join('');
    }
    
    // Initialize features
    initHeroSlideshow();
    initScrollReveal();
    initNavbarScroll();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
