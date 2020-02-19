//First-screen slider
$(document).ready(function () {
  var mySwiper = new Swiper ('.fst-screen-slider', {
    speed: 1000,
    loop: true,
    spaceBetween: 20,
  //   autoplay: {
  //   delay: 5000,
  // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  })
});

//Teachers slider
$(document).ready(function () {
   if (matchMedia('only screen and (max-width: 767px)').matches) {

    var mySwiper = new Swiper ('.teachers-slider', {
      speed: 1000,
      // slidesPerView: 2,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 24,
      loop: true,
    //   autoplay: {
    //   delay: 5000,
    // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  }
});

//    $(document).on('resize'), function () {
//   if (matchMedia('only screen and (max-width: 767px)').matches) {

//     var mySwiper = new Swiper ('.teachers-slider', {
//       speed: 1000,
//       slidesPerView: 2,
//       loop: true,
//     //   autoplay: {
//     //   delay: 5000,
//     // },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//       },
//     });
//   }
// };


  // slidesPerView: 2,
  // spaceBetween: 20,
  // breakpoints: {
  //   768: {
  //     // slidesPerView: 2,
  //     // spaceBetween: 20
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   992: {
  //    init: false
  //   }
  // }

//Reviews slider
$(document).ready(function () {
  var mySwiper = new Swiper ('.reviews-slider', {
    speed: 1000,
    loop: true,
  //   autoplay: {
  //   delay: 5000,
  // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  })
});

//Switching tabs
  $(document).ready(function () {

    $(".notice__list").on("click", ".notice__item", function () {
        $(".notice__list").find(".active").removeClass("active");
        console.log($(this).index());
        $(this).addClass("active");
        $(".tads-content").find(".active").removeClass("active");
        $(".tab-panel").eq($(this).index()).addClass("active");
    });
  });

//latest-news-slider
  $(document).ready(function () {
   if (matchMedia('only screen and (max-width: 767px)').matches) {

    var mySwiper = new Swiper ('.latest-news-slider', {
      speed: 1000,
      // slidesPerView: 2,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 24,
      loop: true,
    //   autoplay: {
    //   delay: 5000,
    // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  }
});

$(document).ready(function () {

  var scrolled;
  var timer;
  var lastScrollPosition = 0;
  var scrollElem = document.getElementById("arrowTop");

  window.addEventListener('scroll', function() {

   if (pageYOffset > document.documentElement.clientHeight) {
      scrollElem.style.opacity = "1";
   } else {
       scrollElem.style.opacity = "0";
   }
    });
  document.getElementById('arrowTop').onclick = function() {
    scrolled = window.pageYOffset;
    ScrollToTop();
  }

  function ScrollToTop () {
    if (scrolled >= 100) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(ScrollToTop, 20);
    } else {
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
  }
});