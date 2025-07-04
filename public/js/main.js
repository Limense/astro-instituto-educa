// Script para animaciones y funcionalidad interactiva
document.addEventListener('DOMContentLoaded', function() {
  // Función para animations on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Smooth scroll para enlaces internos
  function smoothScrollLinks() {
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
  }
  
  // Navbar sticky behavior
  function stickyNavbar() {
    const navbar = document.querySelector('header');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          navbar.classList.add('bg-white', 'shadow-lg');
          navbar.classList.remove('bg-transparent');
        } else {
          navbar.classList.add('bg-transparent');
          navbar.classList.remove('bg-white', 'shadow-lg');
        }
      });
    }
  }
  
  // Mobile menu toggle
  function mobileMenuToggle() {
    const menuButton = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Animate hamburger icon
        const spans = menuButton.querySelectorAll('span');
        spans.forEach(span => {
          span.classList.toggle('rotate-45');
          span.classList.toggle('opacity-0');
        });
      });
    }
  }
  
  // Form validation
  function formValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-red-500');
            input.classList.remove('border-gray-300');
          } else {
            input.classList.remove('border-red-500');
            input.classList.add('border-gray-300');
          }
        });
        
        if (!isValid) {
          e.preventDefault();
          alert('Por favor, complete todos los campos obligatorios.');
        }
      });
    });
  }
  
  // Parallax effect for hero section
  function parallaxEffect() {
    const hero = document.querySelector('.hero-parallax');
    if (hero) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
      });
    }
  }
  
  // Counter animation
  function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-counter'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              counter.textContent = Math.floor(current);
            }, 16);
            observer.unobserve(counter);
          }
        });
      });
      
      observer.observe(counter);
    });
  }
  
  // Lazy loading images
  function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('loading-skeleton');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      img.classList.add('loading-skeleton');
      imageObserver.observe(img);
    });
  }
  
  // Initialize all functions
  animateOnScroll();
  smoothScrollLinks();
  stickyNavbar();
  mobileMenuToggle();
  formValidation();
  parallaxEffect();
  animateCounters();
  lazyLoadImages();
  
  // Add scroll reveal classes to elements
  const elementsToReveal = document.querySelectorAll('.card, .testimonial, .news-item, .program-card');
  elementsToReveal.forEach(element => {
    element.classList.add('scroll-reveal');
  });
});
