/**
 * LUCAS BEBIDAS — LÓGICA E EXPERIÊNCIA DO CLIENTE (JS)
 * Identidade: Antigravity (Advanced Branding & UI/UX Specialist)
 * Planaltina-DF — Fuso Horário de Brasília (UTC-3)
 */

document.addEventListener('DOMContentLoaded', () => {
  initRealTimeStatus();
  initScheduleTable();
  initMobileMenu();
  initHeaderScroll();
  initFaqAccordion();
  initCopyAddress();
});

/**
 * 1. STATUS OPERACIONAL EM TEMPO REAL (9h às 2h do dia seguinte)
 * Fuso horário fixado em Brasília (UTC-3) para precisão absoluta independente de onde o usuário acesse.
 */
function getBrasiliaDate() {
  const now = new Date();
  // Converte para UTC e subtrai 3 horas (Horário Padrão de Brasília)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc - (3 * 3600000));
}

function initRealTimeStatus() {
  const statusPills = document.querySelectorAll('.dynamic-status-pill');
  const liveClockElements = document.querySelectorAll('.dynamic-live-clock');
  const heroStatusBadges = document.querySelectorAll('.dynamic-hero-status');

  function updateStatus() {
    const bsb = getBrasiliaDate();
    const hours = bsb.getHours();
    const minutes = bsb.getMinutes();
    const seconds = bsb.getSeconds();

    // Formata relógio digital de Brasília (HH:mm:ss)
    const timeFormatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    liveClockElements.forEach(el => {
      el.textContent = `${timeFormatted} (Horário de Brasília)`;
    });

    // LÓGICA DE FUNCIONAMENTO:
    // Aberto das 09h às 02h da madrugada seguinte.
    // Portanto: aberto se (horas >= 9 OU horas < 2).
    // Fechado apenas no intervalo entre 02:00 e 08:59.
    const isOpen = (hours >= 9 || hours < 2);

    statusPills.forEach(pill => {
      if (isOpen) {
        pill.className = 'status-pill open dynamic-status-pill';
        pill.innerHTML = `
          <span class="status-dot"></span>
          <span>Aberto agora • Fecha às 02h</span>
        `;
      } else {
        pill.className = 'status-pill closed dynamic-status-pill';
        pill.innerHTML = `
          <span class="status-dot"></span>
          <span>Fechado no momento • Abre às 09h</span>
        `;
      }
    });

    heroStatusBadges.forEach(badge => {
      if (isOpen) {
        badge.innerHTML = `
          <span class="status-dot"></span>
          <span>Atendimento Aberto até 02:00</span>
        `;
        badge.style.color = '#34D399';
        badge.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        badge.style.background = 'rgba(16, 185, 129, 0.15)';
      } else {
        badge.innerHTML = `
          <span class="status-dot" style="background:#94A3B8;box-shadow:none;"></span>
          <span>Fechado agora • Reabre às 09:00</span>
        `;
        badge.style.color = '#CBD5E1';
        badge.style.borderColor = 'rgba(148, 163, 184, 0.3)';
        badge.style.background = 'rgba(148, 163, 184, 0.12)';
      }
    });
  }

  // Executa imediatamente e a cada 1 segundo
  updateStatus();
  setInterval(updateStatus, 1000);
}

/**
 * 2. DESTAQUE AUTOMÁTICO DO DIA ATUAL NA TABELA DE HORÁRIOS
 */
function initScheduleTable() {
  const bsb = getBrasiliaDate();
  const dayIndex = bsb.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

  const dayRows = document.querySelectorAll('[data-weekday]');
  dayRows.forEach(row => {
    const rowDay = parseInt(row.getAttribute('data-weekday'), 10);
    if (rowDay === dayIndex) {
      row.classList.add('today');
      const dayCell = row.querySelector('.day-name');
      if (dayCell && !dayCell.querySelector('.today-indicator')) {
        const badge = document.createElement('span');
        badge.className = 'today-indicator';
        badge.textContent = 'Hoje';
        dayCell.appendChild(badge);
      }
    }
  });
}

/**
 * 3. MENU MOBILE RESPONSIVO
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Fecha o menu ao clicar em qualquer link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      navLinks.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * 4. HEADER COM EFEITO DE SCROLL
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * 5. ACCORDION DO FAQ
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros para manter a tela limpa
      faqItems.forEach(other => other.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * 6. COPIAR ENDEREÇO EM 1 CLIQUE COM TOAST FEEDBACK
 */
function initCopyAddress() {
  const copyButtons = document.querySelectorAll('.btn-copy-address');
  const toast = document.getElementById('toastNotification');

  const fullAddress = "St. Residencial Leste, Buritis I, Quadra 02, Conjunto I, Lote 41, Vila Buritis, Planaltina-DF, CEP 73350-210";

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(fullAddress);
        showToast("Endereço copiado para a área de transferência!");
      } catch (err) {
        // Fallback caso clipboard API falhe
        const tempInput = document.createElement('textarea');
        tempInput.value = fullAddress;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast("Endereço copiado!");
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}
