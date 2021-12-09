$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $(".header").addClass("sticky");
    }
    else {
      $(".header").removeClass("sticky");
    }
  });
});

$('.qury').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 100,
  arrows: false,
  autoplay: true
});


$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  arrows: false,
  cssEase: 'linear',
  adaptiveHeight: true
});


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

$(document).ready(function(){
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    });
    tabs.forEach(tab => {
      tab.classList.remove('active')
    });
    tab.classList.add('active')
    target.classList.add('active')
  });
});
});







$('.responsive').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      }
    }
  ]
});

$("#click-me").click(function () {
  $(function () {
    
  function animateProgressBar(el, width){
    el.animate(
        {width: width}, 
        {
            duration:1000,
        }        
    );    
  }
  
  
  
  $('.progress').each(function(){
   animateProgressBar($(this).find("div"), $(this).data("width")) 
  });
  });
  });

$(document).ready(function(){
  $('.respo').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    autoplay:false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      }
    ]
  });
})

