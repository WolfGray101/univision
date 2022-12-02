const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
   //показываем кусочек следующего слайда
   slidesPerView: 3,
   //отступ слайдеров
     spaceBetween:5,

  // effect: 'cube',

  // cubeEffect : {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94
  // },
    
});

let showAll = document.querySelector('.show-all');
let cardItems = document.querySelectorAll('.cards__item');
showAll.onclick = function () {
  for (let elem of cardItems) {    
      elem.classList.toggle('show')
      if (elem.classList.contains('show')){
      showAll.textContent= 'Скрыть' 
    } else {
      showAll.textContent= 'Показать все'
      }
  }
} 

