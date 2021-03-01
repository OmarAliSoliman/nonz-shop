$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);
  if($('.header-slider').length){
    $('.header-slider').slick({
      rtl: currentDir == "rtl" ? true : false,
      arrows: true,
    });
  }


  if($('.new-ads-slider').length){
    $('.new-ads-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      rtl: currentDir == "rtl" ? true : false,
      loop: true,
      arrows: false,
      infinite: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ]
    });
  }


  // AOS.init();

  if($('.slider-top').length){
    $(".slider-top").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: false,
      // rtl: currentDir == "rtl" ? true : false,
      asNavFor: ".slider-bottom",
    });
    $(".slider-bottom").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".slider-top",
      // rtl: currentDir == "rtl" ? true : false,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
    });
  }

  if($('.show-options').length){
    $('.show-options .horzintal-show').on('click', function(e){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      $('.vertical-show-row').fadeOut();
      $('.horzintal-show-row').fadeIn();
    })
    $('.show-options .vertical-show').on('click', function(e){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      $('.vertical-show-row').fadeIn();
      $('.horzintal-show-row').fadeOut();
    })
  }

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})