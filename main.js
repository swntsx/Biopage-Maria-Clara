
/* =========================================
   SCROLL REVEAL - INTERSECTION OBSERVER
========================================= */

(() => {
    'use strict';

    // Seleciona todos os elementos que receberão animação.
    const elements = document.querySelectorAll('.reveal');

    // Não executa se não houver elementos.
    if (!elements.length) return;

    // Ativa os estilos de animação.
    document.documentElement.classList.add('js');

    // Respeita a preferência do usuário por menos movimento.
    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
        elements.forEach(element => {
            element.classList.add('visible');
        });

        return;
    }

    // Fallback para navegadores sem suporte.
    if (!('IntersectionObserver' in window)) {
        elements.forEach(element => {
            element.classList.add('visible');
        });

        return;
    }

    // Configura o observador.
    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            // Verifica se o elemento entrou na área visível.
            if (entry.isIntersecting) {

                // Ativa a animação.
                entry.target.classList.add('visible');

                // Para de observar após a primeira animação.
                observer.unobserve(entry.target);
            }
        });

    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    // Registra todos os elementos.
    elements.forEach(element => {
        observer.observe(element);
    });

})();
