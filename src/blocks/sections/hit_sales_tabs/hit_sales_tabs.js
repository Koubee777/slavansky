const hitSaleStab = new Swiper('.hit_sales_tab', {
	slidesPerView: 2.1,
	spaceBetween: 0,
	loop: false,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		640: {
			slidesPerView: 2.1,
			spaceBetween: 0,
			loop: true,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 0,
			loop: true,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 4,
			loop: false,
		},
	},
});

const hitTabs = document.querySelectorAll('.hit_sales_tabs_item');
const hitTabsContent = document.querySelectorAll('.hit_sales_content');
hitTabs.forEach((tab, index) => {
	tab.addEventListener('click', function() {
		hitTabs.forEach(t => t.classList.remove('active'));
		hitTabsContent.forEach(c => c.classList.remove('active'));

		tab.classList.add('active');
		hitTabsContent[index].classList.add('active');
	});
});