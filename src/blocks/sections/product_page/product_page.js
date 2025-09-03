var cardSliderNav = new Swiper(".product_page__main--slider--nav", {
	spaceBetween: 30,
	slidesPerView: "auto",
	freeMode: true,
	direction: "vertical",
	watchSlidesProgress: true,	
});
var cardSliderMain = new Swiper(".product_page__main--slider--main", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".product_page__main--slider--main--nav--next",
		prevEl: ".product_page__main--slider--main--nav--prev",
	},
	pagination: {
		el: ".product_page__main--slider--main--pagination",
		clickable: true,
	},
	thumbs: {
		swiper: cardSliderNav,
	},
});


var visibleSlides = 6;

cardSliderMain.on('slideChange', () => {
	cardSliderNav.slideTo(cardSliderMain.activeIndex, 500, false);
	const activeIndex = cardSliderMain.activeIndex;
	const navIndex = cardSliderNav.activeIndex;

	if (activeIndex > navIndex + visibleSlides - 1) {
		cardSliderNav.slideTo(navIndex + 1); 
	}

	if (activeIndex <= navIndex) {
		cardSliderNav.slideTo(navIndex - 1);
	}
});