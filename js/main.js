const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
const mediaQuery = window.matchMedia('(max-width: 767px)');


mobileMenuIcon.addEventListener('click', useMobileMenu);

for (item of mobileMenuItems) {
  item.addEventListener('click', useMobileMenu);
}

function useMobileMenu() {
  menu.classList.toggle('active');
  mobileMenuIcon.classList.toggle('change');
}

mediaQuery.addEventListener('change', handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);

function handleMediaQueryChange(mediaQuery) {
  if (!mediaQuery.matches) {
    menu.classList.remove('active');
    mobileMenuIcon.classList.remove('change');
  }
}

