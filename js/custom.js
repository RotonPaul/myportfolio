// typed js part start
$(function () {
	$(".typed").typed({
		strings: ["Freelancer", " Web Designer", "Front-end Web Developer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 20,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 10,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 10,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function () {},
		// starting callback function before each string
		preStringTyped: function () {},
		//callback for every typed string
		onStringTyped: function () {},
		// callback for reset
		resetCallback: function () {}
	});
});
// typed js part end
// navbar scrolling
$(window).scroll(function () {
	var scrolling = $(window).scrollTop();

	if (scrolling > 20) {
		$('.menu_bg').addClass('bg')
	} else {
		$('.menu_bg').removeClass('bg')
	};


});

// 991px navbar
$('.menu_btn').click(function () {
	$('.navbar .menu_bar').toggleClass('active')
});
$('.menu_btn').click(function () {
	$('.menu_btn i').toggleClass("xxxx");
})
// preloader
$(window).load(function () {
	$('#preloader').delay(300).fadeOut()
})
// preloader
// Back to top button
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.back2top').fadeIn('slow');
	} else {
		$('.back2top').fadeOut('slow');
	}
});
// back2top



// ripple
$('.banner_ww').ripples({

	// Image Url
	imageUrl: null,

	// The width and height of the WebGL texture to render to. 
	// The larger this value, the smoother the rendering and the slower the ripples will propagate.
	resolution: 256,

	// The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
	dropRadius: 20,

	// Basically the amount of refraction caused by a ripple. 
	// 0 means there is no refraction.
	perturbance: 0.04,

	// Whether mouse clicks and mouse movement triggers the effect.
	interactive: true,

	// The crossOrigin attribute to use for the affected image. 
	crossOrigin: ''

});
// ripple
// skill bar
$(document).ready(function () {
	$('.progress-title > span').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1500,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
});
// skill bar
// review slider
$('.team_slide').slick({
	loop: true,
	slidesToShow: 3,
	centerMode: true,
	centerPadding: 0,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	smartspeed: 2000,
	dots: true,
	responsive: [{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
	]
});
// aos
AOS.init();