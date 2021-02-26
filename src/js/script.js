const deli = document.querySelector('.deli'),
      overlay = document.querySelector('.menu__overlay'),
      menu = document.querySelector('.menu__wrapper'),
      close = document.querySelector('.close');

deli.addEventListener('click', () =>  {
    overlay.classList.add('active');
    menu.classList.add('wrapper_active');
});

close.addEventListener('click', () => {
    overlay.classList.remove('active');
    menu.classList.remove('wrapper_active');
});