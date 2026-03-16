/* ═══════════════════════════════════════════
   nitesh-portfolio — main.js
   ═══════════════════════════════════════════ */

// ══ EXPERIENCE DATA ══
const expData = {
  alembic: {
    logoSrc: 'img/alembic-logo.svg',
    logoClass: 'detail-logo-alembic',
    title: 'Network & Security Engineer',
    company: 'Alembic Pharmaceuticals Ltd.',
    position: 'Network Engineer',
    timeline: 'July 2024 – Present',
    type: 'Full-Time',
    tools: ['Cisco Catalyst 2960/3560/9200','Cisco SG300','OPManager','Aruba Silver-peak','MS-Visio','OSPFv2','VLAN / STP / VTP','Port Security','Sophos Firewall','SD-WAN'],
    overview: 'Working at Alembic Pharmaceuticals Ltd. as a Network Engineer, maintaining and securing the enterprise LAN/WAN infrastructure across the pharma campus. Responsible for network uptime, troubleshooting, device configuration, and performance monitoring across a large-scale production environment.',
    sections: [
      {icon:'🔧', title:'Network Infrastructure & Maintenance', bullets:[
        'Monitor and maintain <strong>LAN/WAN network infrastructure</strong> across the entire pharma campus ensuring high uptime.',
        'Configure and manage <strong>Cisco Catalyst switches (2960, 3560, 9200, SG300)</strong>, access points and RF equipment.',
        'Set up <strong>VLANs, STP, VTP, DTP, and Port Security</strong> on switches for network segmentation and security.',
        'Maintain and update <strong>network documentation and topology diagrams</strong> using MS-Visio.'
      ]},
      {icon:'🛡️', title:'Troubleshooting & Monitoring', bullets:[
        'Troubleshoot and resolve <strong>network connectivity issues</strong> across the campus, escalating complex cases appropriately.',
        'Monitor <strong>network performance</strong> using OPManager and Aruba Silver-peak management dashboards.',
        'Manage <strong>Sophos Firewall</strong> rules and policies for perimeter security.',
        'Assist with <strong>patching, backups, and firmware upgrades</strong> on all network devices.'
      ]}
    ]
  },
  tecunique: {
    logoSrc: 'img/tecunique-logo.svg',
    logoClass: 'detail-logo-tecunique',
    title: 'Web Developer Intern',
    company: 'Tecunique',
    position: 'Web Developer Intern',
    timeline: 'Aug 2023',
    type: 'Internship',
    tools: ['Node.js','EJS','MySQL','REST APIs','JavaScript','HTML/CSS'],
    overview: 'Worked on a live production project building a customer portal. Gained hands-on experience with full-stack web development, API integration, and working within a professional development team.',
    sections: [
      {icon:'💻', title:'Development Work', bullets:[
        'Developed a <strong>customer portal</strong> as part of a live project for a real client.',
        'Built backend logic using <strong>Node.js and EJS</strong> templating engine.',
        'Integrated <strong>MySQL database</strong> for customer data management.',
        'Integrated <strong>pre-built third-party APIs</strong> to enhance portal functionality.'
      ]}
    ]
  },
  google: {
    logoSrc: 'img/google-logo.svg',
    logoClass: 'detail-logo-google',
    title: 'Google Student Ambassador',
    company: 'Google',
    position: 'Student Ambassador',
    timeline: '2024 – Present',
    type: 'Part-Time',
    tools: ['Google Cloud','Developer Relations','Community Building','Public Speaking','GCP','Google APIs'],
    overview: 'Representing Google at Sigma University — organizing workshops, developer sessions, and events helping students explore Google Cloud and developer tools.',
    sections: [
      {icon:'🚀', title:'Community & Outreach', bullets:[
        'Organized <strong>Google Cloud workshops</strong> and developer sessions at Sigma University.',
        'Promoted <strong>Google Cloud Skills Boost</strong> and certification programs to students.',
        'Mentored peers on building projects using <strong>Google Cloud, Maps, and AI/ML APIs</strong>.',
        'Led campus outreach driving student participation in <strong>Google developer programs</strong>.'
      ]}
    ]
  }
};

// ══ DETAIL PAGE ══
function openDetail(key) {
  const d = expData[key];
  if (!d) return;
  const toolTags = d.tools.map(t => `<span class="stack-tag">${t}</span>`).join('');
  const sections = d.sections.map(s => `
    <div class="detail-section">
      <div class="detail-section-title">${s.icon} ${s.title}</div>
      <ul class="detail-bullets">${s.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>`).join('');
  document.getElementById('detail-content').innerHTML = `
    <div class="detail-header">
      <div class="detail-logo ${d.logoClass}">
        <img src="${d.logoSrc}" alt="${d.company}"/>
      </div>
      <div>
        <div class="detail-title">${d.title}</div>
        <div class="detail-company">${d.company}</div>
      </div>
    </div>
    <div class="detail-meta-grid">
      <div class="detail-meta-cell">
        <div class="detail-meta-label"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> POSITION</div>
        <div class="detail-meta-val">${d.position}<br><span style="font-size:12px;color:var(--muted);font-weight:400">${d.type}</span></div>
      </div>
      <div class="detail-meta-cell">
        <div class="detail-meta-label"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> TIMELINE</div>
        <div class="detail-meta-val" style="font-family:'JetBrains Mono',monospace;font-size:13px">${d.timeline}</div>
      </div>
      <div class="detail-meta-cell">
        <div class="detail-meta-label"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> TOOLS</div>
        <div class="detail-tools">${toolTags}</div>
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Overview</div>
      <p class="detail-overview">${d.overview}</p>
    </div>
    ${sections}`;
  document.getElementById('exp-detail-page').classList.add('active');
  document.getElementById('exp-detail-page').scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  document.getElementById('exp-detail-page').classList.remove('active');
  document.body.style.overflow = '';
}

// ══ KEYBOARD ESC ══
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeDetail(); closeTerminal(); closeResume(); }
});

// ══ CANVAS BACKGROUND ══
const canvas = document.getElementById('dot-canvas');
const ctx = canvas.getContext('2d');
const CELL = 36, SQ = 30, GAP = CELL - SQ, GLOW_R = 190;
const BASE = {r:18,g:28,b:20}, LIT = {r:28,g:155,b:48}, PEAK = {r:48,g:205,b:75};
let mouse = {x:-9999, y:-9999}, cW = 0, cH = 0;
function setSize() {
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  cW = canvas.width = window.innerWidth;
  cH = canvas.height = window.innerHeight;
}
window.addEventListener('resize', setSize);
window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
function drawGrid() {
  ctx.clearRect(0, 0, cW, cH);
  const pad = GAP / 2;
  for (let gx = 0; gx < cW + CELL; gx += CELL) {
    for (let gy = 0; gy < cH + CELL; gy += CELL) {
      const dist = Math.sqrt((gx + CELL/2 - mouse.x) ** 2 + (gy + CELL/2 - mouse.y) ** 2);
      const t = Math.max(0, 1 - dist / GLOW_R), e = t * t * t;
      let r, g, b, a;
      if (e > 0) {
        if (e > .55) { const f = (e - .55) / .45; r = Math.round(LIT.r + (PEAK.r - LIT.r) * f); g = Math.round(LIT.g + (PEAK.g - LIT.g) * f); b = Math.round(LIT.b + (PEAK.b - LIT.b) * f); }
        else { const f = e / .55; r = Math.round(BASE.r + (LIT.r - BASE.r) * f); g = Math.round(BASE.g + (LIT.g - BASE.g) * f); b = Math.round(BASE.b + (LIT.b - BASE.b) * f); }
        a = 0.28 + e * 0.72;
      } else { r = BASE.r; g = BASE.g; b = BASE.b; a = 0.22; }
      ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
      ctx.fillRect(Math.round(gx + pad), Math.round(gy + pad), SQ, SQ);
    }
  }
  requestAnimationFrame(drawGrid);
}
setSize(); drawGrid(); window.addEventListener('load', setSize);

// ══ TERMINAL ══
const overlay = document.getElementById('terminal-overlay');
const termBody = document.getElementById('terminal-body');
const termTitle = document.getElementById('t-title');
function openTerminal(t) { termTitle.textContent = t; termBody.innerHTML = ''; overlay.classList.add('active'); }
function closeTerminal() { overlay.classList.remove('active'); }
document.getElementById('t-close-dot').addEventListener('click', closeTerminal);
document.getElementById('t-close-btn').addEventListener('click', closeTerminal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeTerminal(); });
function addLine(text, cls = '', delay = 0) {
  return new Promise(r => setTimeout(() => {
    const el = document.createElement('div');
    el.className = 't-line ' + cls; el.textContent = text;
    const old = termBody.querySelector('.t-cursor-line'); if (old) old.remove();
    termBody.appendChild(el);
    const cur = document.createElement('div'); cur.className = 't-cursor-line';
    cur.innerHTML = '<span class="t-caret">❯</span><span class="t-input-cursor"></span>';
    termBody.appendChild(cur); termBody.scrollTop = termBody.scrollHeight; r();
  }, delay));
}
async function typeCommand(cmd) {
  const el = document.createElement('div'); el.className = 't-line prompt'; termBody.appendChild(el);
  const old = termBody.querySelector('.t-cursor-line'); if (old) old.remove();
  for (let i = 0; i <= cmd.length; i++) { el.textContent = '❯ ' + cmd.slice(0, i); await new Promise(r => setTimeout(r, 36)); }
  const cur = document.createElement('div'); cur.className = 't-cursor-line';
  cur.innerHTML = '<span class="t-caret">❯</span><span class="t-input-cursor"></span>';
  termBody.appendChild(cur); termBody.scrollTop = termBody.scrollHeight; await new Promise(r => setTimeout(r, 180));
}
const rnd = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

async function runGithub() {
  const win = window.open('', '_blank'); // open immediately to avoid popup blocker
  openTerminal('nmap — Network Mapper 7.94');
  await typeCommand('nmap -sV -p 443 github.com');
  await addLine('Nmap scan report for github.com (140.82.121.4)', 'info', 400);
  await addLine(`Host is up (0.0${rnd(10,40)}s latency).`, 'success', 600);
  await addLine('443/tcp open  https  TLS 1.3', 'success', 900);
  await addLine('[✓] Firewall PASS — opening github.com ...', 'success', 1200);
  setTimeout(() => { closeTerminal(); if (win) win.location.href = 'https://github.com/niteshsingh6217'; }, 1700);
}
async function runLinkedin() {
  const win = window.open('', '_blank'); // open immediately to avoid popup blocker
  openTerminal('ssh — Secure Shell Handshake');
  await typeCommand('ssh -v user@linkedin.com -p 443');
  await addLine('Connection established.', 'success', 500);
  await addLine(`Fingerprint: SHA256:${btoa(Math.random().toString()).slice(0,28)}`, 'warn', 800);
  await addLine('[✓] TLS 1.3 tunnel up — redirecting ...', 'success', 1100);
  setTimeout(() => { closeTerminal(); if (win) win.location.href = 'https://linkedin.com/in/nitesh-singh-115aaa258'; }, 1600);
}
async function runEmail() {
  openTerminal('smtp-trace — MTA Session');
  await typeCommand('openssl s_client -connect smtp.gmail.com:587');
  await addLine('[✓] TLS: ECDHE-RSA-AES256-GCM-SHA384', 'success', 900);
  await addLine('RCPT TO: <niteshns287168@gmail.com> OK', 'success', 1200);
  await addLine('[✓] Address copied to clipboard.', 'success', 1400);
  navigator.clipboard.writeText('niteshns287168@gmail.com').catch(() => {});
  setTimeout(() => closeTerminal(), 1900);
}
// ══ RESUME MODAL ══
function openResume() {
  const modal = document.getElementById('resume-modal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeResume() {
  const modal = document.getElementById('resume-modal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}
document.getElementById('resume-modal').addEventListener('click', function(e) {
  if (e.target === this) closeResume();
});

async function runResume() {
  openTerminal('traceroute — Path Discovery');
  await typeCommand('traceroute -n resume.niteshsingh.dev');
  await addLine('traceroute to resume.niteshsingh.dev, 30 hops max', 'dim', 300);
  await addLine(' 1  192.168.1.1   (gateway)        2.341 ms', 'info', 550);
  await addLine(' 2  10.0.0.1      (isp-edge)        8.112 ms', 'info', 750);
  await addLine(' 3  104.21.74.2   (cloudflare-cdn) 14.887 ms', 'info', 950);
  await addLine('[✓] 0% packet loss — route verified.', 'success', 1150);
  await addLine('[✓] Loading resume preview ...', 'success', 1350);
  setTimeout(() => { closeTerminal(); openResume(); }, 1700);
}

const actions = { github: runGithub, linkedin: runLinkedin, email: runEmail, resume: runResume };document.querySelectorAll('[data-action]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); const fn = actions[el.dataset.action]; if (typeof fn === 'function') fn(el); });
});

// ══ TYPEWRITER ══
const cmdEl = document.getElementById('typed-cmd'); let ti = 0;
setTimeout(() => { const t = () => { if (ti < 'whoami'.length) { cmdEl.textContent += 'whoami'[ti++]; setTimeout(t, 110); } }; t(); }, 700);

// ══ ATS RING ANIMATION ══
window.addEventListener('load', () => {
  const circle = document.getElementById('ats-circle');
  if (!circle) return;
  const score = 82;
  const r = 28, circ = 2 * Math.PI * r;
  circle.style.strokeDasharray = circ;
  circle.style.strokeDashoffset = circ;
  setTimeout(() => {
    circle.style.strokeDashoffset = circ - (score / 100) * circ;
  }, 600);
});

// ══ CONTACT FORM ══
const cfForm = document.getElementById('contact-form');
const cfResult = document.getElementById('cf-result');
const cfSubmit = document.getElementById('cf-submit');
const CF_KEY = 'f5556a2d-8cd8-4820-9e4d-57b52b83d530';
if (cfForm) {
  cfForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    cfSubmit.disabled = true;
    cfSubmit.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Sending...';
    cfResult.className = '';
    cfResult.textContent = '';
    const fd = new FormData(cfForm);
    const data = Object.fromEntries(fd);
    data.access_key = CF_KEY;
    data.subject = 'New message from Portfolio — ' + (data.name || 'Visitor');
    data.from_name = 'Portfolio Contact Form';
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (res.ok && json.success) {
        cfResult.className = 'success';
        cfResult.textContent = '[✓] Message sent — I\'ll get back to you soon.';
        cfForm.reset();
      } else { throw new Error(json.message || 'failed'); }
    } catch {
      cfResult.className = 'error';
      cfResult.textContent = '[✗] Failed to send — please email directly.';
    } finally {
      cfSubmit.disabled = false;
      cfSubmit.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message';
    }
  });
}

// ══ SCROLL REVEAL ══
const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
