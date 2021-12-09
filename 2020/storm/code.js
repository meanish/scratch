$('.slider-top1').slick({
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  autoplay:true,
  adaptiveHeight: true
});

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $(".header").addClass("sticky1");
    }
    else {
      $(".header").removeClass("sticky1");

    }
  });
});


$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('.main-header').height();
		if ($(window).scrollTop() > navHeight) {
			$('.main-header').addClass('fixed');
		 }
		else {
			$('.main-header').removeClass('fixed');
		 }
	});
});

$(window).resize(function(){
  if(window.innerWidth <999)
  {
      $(".container").addClass('container-fluid');
      $(".container").removeClass('container');
  }
}); 

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  arrows:false,
  autoplay:true,
  adaptiveHeight: true
});