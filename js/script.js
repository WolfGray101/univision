const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
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
  slidesPerView: 1.15,
//отступ слайдеров
  spaceBetween:0,

});


let showAll = document.querySelectorAll('.show-all');
let cardItems = document.querySelectorAll('.cards__item');
let cardItemsType = document.querySelectorAll('.cards__item--type');
showAll[0].onclick = function () {
  for (let elem of cardItems) {    
      elem.classList.toggle('show')
      if (elem.classList.contains('show')){
      showAll[0].textContent= 'Скрыть' 
    } else {
      showAll[0].textContent= 'Показать все'
      }
  }
} 
showAll[1].onclick = function () {
  console.log("pressed button");
  for (let elem of cardItemsType) {    
      elem.classList.toggle('show')
      if (elem.classList.contains('show')){
      showAll[1].textContent= 'Скрыть' 
    } else {
      showAll[1].textContent= 'Показать все'
      }
  }
} 


 

