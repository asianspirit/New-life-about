$(document).ready(function () {
  $(".header__burger").on('click', function () {
    $(".header__burger-icon").toggleClass("open");
    $(".header__menu-wrapper").toggleClass("active");
  });


  $(".header__menu-link").on('click', function () {
    $(".header__burger-menu").toggleClass("active", false);
    $(".header__burger-icon").toggleClass("open", false);
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2000,
    speedAsDuration: true
  });

  var scrolled;
  window.onscroll = function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if(scrolled > 400){
          $(".header__top").css({"background": "white"})
      }
      if(400 > scrolled){
          $(".header__top").css({"background": "transparent"})         
      }
  
  }

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(this).find('.vacancy__text-box').on('click', function () {
    $(this).find('.vacancy__text-more').slideToggle();
    $(this).find('.vacancy__text-more').toggleClass('active');
  });

  VANTA.WAVES({
    el: "#header-1",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x935f00,
    shininess: 83.00,
    waveHeight: 14.00,
    waveSpeed: 0.80,
    zoom: 0.91
  })

  new WOW().init();



  if (window.matchMedia('(max-width: 780px)').matches) {
    VANTA.WAVES({
      el: "#header-1",
      mouseControls: false,
      touchControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x935f00,
      shininess: 83.00,
      waveHeight: 0,
      waveSpeed: 0,
      zoom: 0.91
    })

    return false;
  }


  new Vivus(
    'gps',
    {
      type: 'oneByOne',
      duration: 200,
    }

  );

  // $(window).scroll(function() {
  //   var hT = $('#capabilities').offset().top,
  //     hH = $('#capabilities').outerHeight(),
  //     wH = $(window).height(),
  //     wS = $(this).scrollTop();
  //   console.log((hT - wH), wS);
  //   if (wS > (hT + hH - wH)) {
  //     document.getElementById('burger').style.background = "blue";
  //   }
  // });





})

