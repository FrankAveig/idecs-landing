/**
 * IDECS - Botón flotante WhatsApp
 * Desktop: abre WhatsApp Web. Móvil: abre la app de WhatsApp.
 */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '593995611689'; // +593 99 561 1689 sin espacios ni +
  var URL_APP = 'https://wa.me/' + WHATSAPP_NUMBER;
  var URL_WEB = 'https://web.whatsapp.com/send?phone=' + WHATSAPP_NUMBER;

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || window.innerWidth < 768;
  }

  function initWhatsApp() {
    var link = document.getElementById('whatsapp-float');
    if (!link) return;

    link.href = isMobile() ? URL_APP : URL_WEB;

    link.addEventListener('click', function () {
      // Opcional: añadir texto predefinido con ?text= encoded
      // link.href ya tiene la URL correcta
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhatsApp);
  } else {
    initWhatsApp();
  }
})();
