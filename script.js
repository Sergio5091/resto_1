document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Changement d'onglet du menu
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuItemsContainer = document.getElementById('meals');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Générer le contenu du menu en fonction de l'onglet sélectionné
            const category = this.getAttribute('data-category');
            generateMenuItems(category);
        });
    });
    
    // Générer les éléments du menu
    function generateMenuItems(category) {
        let items = [];
        
        if (category === 'meals') {
            items = [
                { name: 'Steak Frites', price: '18.50', image: 'Steak_frites.jpg' },
                { name: 'Poulet Rôti', price: '16.90', image: 'poulet-roti.jpeg' },
                { name: 'Salade César', price: '12.50', image: 'salade.jpeg' },
                { name: 'Boeuf Bourguignon', price: '20.00', image: 'piron.jpg' },
                { name: 'Risotto aux Champignons', price: '15.90', image: 'plat1.jpg' },
               
            ];
        } else if (category === 'desserts') {
            items = [
                { name: 'Crème Brûlée', price: '7.50', image: 'cremebrule.jpeg' },
                { name: 'Profiteroles', price: '8.50', image: 'gateu.jpeg' },
                { name: 'Île Flottante', price: '7.00', image: 'glace.jpeg' },
                { name: 'Fondant au Chocolat', price: '7.90', image: 'fress.jpeg' },
               
            ];
        } else if (category === 'drinks') {
            items = [
                { name: 'Jus d\'Orange', price: '4.50', image: 'citron.jpeg' },
                { name: 'Limonade Maison', price: '5.00', image: 'jus2.jpeg' },
                { name: 'Thé Glacé', price: '4.00', image: 'baobab.jpeg' },
                { name: 'Smoothie Fruits Rouges', price: '6.50', image: 'jem.jpeg' },
                { name: 'Cocktail Sans Alcool', price: '7.00', image: 'mague.jpeg' },
               
            ];
        }
        
        let html = '';
        items.forEach(item => {
            html += `
                <div class="menu-item">
                    <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                    <div class="menu-item-info">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <p class="menu-item-price">${item.price} €</p>
                        <a href="https://wa.me/33612345678?text=Je%20souhaite%20commander%20${encodeURIComponent(item.name)}%20pour%20${item.price}%20€" class="menu-item-btn" target="_blank">
                            Commander
                        </a>
                    </div>
                </div>
            `;
        });
        
        menuItemsContainer.innerHTML = html;
    }
    
    // Générer les témoignages
    function generateTestimonials() {
        const testimonials = [
            {
                name: 'Marie D.',
                text: 'Le meilleur restaurant de la ville ! Les plats sont toujours excellents et le service impeccable.',
                rating: 5,
                image: 'https://randomuser.me/api/portraits/women/43.jpg'
            },
            {
                name: 'Jean P.',
                text: 'Une expérience culinaire exceptionnelle. Le boeuf bourguignon est à tomber par terre !',
                rating: 4,
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
            },
            {
                name: 'Sophie L.',
                text: 'Ambiance chaleureuse et plats délicieux. Je recommande vivement la crème brûlée.',
                rating: 5,
                image: 'https://randomuser.me/api/portraits/women/65.jpg'
            }
        ];
        
        const testimonialsContainer = document.querySelector('.testimonials-grid');
        let html = '';
        
        testimonials.forEach(testimonial => {
            let stars = '';
            for (let i = 0; i < testimonial.rating; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            html += `
                <div class="testimonial-card">
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div class="testimonial-author">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-author-img">
                        <div class="testimonial-author-info">
                            <h4>${testimonial.name}</h4>
                            <div class="testimonial-rating">
                                ${stars}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        testimonialsContainer.innerHTML = html;
    }
    
    // Animation du header au scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Fermer le menu mobile quand on clique sur un lien
    const navLinksItems = document.querySelectorAll('.nav-link');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Générer le contenu initial
    generateMenuItems('meals');
    generateTestimonials();
    
    // Animation des éléments au scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.advantage-card, .menu-item, .testimonial-card, .gallery-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Ajouter les styles initiaux pour l'animation
    document.querySelectorAll('.advantage-card, .menu-item, .testimonial-card, .gallery-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Exécuter une première fois au chargement
});