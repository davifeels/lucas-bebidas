/**
 * LUCAS BEBIDAS — BRAND GUIDE INTERATIVO (JS)
 * Identidade: Antigravity (Advanced Branding & UI/UX Specialist)
 */

document.addEventListener('DOMContentLoaded', () => {
  initPaletteCopy();
});

function initPaletteCopy() {
  const cards = document.querySelectorAll('.color-swatch-card');
  const toast = document.getElementById('toastNotification');

  cards.forEach(card => {
    card.addEventListener('click', async () => {
      const hex = card.getAttribute('data-hex');
      const name = card.getAttribute('data-name') || hex;

      if (!hex) return;

      try {
        await navigator.clipboard.writeText(hex);
        showToast(`Código ${hex} (${name}) copiado!`);
      } catch (err) {
        // Fallback
        const tempInput = document.createElement('textarea');
        tempInput.value = hex;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Código ${hex} copiado!`);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}
