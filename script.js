/* ==========================================================
   Small helper script. You normally don't need to edit this.
   1) Page switching (Home / Experiences / Projects / Certificates & Skills)
   2) Dark / light mode toggle
   3) Mobile menu
   ========================================================== */
(function () {
  var root = document.documentElement;
  var pages = ['home', 'experiences', 'projects', 'certificates-skills'];
  var menu = document.getElementById('menu');
  var burger = document.getElementById('burger');
  var links = menu.querySelectorAll('a');

  /* ---------- Page switching ---------- */
  function route() {
    var parts = (location.hash || '#/home').replace(/^#\/?/, '').split('/');
    var page = pages.indexOf(parts[0]) > -1 ? parts[0] : 'home';
    var targetId = parts[1] || '';

    pages.forEach(function (p) {
      document.getElementById('page-' + p).hidden = (p !== page);
    });
    links.forEach(function (a) {
      var on = a.getAttribute('data-page') === page;
      a.classList.toggle('active', on);
      if (on) { a.setAttribute('aria-current', 'page'); } else { a.removeAttribute('aria-current'); }
    });
    document.title = document.getElementById('page-' + page).getAttribute('data-title') || document.title;
    closeMenu();

    var el = targetId ? document.getElementById(targetId) : null;
    if (el) {
      el.scrollIntoView();
      el.classList.remove('flash');
      void el.offsetWidth;
      el.classList.add('flash');
    } else {
      window.scrollTo(0, 0);
    }
  }
  window.addEventListener('hashchange', route);
  route();

  /* ---------- Mobile menu ---------- */
  function closeMenu() {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* ---------- Dark / light mode ---------- */
  var btn = document.getElementById('themeBtn');
  function systemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  apply(saved === 'light' || saved === 'dark' ? saved : (systemDark() ? 'dark' : 'light'));
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
