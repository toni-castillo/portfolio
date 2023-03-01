const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const mediaQuery = window.matchMedia('screen and (max-width: 767px)');
const backToTopBtn = document.getElementById("back-to-top-btn");

// Menu functions
function toggleClassMobileMenuItem(mediaQuery) {
  console.log('Soy toggleClassMobileMenuItem: ' + mediaQuery.matches);

  if (mediaQuery.matches) {
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', useMobileMenu);
      console.log('Soy yo, Concha. Entro');
    });
  } else {
    menuItems.forEach(function (menuItem) {
      menuItem.removeEventListener('click', useMobileMenu);
    });
  }
}

function handleMediaQueryChange(mediaQuery) {
  if (!mediaQuery.matches) {
    menu.classList.remove('active');
    mobileMenuIcon.classList.remove('change');
  }
}

function useMobileMenu() {
  menu.classList.toggle('active');
  mobileMenuIcon.classList.toggle('change');
  console.log('Go, useMobileMenu');
}

mediaQuery.addEventListener('change', toggleClassMobileMenuItem);
mediaQuery.addEventListener('change', handleMediaQueryChange);
toggleClassMobileMenuItem(mediaQuery);
handleMediaQueryChange(mediaQuery);
mobileMenuIcon.addEventListener('click', useMobileMenu);

// Back to top button
function showBackToTopButton() {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
      document.getElementById("back-to-top-btn").style.display = "block";
    } else {
      document.getElementById("back-to-top-btn").style.display = "none";
    }
  }
}

function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

showBackToTopButton();

backToTopBtn.addEventListener("click", backToTopFunction);