// 汉堡菜单
const burger = document.querySelector('.nav-burger');
const links = document.querySelector('.nav-links');
if (burger && links) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
  });
  // 点击链接后自动收起
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

// 滚动高亮当前板块
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
if ('IntersectionObserver' in window && sections.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}

// Lightbox：点击带 data-lightbox 的图片放大查看
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
if (lightbox && lightboxImg) {
  document.querySelectorAll('img[data-lightbox]').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });
  const close = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };
  lightbox.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') close();
  });
}
