$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		responsive: [
     {
      breakpoint: 767,
      settings: {
      	vertical: true,
      	verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1
       }
    }
  ]
	});
});