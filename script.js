/* ============================================================
   CONFIGURAÇÕES — edite aqui antes do deploy
   ============================================================ */

// ⬇ Cole aqui o link do checkout da Perfect Pay
const CHECKOUT_URL = 'https://go.perfectpay.com.br/PPU38CQCBSP';

// ⬇ Cole aqui a URL pública da foto da Mariana
//    Pode ser um link direto (CDN, Vercel, etc.) ou caminho local como './mariana.jpg'
const IMAGE_URL = '/mnt/user-data/uploads/WhatsApp_Image_2026-06-10_at_14_54_15.jpeg';

/* ============================================================
   APLICA FOTO DE FUNDO NO HERO
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
   PARALLAX SUAVE NA FOTO DO HERO (só desktop)
   Dá sensação de profundidade sem pesar no mobile
   ============================================================ */
if (window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches) {
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    if (heroBg) {
      heroBg.style.transform = `scale(1.03) translateY(${scrollY * 0.25}px)`;
    }
  }, { passive: true });
}

/* ============================================================
   TRACKING SIMPLES — log de clique nos botões (opcional)
   Remova se não for usar analytics
   ============================================================ */
document.querySelectorAll('[data-checkout]').forEach(function (el, index) {
  el.addEventListener('click', function () {
    console.log('[CF] Checkout click — botão #' + (index + 1));
    // Se usar GTM ou pixel, dispare aqui:
    // gtag('event', 'checkout_click', { button_position: index + 1 });
    // fbq('track', 'InitiateCheckout');
  });
});
