(function($, undefined) {
   $(function() {

'use strict' 

let 
   pictures = document.querySelectorAll('.footer__slider-picture'),
   wrapperImg = document.querySelector('.wrapper'),
   sliderText = document.querySelector('.footer__slider-text'),
   pictureText = document.querySelectorAll('.footer__slider-picture-text'),
   timerId;


$('.header__description_link').click(() => {
   $('.header__description_text').slideDown('400'); 
})
$('.header__description_close').click(() => {
   $('.header__description_text').slideUp('400');   
})
   
let photos = [
   'img/IMG_4273.jpg',
   'img/IMG_0068.jpg',
   'img/IMG_4509.jpg',
   'img/IMG_4616.jpg',
   'img/mlh_00001.jpg',
   'img/mlh_L_00011.jpg'
];


let findTargetElement = function(elem) {
   let count = 0;
   
   for (let item of pictures) {      
      if (pictures[count].classList.contains('picture-active')) {
         pictures[count].classList.remove('picture-active')
      };      
      if (elem === pictures[count]) {
         setSliderImg(count);
      };
      count++;
   }
};


let addPictureSliderClickHandler = function(pictures) {
   pictures.addEventListener('click', (e) => {
      clearTimeout(timerId);      
      findTargetElement(e.target); 
   })
};

pictures.forEach((i, index) => {
   addPictureSliderClickHandler(pictures[index]);
});



let setMonochromePictureSlider = function() {
   pictures.forEach((item) => {
      item.classList.add('picture-monochrome');
   })
};
setMonochromePictureSlider();  



let setSliderImg = function(current, opacity) {  
   let
      min = 0,
      max = pictures.length - 1;
   
   setTimeout(function funcTimeout() {  
      sliderText.style.opacity = '0';

      if (current > max) {
         current = min;
      }
      
      if (current === min) {
         pictures[max].classList.remove('picture-active'); 
         
         pictures[current].classList.add('picture-active');
         wrapperImg.style.backgroundImage =`url(${photos[current]})`; 
         setTimeout(() => {
            sliderText.style.opacity = opacity;
            sliderText.innerHTML = pictureText[current - 1].innerHTML;
         }, 500);   
      }
      
      if (current > min) {
         pictures[current - 1].classList.remove('picture-active');  
        
         pictures[current].classList.add('picture-active');  
         wrapperImg.style.backgroundImage =`url(${photos[current]})`; 
         setTimeout(() => {
            sliderText.style.opacity = opacity;
            sliderText.innerHTML = pictureText[current - 1].innerHTML; 
         }, 500);
      }
      current++; 

      timerId = setTimeout(funcTimeout, 5000);
   }, 0);
};
setSliderImg(0, 0.8);


});
})(jQuery);




