'use strict';

$(document).ready(function() {

	const topline = document.querySelector('.header');

  document.addEventListener('scroll', () => {
		if(window.pageYOffset < topline.clientHeight) {
			topline.classList.remove('fixed');
		} else {
			topline.classList.add('fixed');
		}

  });


// Owl Carousel
  $(".slider-works").owlCarousel({
    items: 1,
    margin: 0,
    autoplay: true,
    autoplaySpeed: 600,
    autoplayTimeout : 4000,
    loop: true,
    dots:true,
    dotsEach: true,
    nav: true,
    navText: [
  '<span class="arrow-owl arrow-left"></span>',
  '<span class="arrow-owl arrow-right"></span>'
],
  });

  $(".slider-team").owlCarousel({
    items: 3,
    margin: 20,
    autoplay: true,
    autoplaySpeed: 600,
    autoplayTimeout : 2000,
    loop: true,
    nav: true,
    navText: [
  '<span class="arrow-slider-team slider-team-left"></span>',
  '<span class="arrow-slider-team slider-team-right"></span>'
	],
	responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
  });

});

let map;
let markerImage = '../img/Pin.svg';
let marker;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.0649202, lng: 33.4101731},
    zoom: 16,
    disableDefaultUI: true
  }),

  marker = new google.maps.Marker({
      position: {lat: 49.0666141, lng: 33.4136125},
      map: map,
      animation: google.maps.Animation.BOUNCE,
      icon: markerImage
  });
}

const $toTop = $('.scroll-up')
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= 800) {
        $toTop.fadeIn();
      } else {
        $toTop.fadeOut();
      }
    });

    $toTop.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 800)
    });