// toggle navbar
let hamburger = document.querySelector('#hamburger');
let navbar = document.querySelector('#navbar');
hamburger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('toggle');
  navbar.classList.toggle('nav-toggle');
})
// fixed header on scroll
let header = document.querySelector('header');
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 112) {
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
});