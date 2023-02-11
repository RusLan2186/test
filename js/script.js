// ................BURGER................................................

$(document).ready(function () {

   $('.header-block__burger').click(function (event) {

      $('.header-block__burger, .header-block__menu').toggleClass('open-menu');

      $('body').toggleClass('lock');
   });
});


const headerLinks = document.querySelectorAll('.header-block__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header-block__burger,.header-block__menu').toggleClass('open-menu');
      $('body').toggleClass('lock');
   })
})

// ........................................КНОПКА НАВЕРХ САЙТА.................................................

$('.back-to-top').click(function () {
   $('body,html').animate({ scrollTop: 0 }, 800);
});

$(window).scroll(function () {
   let scrolled = $(window).scrollTop();

   if (scrolled > 350) {
      $('.back-to-top').addClass('back');
   } else {
      $('.back-to-top').removeClass('back');
   }
});

// замедленный скролл
$(document).ready(function () {
   $('.goto').on('click', function (event) {
      if ($(this).attr('hash') !== "") {
         event.preventDefault();
         let hash = $(this).prop('hash');
         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
         });
      }
   });
});