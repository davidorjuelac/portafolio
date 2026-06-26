// ── SECCIÓN 1 portafolio ──
const portTrack = document.getElementById('port-track');
if (portTrack) {
  const portDots    = document.getElementById('port-dots');
  const portCards   = portTrack.querySelectorAll('.port-card');
  const portVisible = window.innerWidth <= 640 ? 2 : 3;
  const portTotal   = portCards.length;
  const portPages   = portTotal - portVisible + 1;
  let portCurrent   = 0;

  for (let i = 0; i < portPages; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => portGoTo(i);
    portDots.appendChild(d);
  }

  function portGoTo(n) {
    portCurrent = Math.max(0, Math.min(n, portPages - 1));
    const cardW = portCards[0].offsetWidth + 14;
    portTrack.style.transform = `translateX(-${portCurrent * cardW}px)`;
    portDots.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === portCurrent)
    );
  }

  document.getElementById('port-prev').onclick = () => portGoTo(portCurrent - 1);
  document.getElementById('port-next').onclick = () => portGoTo(portCurrent + 1);
}

// ── SECCIÓN 2 portafolio ──
const port2Track = document.getElementById('port2-track');
if (port2Track) {
  const port2Dots    = document.getElementById('port2-dots');
  const port2Cards   = port2Track.querySelectorAll('.port-card');
  const port2Visible = window.innerWidth <= 640 ? 2 : 3;
  const port2Total   = port2Cards.length;
  const port2Pages   = port2Total - port2Visible + 1;
  let port2Current   = 0;

  for (let i = 0; i < port2Pages; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => port2GoTo(i);
    port2Dots.appendChild(d);
  }

  function port2GoTo(n) {
    port2Current = Math.max(0, Math.min(n, port2Pages - 1));
    const cardW = port2Cards[0].offsetWidth + 14;
    port2Track.style.transform = `translateX(-${port2Current * cardW}px)`;
    port2Dots.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === port2Current)
    );
  }

  document.getElementById('port2-prev').onclick = () => port2GoTo(port2Current - 1);
  document.getElementById('port2-next').onclick = () => port2GoTo(port2Current + 1);
}




// ── resumen experiencia toggles ──
const expToggles = document.querySelectorAll('.exp-toggle');
if (expToggles.length) {
  expToggles.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const desc = btn.parentElement.querySelector('.exp-desc');
      const isOpen = desc.classList.contains('open');

      // cierra todos
      document.querySelectorAll('.exp-desc').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('.exp-toggle').forEach(b => {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', false);
      });

      // abre solo el clickeado si estaba cerrado
      if (!isOpen) {
        desc.classList.add('open');
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', true);
      }
    });
  });
}




// ── navbar hamburguesa ──
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  const navItems = document.getElementById('nav-items');
  hamburger.addEventListener('click', function () {
    const isOpen = navItems.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}