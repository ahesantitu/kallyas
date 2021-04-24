$(document).ready(function(){

	$(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

	// Humberger Menu
  $('.header__burger').click(function(event) {
        $('.header__burger, .menu').toggleClass('active')
        $('body').toggleClass('lock')
    });
	// Slider
	var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
    delay: 3000,
  },
 }); 


$('.filters ul li').click(function(){
          $('.portfolio-menu ul li').removeClass('active');
          $(this).addClass('active');
          
          var selector = $(this).attr('data-filter');
          $('.filters-item').isotope({
            filter:selector
          });
          return  false;
         });

         $(document).ready(function() {
         var popup_btn = $('.popup-btn');
         popup_btn.magnificPopup({
         type : 'image',
         gallery : {
          enabled : true
         }
         });
         });

$('.slick-slider').slick({
  centerPadding: '60px',
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  centerMode: true,
  variableWidth: true,
  
});
	// Autoplay Video
	function playVideo() {
            $('#sample_video').trigger('play');
        };
});

// wow js
new WOW().init();