const deli = document.querySelector('.deli'),
      overlay = document.querySelector('.menu__overlay');

deli.addEventListener('click', () =>  {
    overlay.classList.add('active')
});