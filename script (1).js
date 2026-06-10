/* ============================================================
   CONFIGURAÇÕES — edite aqui antes do deploy
   ============================================================ */

// ⬇ Link do checkout da Perfect Pay
const CHECKOUT_URL = 'https://go.perfectpay.com.br/PPU38CQCBSP';

// ⬇ Foto da Mariana — arquivo deve estar na RAIZ do repositório Git
//    Nome exato do arquivo: WhatsApp Image 2026-06-10 at 14.54.15.jpeg
//    Espaços viram %20 para o browser carregar corretamente
const IMAGE_URL = 'WhatsApp%20Image%202026-06-10%20at%2014.54.15.jpeg';

/* ============================================================
   APLICA FOTO NO HERO (reforço via JS, o style inline já resolve)
   ============================================================ */
const heroBg = document.getElementById('heroBg');
if (heroBg && IMAGE_URL) {
  heroBg.style.backgroundImage = `url('${IMAGE_URL}')`;
}

/* ============================================================
   APONTA TODOS OS BOTÕES [data-checkout] PARA O CHECKOUT
   ============================================================ */
document.querySelectorAll('[data-checkout]').forEach(function (el) {
  el.setAttribute('href', CHECKOUT_URL);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener noreferrer');
});

/* ============================================================
   PARALLAX SUAVE NO HERO — só desktop
   ============================================================ */
if (window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches) {
  window.addEventListener('scroll', function () {
    if (heroBg) {
      heroBg.style.transform = `scale(1.03) translateY(${window.scrollY * 0.25}px)`;
    }
  }, { passive: true });
}

/* ============================================================
   TRACKING — log de clique (substitua pelos seus pixels/GTM)
   ============================================================ */
document.querySelectorAll('[data-checkout]').forEach(function (el, i) {
  el.addEventListener('click', function () {
    console.log('[CF] Checkout click — botão #' + (i + 1));
    // gtag('event', 'checkout_click', { button_position: i + 1 });
    // fbq('track', 'InitiateCheckout');
  });
});
