// CrypGo Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initHeader();
    initScrollToTop();
    initAnimations();
    initModals();
    initMobileMenu();
    initCardSlider();
});

// Header functionality
function initHeader() {
    const header = document.getElementById('header');
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animation functionality
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add animation classes to elements
    addAnimationClasses();
}

function addAnimationClasses() {
    // Hero section - No animations, always visible
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    // Ensure hero elements are always visible
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateX(0)';
    }
    
    if (heroImage) {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
    }
    
    // Work section - No animations, always visible
    const workContent = document.querySelector('.work-content');
    const workImage = document.querySelector('.work-image');
    
    // Ensure work elements are always visible
    if (workContent) {
        workContent.style.opacity = '1';
        workContent.style.transform = 'translateX(0)';
    }
    
    if (workImage) {
        workImage.style.opacity = '1';
        workImage.style.transform = 'translateX(0)';
    }
    
    // Timeline animations - Make immediately visible
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        // Ensure timeline items are always visible
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        // Remove animation classes to prevent hiding
        item.classList.remove('fade-in');
    });
    
    // Portfolio animations - Make immediately visible
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        // Ensure portfolio items are always visible
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        // Remove animation classes to prevent hiding
        item.classList.remove('fade-in');
    });
    
    // Perks animations
    const perkItems = document.querySelectorAll('.perk-item');
    perkItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Modal functionality
function initModals() {
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                const modalInstance = bootstrap.Modal.getInstance(modal);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }
        });
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                const modalInstance = bootstrap.Modal.getInstance(modal);
                if (modalInstance) {
                    modalInstance.hide();
                }
            });
        }
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMobileMenu();
        });
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    } else {
        mobileMenu.classList.add('active');
        body.style.overflow = 'hidden';
    }
}

// Card slider functionality
function initCardSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    if (!sliderTrack) return;
    
    // Clone cards for infinite scroll effect
    const cards = sliderTrack.querySelectorAll('.slider-card');
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
}

// Modal open functions
function openSignInModal() {
    const modal = new bootstrap.Modal(document.getElementById('signInModal'));
    modal.show();
}

function openSignUpModal() {
    const modal = new bootstrap.Modal(document.getElementById('signUpModal'));
    modal.show();
}

function openContactModal() {
    const modal = new bootstrap.Modal(document.getElementById('contactModal'));
    modal.show();
}

function openBuyModal() {
    const modal = new bootstrap.Modal(document.getElementById('buyModal'));
    modal.show();
}

function openSellModal() {
    const modal = new bootstrap.Modal(document.getElementById('sellModal'));
    modal.show();
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    // Sign In form
    const signInForm = document.querySelector('#signInModal form');
    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your sign in logic here
            console.log('Sign In submitted');
            const modal = bootstrap.Modal.getInstance(document.getElementById('signInModal'));
            modal.hide();
        });
    }
    
    // Sign Up form
    const signUpForm = document.querySelector('#signUpModal form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your sign up logic here
            console.log('Sign Up submitted');
            const modal = bootstrap.Modal.getInstance(document.getElementById('signUpModal'));
            modal.hide();
        });
    }
    
    // Buy Crypto form
    const buyForm = document.querySelector('#buyModal form');
    if (buyForm) {
        buyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your buy crypto logic here
            console.log('Buy Crypto submitted');
            const modal = bootstrap.Modal.getInstance(document.getElementById('buyModal'));
            modal.hide();
        });
    }
    
    // Sell Crypto form
    const sellForm = document.querySelector('#sellModal form');
    if (sellForm) {
        sellForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your sell crypto logic here
            console.log('Sell Crypto submitted');
            const modal = bootstrap.Modal.getInstance(document.getElementById('sellModal'));
            modal.hide();
        });
    }
    
    // Contact form
    const contactForm = document.querySelector('#contactModal form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your contact form logic here
            console.log('Contact form submitted');
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
    
    // Subscribe form
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        const subscribeBtn = subscribeForm.querySelector('.btn');
        const emailInput = subscribeForm.querySelector('input[type="email"]');
        
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (emailInput.value) {
                // Add your subscribe logic here
                console.log('Subscribe submitted:', emailInput.value);
                emailInput.value = '';
                alert('Thank you for subscribing!');
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Crypto price simulation (for demo purposes)
function updateCryptoPrices() {
    const priceElements = document.querySelectorAll('.card-price');
    const changeElements = document.querySelectorAll('.card-change');
    
    const cryptos = [
        { name: 'Bitcoin', basePrice: 45234.56 },
        { name: 'Ethereum', basePrice: 3234.56 },
        { name: 'Solana', basePrice: 98.45 },
        { name: 'Litecoin', basePrice: 67.89 }
    ];
    
    priceElements.forEach((element, index) => {
        if (index < cryptos.length) {
            const crypto = cryptos[index];
            const change = (Math.random() - 0.5) * 0.1; // ±5% change
            const newPrice = crypto.basePrice * (1 + change);
            
            element.textContent = `$${newPrice.toFixed(2)}`;
            
            if (changeElements[index]) {
                const changePercent = (change * 100).toFixed(2);
                const isPositive = change >= 0;
                
                changeElements[index].textContent = `${isPositive ? '+' : ''}${changePercent}%`;
                changeElements[index].className = `card-change ${isPositive ? 'positive' : 'negative'}`;
            }
        }
    });
}

// Update crypto prices every 30 seconds
setInterval(updateCryptoPrices, 30000);

// Initialize crypto prices on load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateCryptoPrices, 1000);
    
    // Check image loading
    checkImageLoading();
});

// Function to check if images are loading correctly
function checkImageLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            console.log('Image loaded successfully:', img.src);
        });
        
        img.addEventListener('error', function() {
            console.error('Image failed to load:', img.src);
            // Add a fallback or placeholder
            img.style.display = 'none';
        });
    });
}

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add loading class to body
document.body.classList.add('loading');

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Handle scroll events here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body.loading {
        overflow: hidden;
    }
    
    body.loaded {
        overflow: auto;
    }
    
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--darkmode);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    body.loaded .loading-overlay {
        opacity: 0;
        pointer-events: none;
    }
    
    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 3px solid var(--dark-grey);
        border-top: 3px solid var(--primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(loadingStyle);

// Add loading overlay
const loadingOverlay = document.createElement('div');
loadingOverlay.className = 'loading-overlay';
loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
document.body.appendChild(loadingOverlay);

// Remove loading overlay after page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        document.body.classList.add('loaded');
        setTimeout(() => {
            if (loadingOverlay.parentNode) {
                loadingOverlay.parentNode.removeChild(loadingOverlay);
            }
        }, 500);
    }, 1000);
}); 