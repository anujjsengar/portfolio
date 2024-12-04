// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = '#222';
        } else {
            navbar.style.background = '#333';
        }
    }
});

// Add animation to skills
const skillItems = document.querySelectorAll('.skills li');
skillItems.forEach((item, index) => {
    item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('#navbar .container');
    if (navbar) {
        const menuBtn = document.createElement('button');
        menuBtn.innerHTML = '☰';
        menuBtn.classList.add('menu-btn');
        navbar.appendChild(menuBtn);

        menuBtn.addEventListener('click', () => {
            const navUl = document.querySelector('#navbar ul');
            if (navUl) {
                navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
});

// Add this CSS to your styles.css file
/*
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
*/

// Add this CSS to your styles.css file
/*
.menu-btn {
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
}

@media (max-width: 768px) {
    .menu-btn {
        display: block;
    }

    #navbar ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #333;
    }

    #navbar ul li {
        margin: 0;
        text-align: center;
    }

    #navbar ul li a {
        display: block;
        padding: 1rem;
    }
}
*/

