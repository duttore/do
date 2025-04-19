// Sostituisci completamente la funzione handleScrollAnimations
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, ' +
        '.service-card, .issue-card, .pricing-card, .problem-card, ' +
        '.social-link.facebook'
    );
    
    animatedElements.forEach(element => {
        // Rendi immediatamente visibili gli elementi
        element.classList.add('visible');
    });
}

// Gestione Toggle Indice Contenuti Mobile
function initMobileTOC() {
    const tocToggles = document.querySelectorAll('.mobile-toc-toggle');
    
    tocToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                content.classList.add('show');
            }
        });
    });
    
    // Mostra l'indice su desktop per default
    if (window.innerWidth > 768) {
        document.querySelectorAll('.mobile-toc-content').forEach(content => {
            content.classList.add('show');
        });
    }
}

// Esegui le animazioni immediatamente
document.addEventListener('DOMContentLoaded', function() {
    // Esegui subito le animazioni
    setTimeout(handleScrollAnimations, 10);
    
    // Inizializza il toggle per l'indice mobile
    initMobileTOC();
    
    // Rimuovi l'evento scroll per evitare calcoli inutili
    window.removeEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(handleScrollAnimations, 30);
    });
}); 