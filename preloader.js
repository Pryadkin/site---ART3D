
document.body.onload = () => {
   setTimeout( () => {
      let preloader = document.querySelector('.preloader');
      if( !preloader.classList.contains('done') ) {
         preloader.classList.add('done');
      }
   }, 1000);   
}



//////////////////////////////////////////////////////////////////////////////



// Проценты. (поиск изображений по тегу img)
// let   
//    images = document.images,
//    images_total_count = images.length,
//    images_loaded_count = 0,
//    perc_display = document.getElementById('load_perc'),
//    img_src,
//    image_clone;

// for( let i = 0; i < images_total_count; i++ ){
//    image_clone = new Image();
//    image_clone.onload = image_loaded; // функция сработает, когда изображение загрузиться
//    image_clone.onerror = image_loaded; // если изображение не загрузиться и произойдет ошибка
//    image_clone.src = images[i].src;
// }



// Проценты - поиск изображения по backgrount-image: url()
// getComputedStyle не поддерживается многими браузерами
// let 
//    images = document.querySelectorAll('div[style]'),   
//    images_total_count = images.length,
//    images_loaded_count = 0,
//    perc_display = document.getElementById('load_perc'),
//    img_src,
//    image_clone;

// for( let i = 0; i < images_total_count; i++ ){
//    image_clone = new Image();
//    img_src = getComputedStyle(images[i]).backgroundImage.slice(5, -2);
//    image_clone.onload = image_loaded; // функция сработает, когда изображение загрузиться
//    image_clone.onerror = image_loaded; // если изображение не загрузиться и произойдет ошибка
//    image_clone.src = img_src;
// }


function image_loaded() {
   images_loaded_count++;
   perc_display.innerHTML = ( ((100 / images_total_count ) * images_loaded_count)) + '%';

   if( images_loaded_count >= images_total_count ) {
      setTimeout( () => {
         let preloader = document.querySelector('.preloader');
         if( !preloader.classList.contains('done') ) {
            preloader.classList.add('done');
         }      
      }, 500); 
   }
}
   



