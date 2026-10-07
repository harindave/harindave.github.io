/* Harin Dave — QA + Data Analytics portfolio
 * Everything on the page comes from content.js.
 * Visitors: read-only.
 * Owner: open the site once with ?edit to use the private browser draft editor.
 * "Download content.js" -> replace the file in the repo -> push = publish.
 * ?lock removes edit mode and the draft from that browser.
 */
(function () {
  'use strict';
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  var OWNER = 'hd_owner', DRAFT = 'hd_draft2';
  var qs = new URLSearchParams(location.search);
  if (qs.has('edit')) store.set(OWNER, '1');
  if (qs.has('lock')) { store.del(OWNER); store.del(DRAFT); }
  var isOwner = store.get(OWNER) === '1';
  var D = JSON.parse(JSON.stringify(window.CONTENT));
  if (isOwner) { try { var s = store.get(DRAFT); if (s) D = JSON.parse(s); } catch (e) {} }
  var edit = false, projFilter = 'All';

  function $(q) { return document.querySelector(q); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>\"]/g, function (c) { return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]; }); }
  function e(path, val, cls) { return '<span' + (cls ? ' class="' + cls + '"' : '') + (edit ? ' contenteditable="plaintext-only" data-p="' + path + '"' : '') + '>' + esc(val) + '</span>'; }
  function setPath(path, v) { var a = path.split('.'), o = D; for (var i = 0; i < a.length - 1; i++) o = o[a[i]]; o[a[a.length - 1]] = v; }
  function saveDraft() { if (isOwner) store.set(DRAFT, JSON.stringify(D)); }
  function xb(a, i) { return edit ? '<button class="x" data-a="' + a + '" data-i="' + i + '" title="Remove">✕</button>' : ''; }
  function ab(a, i, label) { return edit ? '<button class="addb" data-a="' + a + '" data-i="' + (i == null ? '' : i) + '">+ ' + label + '</button>' : ''; }
  function vis(list) { return edit ? list : list.filter(function (x) { return x.v !== false; }); }
  var S = {};

  S.hero = function () {
    var H = D.hero, ini = D.site.name.split(' ').map(function (w) { return w[0]; }).join('');
    return '<section id="home" class="hero"><div class="w hero-in"><div class="hero-t">' +
      '<div class="tag">' + e('site.tagline', D.site.tagline) + '</div>' +
      '<div class="av">● ' + e('hero.avail', H.avail) + '</div>' +
      '<h1>' + e('hero.h', H.h) + '</h1><p class="lead">' + e('hero.t', H.t) + '</p>' +
      '<div class="acts"><a class="btn p" href="#resume">View My Resume</a><a class="btn" href="#projects">View My Projects</a><a class="btn" href="#contact">Connect</a></div>' +
      '<div class="chips">' + H.badges.map(function (b, i) { return '<span class="chip">' + e('hero.badges.' + i, b) + '</span>'; }).join('') + '</div></div>' +
      '<div class="hero-v"><div class="photo">' +
'<div class="bring-card">' +
'<div class="bring-label">WHAT I BRING</div>' +

'<div class="bring-item">' +
'<div class="bring-icon qa-icon">' +
'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11l3 3L21 5"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>' +
'</div>' +
'<div><b>Quality Assurance</b><small>Manual • API • SQL • Regression</small></div>' +
'</div>' +

'<div class="bring-item">' +
'<div class="bring-icon data-icon">' +
'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19V3"/><path d="M2 21h20"/></svg>' +
'</div>' +
'<div><b>Data Analytics</b><small>SQL • Excel • Python • Pandas</small></div>' +
'</div>' +

'<div class="bring-item">' +
'<div class="bring-icon auto-icon">' +
'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="M5.6 5.6l2.8 2.8"/><path d="M15.6 15.6l2.8 2.8"/><path d="M18.4 5.6l-2.8 2.8"/><path d="M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="3"/></svg>' +
'</div>' +
'<div><b>Automation</b><small>Selenium • Cucumber • Jenkins</small></div>' +
'</div>' +

'<div class="bring-item">' +
'<div class="bring-icon problem-icon">' +
'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.9.9-1.8 1.2-1.8 2.8"/><path d="M12 17h.01"/></svg>' +
'</div>' +
'<div><b>Problem Solving</b><small>Root Cause • Data Quality • AI-Assisted Workflows</small></div>' +
'</div>' +

'</div>' +
'</div>' +
'<svg class="flow" viewBox="0 0 320 70" role="img" aria-label="Quality, data, analytics"><g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="14" width="80" height="42" rx="8"/><rect x="120" y="14" width="80" height="42" rx="8"/><rect x="236" y="14" width="80" height="42" rx="8"/><path d="M84 35h36M200 35h36M112 29l8 6-8 6M228 29l8 6-8 6"/></g><g fill="currentColor" font-size="11" text-anchor="middle" font-family="monospace"><text x="44" y="40">QUALITY</text><text x="160" y="40">DATA</text><text x="276" y="40">ANALYTICS</text></g></svg></div></div></section>';
  };

  S.about = function () {
    var A = D.about;
    return '<section id="about" class="sec"><div class="w"><h2>About</h2><div class="two"><div><h3 class="big">' + e('about.h', A.h) + '</h3>' +
      A.p.map(function (t, i) { return '<p class="mu">' + e('about.p.' + i, t) + '</p>'; }).join('') + '</div><ul class="ticks">' +
      A.points.map(function (t, i) { return '<li>' + e('about.points.' + i, t) + '</li>'; }).join('') + '</ul></div></div></section>';
  };

  S.services = function () {
    return '<section id="services" class="sec alt"><div class="w"><h2>Capabilities</h2><p class="mu sub">Areas of expertise, tools and capabilities I currently use or am actively developing.</p><div class="cols">' +
      vis(D.services).map(function (v) {
        var i = D.services.indexOf(v);
        return '<article class="c svc"><div class="tg">' + e('services.' + i + '.cat', v.cat) + '</div><h3>' + e('services.' + i + '.title', v.title) + '</h3><p class="mu">' + e('services.' + i + '.d', v.d) + '</p>' +
          '<div class="chips sm">' + v.items.map(function (t, k) { return '<span class="chip">' + e('services.' + i + '.items.' + k, t) + '</span>'; }).join('') + '</div></article>';
      }).join('') + '</div></div></section>';
  };

  S.projects = function () {
    var cats = ['All', 'QA', 'Data Analytics', 'QA + Data'];
    return '<section id="projects" class="sec"><div class="w"><h2>Projects</h2><p class="mu sub">A mix of professional case studies and personal/certification projects. Professional examples exclude confidential client details.</p><div class="seg">' + cats.map(function (c) { return '<button class="' + (c === projFilter ? 'on' : '') + '" data-a="pf" data-i="' + c + '">' + c + '</button>'; }).join('') + '</div>' +
      vis(D.projects).filter(function (p) { return projFilter === 'All' || p.cat === projFilter; }).map(function (p) {
        var i = D.projects.indexOf(p);
        return '<article class="c case"><div class="r"><h3>' + e('projects.' + i + '.n', p.n) + '</h3>' + xb('rp', i) + '</div><div class="tg">' + e('projects.' + i + '.cat', p.cat) + ' · ' + e('projects.' + i + '.c', p.c) + '</div><dl>' +
          '<dt>Problem</dt><dd>' + e('projects.' + i + '.p', p.p) + '</dd><dt>Approach</dt><dd>' + e('projects.' + i + '.a', p.a) + '</dd><dt>Result</dt><dd>' + e('projects.' + i + '.r', p.r) + '</dd><dt>Tools</dt><dd>' + e('projects.' + i + '.tools', p.tools) + '</dd></dl>' +
          (edit ? '<div class="mu sm">GitHub link (no https://): ' + e('projects.' + i + '.l', p.l) + '</div>' : (p.l ? '<a class="ul" href="https://' + esc(p.l) + '" target="_blank" rel="noopener">View project →</a>' : '')) + '</article>';
      }).join('') + ab('ap', '', 'project') + '</div></section>';
  };

  S.experience = function () {
    return '<section id="experience" class="sec"><div class="w"><h2>Experience</h2><div class="big-n"><b>3+</b> years of QA experience</div>' + D.experience.map(function (x, j) {
      return '<article class="c"><div class="r"><b>' + e('experience.' + j + '.t', x.t) + ' · ' + e('experience.' + j + '.o', x.o) + '</b><span class="mu">' + e('experience.' + j + '.d', x.d) + '</span></div><ul>' +
        x.b.map(function (b, k) { return '<li>' + e('experience.' + j + '.b.' + k, b) + xb('rb', j + '.' + k) + '</li>'; }).join('') + '</ul>' + ab('ab', j, 'bullet') + '</article>';
    }).join('') + '<h3 class="sub2">Education &amp; certifications</h3>' + D.education.map(function (x, j) {
      return '<div class="c r"><span><b>' + e('education.' + j + '.d', x.d) + '</b>, ' + e('education.' + j + '.s', x.s) + ' — ' + e('education.' + j + '.g', x.g) + '</span><span class="mu">' + e('education.' + j + '.y', x.y) + '</span></div>';
    }).join('') + D.certs.filter(function (c) { return edit || c.s; }).map(function (c) {
      var j = D.certs.indexOf(c);
      return '<div class="c r"><span>' + e('certs.' + j + '.n', c.n) + '</span><span class="badge">' + e('certs.' + j + '.s', c.s || (edit ? 'Add status' : '')) + '</span></div>';
    }).join('') + '</div></section>';
  };

  S.skills = function () {
    return '<section id="skills" class="sec alt"><div class="w"><h2>Skills</h2><div class="grid">' + D.skills.map(function (g, i) {
      return '<div class="c"><h3>' + e('skills.' + i + '.g', g.g) + '</h3><div class="chips sm">' + g.i.map(function (t, k) { return '<span class="chip">' + e('skills.' + i + '.i.' + k, t) + '</span>'; }).join('') + '</div></div>';
    }).join('') + '</div></div></section>';
  };

  S.resume = function () {
    return '<section id="resume" class="sec"><div class="w"><h2>Resume</h2><div class="c"><h3>' + e('resume.label', D.resume.label) + '</h3><p class="mu">' + e('resume.line', D.resume.line) + '</p>' +
      '<div class="acts"><a class="btn p" href="' + esc(D.resume.file) + '" target="_blank" rel="noopener">View My Resume</a><a class="btn" href="' + esc(D.resume.file) + '" download>Download PDF</a></div></div></div></section>';
  };

  function field(label, name, type, req) {
    var inner = type === 'textarea' ? '<textarea name="' + name + '" rows="5"' + (req ? ' required' : '') + '></textarea>' :
      '<input name="' + name + '" type="' + type + '"' + (req ? ' required' : '') + '>';
    return '<label>' + label + (req ? ' *' : '') + inner + '</label>';
  }

  S.contact = function () {
    var C = D.contact;
    return '<section id="contact" class="sec alt"><div class="w"><h2>Contact</h2><div class="two"><form class="c pform" data-kind="Contact message">' +
      '<div class="fg">' + field('Name', 'name', 'text', 1) + field('Email', 'email', 'email', 1) + '</div>' +
      field('Message', 'details', 'textarea', 1) + '<button class="btn p" type="submit">Send message</button><p class="msg" role="status"></p></form>' +
      '<div class="c"><p><b>Email</b><br><a href="mailto:' + esc(C.email) + '">' + e('contact.email', C.email) + '</a></p>' + (C.showPhone || edit ? '<p><b>Phone</b><br>' + e('contact.phone', C.phone) + '</p>' : '') +
      '<p><b>Location</b><br>' + e('contact.loc', C.loc) + '</p><p><a class="ul" href="https://' + esc(C.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a> · <a class="ul" href="https://' + esc(C.github) + '" target="_blank" rel="noopener">GitHub</a></p></div></div></div></section>';
  };

  function render() {
    document.documentElement.style.setProperty('--ac', D.accent || '#0e7c86');
    var h = '<header class="nav"><div class="w nav-in"><a class="brand" href="#home">' + esc(D.site.name) + '</a><nav>' +
      vis(D.nav).map(function (n) { return '<a href="' + esc(n.h) + '">' + e('nav.' + D.nav.indexOf(n) + '.l', n.l) + '</a>'; }).join('') + '</nav><a class="btn p" href="#contact">Connect</a><button id="mb" class="mb" aria-label="Menu">☰</button></div></header>';
    D.sections.forEach(function (sec, idx) {
      if (!S[sec.id]) return;
      if (sec.v === false && !edit) return;
      var html = S[sec.id]();
      if (!html) return;
      h += edit ? '<div class="sedit ' + (sec.v === false ? 'off' : '') + '"><div class="stool"><b>' + sec.id + '</b><button data-a="su" data-i="' + idx + '">▲</button><button data-a="sd" data-i="' + idx + '">▼</button><button data-a="sv" data-i="' + idx + '">' + (sec.v === false ? 'Show' : 'Hide') + '</button></div>' + html + '</div>' : html;
    });
    h += '<footer class="foot"><div class="w"><p>© 2026 ' + esc(D.site.name) + ' · ' + esc(D.site.tagline) + '</p></div></footer>';
    if (isOwner) h += '<div id="eb">' + (edit
      ? ['#0e7c86', '#1f4e8c', '#4338ca'].map(function (c) { return '<button class="sq" data-a="ac" data-i="' + c + '" style="background:' + c + '" aria-label="Accent colour"></button>'; }).join('') + '<button class="btn" data-a="discard">Discard draft</button><button class="btn p" data-a="export">Download content.js</button><button class="btn" data-a="done">Done</button>'
      : '<button class="btn p" data-a="edit">✎ Edit page</button>') + '</div>';
    var keep = window.scrollY;
    $('#app').className = edit ? 'ed' : '';
    $('#app').innerHTML = h;
    window.scrollTo(0, keep);
  }

  function submitForm(f) {
    var fd = new FormData(f), kind = f.dataset.kind, msg = f.querySelector('.msg'), btn = f.querySelector('button[type=submit]');
    fd.append('_subject', kind + ' from ' + (fd.get('name') || 'website'));
    fd.append('status', 'New');
    var body = ''; fd.forEach(function (v, k) { if (v && k.charAt(0) !== '_') body += k + ': ' + v + '\n'; });
    function mailFallback() {
      location.href = 'mailto:' + D.contact.email + '?subject=' + encodeURIComponent(kind + ' from ' + fd.get('name')) + '&body=' + encodeURIComponent(body);
      msg.textContent = 'Your email app should open with the message details. If it does not, email ' + D.contact.email + ' directly.';
    }
    if (!D.form.endpoint) { mailFallback(); return; }
    btn.disabled = true; btn.textContent = 'Sending…';
    fetch(D.form.endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } }).then(function (r) {
      if (!r.ok) throw new Error('bad');
      msg.textContent = 'Thank you. Your message was received. I will reply by email.'; f.reset();
    }).catch(function () { mailFallback(); }).then(function () { btn.disabled = false; btn.textContent = 'Send message'; });
  }
  document.addEventListener('submit', function (ev) { var f = ev.target.closest('.pform'); if (!f) return; ev.preventDefault(); submitForm(f); });

  document.addEventListener('click', function (ev) {
    if (ev.target.closest('#mb')) { document.body.classList.toggle('menu'); return; }
    if (ev.target.closest('nav a')) document.body.classList.remove('menu');
    var b = ev.target.closest('button'); if (!b || !b.dataset.a) return;
    var a = b.dataset.a, i = b.dataset.i;
    if (a === 'pf') { projFilter = i; render(); return; }
    if (!isOwner) return;
    if (a === 'edit') { edit = true; render(); return; }
    if (a === 'done') { edit = false; render(); return; }
    if (a === 'export') { exportContent(); return; }
    if (a === 'discard') { if (confirm('Discard your unpublished edits?')) { store.del(DRAFT); D = JSON.parse(JSON.stringify(window.CONTENT)); render(); } return; }
    if (a === 'ac') D.accent = i;
    if (a === 'sv') D.sections[i].v = D.sections[i].v === false;
    if (a === 'su' && +i > 0) D.sections.splice(i - 1, 0, D.sections.splice(i, 1)[0]);
    if (a === 'sd' && +i < D.sections.length - 1) D.sections.splice(+i + 1, 0, D.sections.splice(i, 1)[0]);
    if (a === 'rb') { var q = i.split('.'); D.experience[q[0]].b.splice(q[1], 1); }
    if (a === 'ab') D.experience[i].b.push('New point');
    if (a === 'rp') D.projects.splice(i, 1);
    if (a === 'ap') D.projects.push({ n: 'New project', cat: 'QA', c: 'Status · Type', p: 'The problem', a: 'The approach', r: 'The result', tools: 'Tools', l: '', v: true });
    saveDraft(); render();
  });
  document.addEventListener('input', function (ev) { var p = ev.target.dataset && ev.target.dataset.p; if (p && isOwner) { setPath(p, ev.target.textContent); saveDraft(); } });
  document.addEventListener('change', function (ev) {
    if (ev.target.id !== 'pf' || !isOwner) return;
    var f = ev.target.files[0]; if (!f) return; var fr = new FileReader();
    fr.onload = function () { var im = new Image(); im.onload = function () { var k = Math.min(1, 640 / Math.max(im.width, im.height)), c = document.createElement('canvas'); c.width = im.width * k; c.height = im.height * k; c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); D.photo = c.toDataURL('image/jpeg', 0.82); saveDraft(); render(); }; im.src = fr.result; };
    fr.readAsDataURL(f);
  });
  function exportContent() {
    var t = '// All site content lives in this file.\nwindow.CONTENT = ' + JSON.stringify(D, null, 2) + ';\n';
    var u = URL.createObjectURL(new Blob([t], { type: 'text/javascript' })), a = document.createElement('a');
    a.href = u; a.download = 'content.js'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 1000);
  }
  render();
})();
