//  SLIDER HEADER

$(document).ready(function () {

	var owl = $("#owl-demo");

	owl.owlCarousel({

		navigation: true,
		singleItem: true,
		transitionStyle: "fade", // Show next and prev buttons
		slideSpeed: 600,
		items: 1,
		paginationSpeed: 400,
		nav: true,
		dots: false,
		autoWidth: true,
		navText: ['<span"><svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM41 7L1 7L1 9L41 9L41 7Z" id="arrow_prev" fill="#C4C4C4"/></svg></span><span id="prev">Пред</span>', '<span id="next">След</span><span><svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928938C33.9526 0.538414 33.3195 0.538414 32.9289 0.928938C32.5384 1.31946 32.5384 1.95263 32.9289 2.34315L38.5858 8.00001L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-1.74846e-07 9L40 9.00001L40 7.00001L1.74846e-07 7L-1.74846e-07 9Z" id="arrow_next" fill="#C4C4C4"/></svg></span>'],
		loop: true,
		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});

// SLIDER GALLERY
$(document).ready(function () {

	$(".main-gallery__slider").owlCarousel({

		// autoPlay: 3000, //Set AutoPlay to 3 seconds
		items: 4,
		center: true,
		loop: true,
		autoWidth: true,
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [979, 3],
		itemsTablet: true,
		itemsMobile: true,
		responsive: {
			1200: {
				center: false,
				autoWidth: true
			}
		}
	});


});

let link, date, title;

let currentElem = null;
document.body.querySelector('.main-gallery__slider').onmouseover = function (event) {
	if (currentElem) return;
	let target = event.target.closest('.item');
	if (!target) return;

	currentElem = target;
	onEnter(currentElem);
};

document.body.querySelector('.main-gallery__slider').onmouseout = function (event) {
	if (!currentElem) return;

	let relatedTarget = event.relatedTarget;

	while (relatedTarget) {
		if (relatedTarget == currentElem) return;

		relatedTarget = relatedTarget.parentNode;
	}
	onLeave(currentElem);
	currentElem = null;
};


function onEnter(elem) {
	link = elem.querySelector('.main-gallery__link');
	title = elem.querySelector('.main-gallery__title');
	date = elem.querySelector('.main-gallery__date');

	date.style.display = 'none';
	title.style.display = 'none';
	elem.style.opacity = '1';
	link.style.display = 'block';
}

function onLeave(elem) {
	date.style.display = 'block';
	title.style.display = 'block';
	elem.style.opacity = '0.4';
	link.style.display = 'none';
}

// Menu
// 'theme-dark','pagedim-black''effect-menu-slide'
$(function () {
	$('#my-menu').mmenu({
		extensions: ['effect-menu-slide', "bootstrap"],
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

});




