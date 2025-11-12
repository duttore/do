// Gestione Modal Contatti - Viene eseguito su tutte le pagine
document.addEventListener('DOMContentLoaded', function() {
    const contattiLink = document.getElementById('contatti-link');
    const contattiModal = document.getElementById('contatti-modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (!contattiLink || !contattiModal) {
        console.warn('Elemento contatti-link o contatti-modal non trovato');
        return;
    }
    
    // Apri modal al click del bottone Contatti
    contattiLink.addEventListener('click', function(e) {
        e.preventDefault();
        contattiModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    // Chiudi modal al click della X
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            contattiModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Chiudi modal al click fuori (sul background)
    contattiModal.addEventListener('click', function(e) {
        if (e.target === contattiModal) {
            contattiModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Chiudi modal quando premi ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contattiModal.classList.contains('show')) {
            contattiModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});

