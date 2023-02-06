const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const mediaQuery = window.matchMedia('(max-width: 767px)');
const backToTopBtn = document.getElementById("back-to-top-btn");

// Menu functions
mediaQuery.addEventListener('change', toggleClassMobileMenuItem);

function toggleClassMobileMenuItem(mediaQuery) {
  if (mediaQuery.matches) {
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', useMobileMenu);
    })
  } else {
    menuItems.forEach(function (menuItem) {
      menuItem.removeEventListener('click', useMobileMenu);
    })
  }
}

mediaQuery.addEventListener('change', handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);

function handleMediaQueryChange(mediaQuery) {
  if (!mediaQuery.matches) {
    menu.classList.remove('active');
    mobileMenuIcon.classList.remove('change');
  }
}

mobileMenuIcon.addEventListener('click', useMobileMenu);

function useMobileMenu() {
  menu.classList.toggle('active');
  mobileMenuIcon.classList.toggle('change');
}


// Back to top button
showBackToTopButton();

function showBackToTopButton() {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
      document.getElementById("back-to-top-btn").style.display = "block";
    } else {
      document.getElementById("back-to-top-btn").style.display = "none";
    }
  }
};
  
backToTopBtn.addEventListener("click", backToTopFunction);

function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}