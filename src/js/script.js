const deli = document.querySelector('.deli'),
      overlay = document.querySelector('.menu__overlay'),
      menu = document.querySelector('.menu__wrapper'),
      close = document.querySelector('.close'),
      solOpen = document.querySelector('.solutions__open'),
      solutions = document.querySelector('.solutions__menu');

deli.addEventListener('click', () =>  {
    overlay.classList.add('active');
    menu.classList.add('wrapper_active');
});

close.addEventListener('click', () => {
    overlay.classList.remove('active');
    menu.classList.remove('wrapper_active');
});

solOpen.addEventListener('click', () => {
    solutions.classList.toggle('solutions__active');
    solOpen.classList.toggle('arrows__opposite');
});