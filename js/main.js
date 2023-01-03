const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

mobileMenuIcon.addEventListener('click', openCloseMobileMenu);

for (item of mobileMenuItems) {
  item.addEventListener('click', openCloseMobileMenu);
}

function openCloseMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  mobileMenuIcon.classList.toggle('change');
}
