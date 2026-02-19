/**
 * IDECS - Climatización inteligente
 * Animación cinematográfica del hero con GSAP.
 */

(function () {
  'use strict';

  function initHero() {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const hero = document.querySelector('.hero');
    if (!hero) return;

    const image      = hero.querySelector('.hero__image');
    const panelL     = hero.querySelector('.hero__reveal-panel--left');
    const panelR     = hero.querySelector('.hero__reveal-panel--right');
    const revealLogo = hero.querySelector('.hero__reveal-logo-img');
    const reveal     = hero.querySelector('.hero__reveal');
    const glows      = hero.querySelectorAll('.hero__overlay-glow');
    const frame      = hero.querySelector('.hero__frame');
    const title      = hero.querySelector('.hero__title');
    const cta        = hero.querySelector('.hero__cta');
    const intro      = hero.querySelector('.hero__intro');
    const header     = document.querySelector('.header');

    gsap.set(image, { scale: 1.3 });
    gsap.set([title, cta, intro], { opacity: 0, y: 0 });
    gsap.set(frame, { opacity: 0 });
    gsap.set(glows, { opacity: 0 });
    gsap.set(revealLogo, { opacity: 0, scale: 0.7 });
    if (header) gsap.set(header, { opacity: 0, y: -20 });

    const tl = gsap.timeline();

    tl
      // 1. Logo aparece en el centro con fade + scale
      .to(revealLogo, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, 0.3)

      // 2. Logo brilla un instante (pulso sutil)
      .to(revealLogo, {
        filter: 'brightness(1.4)',
        duration: 0.4,
        ease: 'power1.in'
      }, 1.1)

      // 3. Logo escala hacia arriba y se desvanece
      .to(revealLogo, {
        opacity: 0,
        scale: 1.8,
        filter: 'brightness(2)',
        duration: 0.8,
        ease: 'power3.in'
      }, 1.5)

      // 4. Paneles se abren justo cuando el logo empieza a desvanecerse
      .to(panelL, {
        xPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut'
      }, 1.7)
      .to(panelR, {
        xPercent: 100,
        duration: 1.2,
        ease: 'power4.inOut'
      }, 1.7)

      // 5. Imagen hace zoom-out dramático
      .to(image, {
        scale: 1,
        duration: 2.2,
        ease: 'power2.out'
      }, 1.9)

      // 6. Header baja suavemente
      .to(header, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 2.4)

      // 7. Aurora glows aparecen
      .to(glows, {
        opacity: 1,
        duration: 1.5,
        stagger: 0.15,
        ease: 'power1.out'
      }, 2.5)

      // 8. Frame se dibuja
      .fromTo(frame, { opacity: 0 }, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }, 2.6)

      // 9. Contenido entra en cascada
      .fromTo(title, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out'
      }, 2.8)

      .fromTo(cta, { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
      }, 3.2)

      .fromTo(intro, { opacity: 0, y: 24 }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
      }, 3.4)

      // 10. Ocultar el contenedor reveal para no bloquear interacción
      .set(reveal, { display: 'none' });
  }

  function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    var duration = 0.6;
    var ease = 'power3.out';
    var y = 36;

    // Problema
    var problemInner = document.querySelector('.problem__inner');
    if (problemInner) {
      gsap.set(problemInner, { opacity: 0, y: y });
      gsap.to(problemInner, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: '.problem',
          start: 'top 85%',
          once: true
        }
      });
    }

    // Servicios: título y luego cards con stagger
    var servicesTitle = document.querySelector('.services__title');
    var servicesCards = document.querySelectorAll('.services__card');
    if (servicesTitle) {
      gsap.set(servicesTitle, { opacity: 0, y: y });
      gsap.to(servicesTitle, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: '.services',
          start: 'top 82%',
          once: true
        }
      });
    }
    if (servicesCards.length) {
      gsap.set(servicesCards, { opacity: 0, y: y });
      gsap.to(servicesCards, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.services__grid',
          start: 'top 88%',
          once: true
        }
      });
    }
    var servicesCta = document.querySelector('.services__cta');
    if (servicesCta) {
      gsap.set(servicesCta, { opacity: 0, y: y });
      gsap.to(servicesCta, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: '.services__cta',
          start: 'top 90%',
          once: true
        }
      });
    }

    // Nosotros: header y luego body (commitment + values)
    var aboutHeader = document.querySelector('.about__header');
    var aboutCommitment = document.querySelectorAll('.about__commitment-block');
    var aboutValues = document.querySelectorAll('.about__value');
    if (aboutHeader) {
      gsap.set(aboutHeader, { opacity: 0, y: y });
      gsap.to(aboutHeader, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: '.about',
          start: 'top 82%',
          once: true
        }
      });
    }
    if (aboutCommitment.length) {
      gsap.set(aboutCommitment, { opacity: 0, y: y * 0.8 });
      gsap.to(aboutCommitment, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.about__body',
          start: 'top 88%',
          once: true
        }
      });
    }
    if (aboutValues.length) {
      gsap.set(aboutValues, { opacity: 0, y: y * 0.8 });
      gsap.to(aboutValues, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        stagger: 0.06,
        scrollTrigger: {
          trigger: '.about__values-grid',
          start: 'top 90%',
          once: true
        }
      });
    }

    // Galería: header y luego items con stagger
    var galleryHeader = document.querySelector('.gallery__header');
    var galleryItems = document.querySelectorAll('.gallery__item');
    if (galleryHeader) {
      gsap.set(galleryHeader, { opacity: 0, y: y });
      gsap.to(galleryHeader, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: '.gallery',
          start: 'top 82%',
          once: true
        }
      });
    }
    if (galleryItems.length) {
      gsap.set(galleryItems, { opacity: 0, y: y });
      gsap.to(galleryItems, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.gallery__grid',
          start: 'top 88%',
          once: true
        }
      });
    }

    // Testimonios: header y luego cards con stagger
    var testimonialsHeader = document.querySelector('.testimonials__header');
    var testimonialsCards = document.querySelectorAll('.testimonials__card');
    if (testimonialsHeader) {
      gsap.set(testimonialsHeader, { opacity: 0, y: y });
      gsap.to(testimonialsHeader, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: '.testimonials',
          start: 'top 82%',
          once: true
        }
      });
    }
    if (testimonialsCards.length) {
      gsap.set(testimonialsCards, { opacity: 0, y: y });
      gsap.to(testimonialsCards, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.testimonials__grid',
          start: 'top 88%',
          once: true
        }
      });
    }

    // Contacto: header y luego contenido (form + imagen)
    var contactHeader = document.querySelector('.contact__header');
    var contactFormWrap = document.querySelector('.contact__form-wrap');
    var contactMedia = document.querySelector('.contact__media');
    if (contactHeader) {
      gsap.set(contactHeader, { opacity: 0, y: y });
      gsap.to(contactHeader, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 82%',
          once: true
        }
      });
    }
    if (contactFormWrap && contactMedia) {
      gsap.set([contactFormWrap, contactMedia], { opacity: 0, y: y });
      gsap.to([contactFormWrap, contactMedia], {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.contact__content',
          start: 'top 88%',
          once: true
        }
      });
    } else if (contactFormWrap) {
      gsap.set(contactFormWrap, { opacity: 0, y: y });
      gsap.to(contactFormWrap, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: '.contact__content',
          start: 'top 88%',
          once: true
        }
      });
    }

    // Footer
    var footerInner = document.querySelector('.footer__inner');
    if (footerInner) {
      gsap.set(footerInner, { opacity: 0, y: y * 0.6 });
      gsap.to(footerInner, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 92%',
          once: true
        }
      });
    }
  }

  function initServiceModal() {
    var modal = document.getElementById('service-modal');
    if (!modal) return;

    var backdrop = modal.querySelector('.modal__backdrop');
    var closeBtn = modal.querySelector('.modal__close');
    var panes = modal.querySelectorAll('.modal__pane');
    var ctas = document.querySelectorAll('.services__card-cta[data-service]');

    function openModal(serviceId) {
      panes.forEach(function (pane) {
        pane.classList.remove('is-visible');
        pane.hidden = true;
        if (pane.getAttribute('data-service') === serviceId) {
          pane.classList.add('is-visible');
          pane.hidden = false;
        }
      });
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    ctas.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(btn.getAttribute('data-service'));
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    modal.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        initHero();
        initScrollAnimations();
        initServiceModal();
      });
    } else {
      initHero();
      initScrollAnimations();
      initServiceModal();
    }
  }

  init();
})();
