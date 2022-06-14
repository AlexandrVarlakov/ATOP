/*


111 Мобильное меню
222  Модальные окна
333 Слайдеры
444 Маски



*/




/* 111 Мобильное меню */
let hamburger = document.querySelector('.hamburger');
let mobMenu = document.querySelector('.mob-menu');
let mobMenuClose = document.querySelector('.mob-menu__close')

if (hamburger && mobMenu && mobMenuClose){
    hamburger.onclick = function(){
        mobMenu.classList.add('open');
    }

    mobMenuClose.onclick = function(){
        mobMenu.classList.remove('open');
    }

    let mobMenuLinks = document.querySelectorAll('.mob-l-list__link');


    mobMenuLinks.forEach( (link) => {

        link.onclick = function(){
            mobMenuClose.click();
        }
    })

    
    window.addEventListener('resize', function(event){
        let contentWidth = document.documentElement.clientWidth;

        if ( contentWidth > 1024 ){
            mobMenuClose.click();
        }
    })

}





/* /Мобильное меню */



/*  222  Модальные окна*/

let options = {
    //zIndex: 1000, 
    //background: 'rgba(12, 130, 121, 0.5)', 
    //displayFog: 'block', //Значение по умолчанию flex
    //displayModal: 'flex', //Значение по умолчанию block
    showModalAnimationName: 'fadeInBottom', 
    closeModalAnimationName: 'fadeOutTop', 
    closeClasses: ['modal__close'], 
    //closeModalOnFogClick: false, 
    showModalAnimationDuration: 800,
    //closeModalAnimationDuration: 300,
    showFogAnimationName: 'fadeIn',
    closeFogAnimationName: 'fadeOut',
    showFogAnimationDuration: 300,
    closeFogAnimationDuration: 300,

    documentScrolled: false, 
    //onModalClose: function(){console.log('modal close');},
    //onModalOpen: function(){console.log('modal open');}

}

let flexModal = {
    //zIndex: 1000, 
    //background: 'rgba(12, 130, 121, 0.5)', 
    //displayFog: 'block', //Значение по умолчанию flex
    displayModal: 'flex', //Значение по умолчанию block
    showModalAnimationName: 'fadeInBottom', 
    closeModalAnimationName: 'fadeOutTop', 
    closeClasses: ['modal__close'], 
    //closeModalOnFogClick: false, 
    showModalAnimationDuration: 800,
    //closeModalAnimationDuration: 300,
    showFogAnimationName: 'fadeIn',
    closeFogAnimationName: 'fadeOut',
    showFogAnimationDuration: 300,
    closeFogAnimationDuration: 300,

    documentScrolled: false, 
    //onModalClose: function(){console.log('modal close');},
    //onModalOpen: function(){console.log('modal open');}

}


document.querySelector('.header').onclick = function(){
    let modal = new easyModal('modal-thanks', flexModal);
}

document.querySelector('.header').onclick = function(){
    let modal = new easyModal('modal', options);
}

/* / Модальные окна  */


/* 333 Слайдеры */

let slider = new Swiper(".slider-", {
    speed: 1000,
    
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 40
          },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        // when window width is >= 640px
        1140: {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }
  });



/* / Слайдеры */



/* 444 Маски */


let phoneMasks = document.querySelectorAll("input[name='_phone']");

phoneMasks.forEach( (input) => {
    IMask(
        input, {
          mask: '+{7}(000)000-00-00'
      });
})

  

/* / Маски */