(function () {
  var btn = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) { return; }
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.documentElement.style.overflow = open ? 'hidden' : '';
  });
  var mq = window.matchMedia('(min-width: 901px)');
  var reset = function () {
    if (mq.matches) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
    }
  };
  if (mq.addEventListener) { mq.addEventListener('change', reset); } else { mq.addListener(reset); }
})();
