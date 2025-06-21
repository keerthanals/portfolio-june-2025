// Smooth scrolling for navigation links
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

// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
    // Projects button in hero section
    const projectsBtn = document.querySelector('.btn-primary');
    if (projectsBtn) {
        projectsBtn.addEventListener('click', function() {
            document.querySelector('#projects').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // LinkedIn button
    const linkedinBtn = document.querySelector('.btn-secondary');
    if (linkedinBtn) {
        linkedinBtn.addEventListener('click', function() {
            window.open('https://linkedin.com', '_blank');
        });
    }

    // View Project buttons
    const viewProjectBtns = document.querySelectorAll('.btn-outline');
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add your project view logic here
            console.log('View project clicked');
        });
    });
});

// Add scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation check
    setTimeout(animateOnScroll, 100);
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects for better interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// confetti
// Start interval-based confetti from both sides every 10 seconds
function launchSideConfetti() {
    setInterval(() => {
        // Left side burst
        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 }
        });

        // Right side burst
        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 }
        });
    }, 10000); // 10 seconds interval
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    launchSideConfetti();
});

//rain effect
const projectSection = document.querySelector('#projects');

window.addEventListener('scroll', function () {
    const rect = projectSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        confetti({
            particleCount: 200,
            spread: 160,
            origin: { y: 0 },
        });
    }
}, { once: true }); // Only once per visit



