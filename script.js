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

// Esegui le animazioni immediatamente
document.addEventListener('DOMContentLoaded', function() {
    // Esegui subito le animazioni
    setTimeout(handleScrollAnimations, 10);
    
    // Rimuovi l'evento scroll per evitare calcoli inutili
    window.removeEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(handleScrollAnimations, 30);
    });
}); 