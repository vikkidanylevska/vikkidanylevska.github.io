$(document).ready(function(){
	$('.vika-slider').slick({
		arrows: true,
		dots: true,
		pauseOnDotsHover: true,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true,
		// autoplay: true,
		 responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
      	slidesToShow: 1,
        slidesToScroll: 1
       }
    }
  ]
	});
});