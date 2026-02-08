document.addEventListener('DOMContentLoaded', () => {
    
    // --- MENU MOBILE ---
    const mobileBtn = document.querySelector('.mobile-menu-icon');
    const navList = document.querySelector('.nav-list');

    mobileBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Alterna ícone entre menu e X (opcional)
        const icon = mobileBtn.querySelector('i');
        if(navList.classList.contains('active')) {
            icon.classList.replace('ph-list', 'ph-x');
        } else {
            icon.classList.replace('ph-x', 'ph-list');
        }
    });

    // Fecha menu ao clicar em um link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileBtn.querySelector('i').classList.replace('ph-x', 'ph-list');
        });
    });

    // --- ACCORDION FAQ ---
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Fecha outros abertos (efeito sanfona única)
            accordions.forEach(item => {
                if (item !== acc) {
                    item.classList.remove('active');
                }
            });

            // Alterna o atual
            acc.classList.toggle('active');
        });
    });

    // --- ANIMAÇÃO AO SCROLL (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: parar de observar após animar
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});