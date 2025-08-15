
	var mainSlider = new Swiper(".main_slider", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
		breakpoints: {
		  640: {
			slidesPerView: 1,
			spaceBetween: 10,
		  },
		  768: {
			slidesPerView: 1,
			spaceBetween: 40,
		  },
		  1024: {
			slidesPerView: 1,
			spaceBetween: 50,
		  },
		},
	  });
	  const manufacturer = new Swiper('.main_manufacturer_slider', {
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		speed: 5000,
		freeMode: true,
		freeModeMomentum: false,
		autoplay: {
		  delay: 0,
		  disableOnInteraction: false,
		},
		navigation: {
		  nextEl: '.manufacturer_slider-next',
		  prevEl: '.manufacturer_slider-prev',
		},
	  });
	  const readyBlock = new Swiper('.ready_block', {
		slidesPerView: 1.2,
		spaceBetween: 10,
		loop: false,
		breakpoints: {
			640: {
			  slidesPerView: 1.2,
			  spaceBetween: 15,
			  loop: true,
			},
			768: {
			  slidesPerView: 2.2,
			  spaceBetween: 15,
			  loop: true,
			},
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			  loop: false,
			},
		  },
	  });
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
			  spaceBetween: 0,
			  loop: false,
			},
		  },
	  });
	  const productCardImage = new Swiper('.product-card-image_slider', {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: false,
		pagination: {
		  el: '.swiper-pagination-product-card',
		  clickable: true,
		},
	  });
	  
	  document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, index) => {
		bullet.addEventListener('mouseenter', () => {
		  productCardImage.slideTo(index);
		});
	  });
	  const beontime = new Swiper('.beontime__block', {
		loop: true,
		slidesPerView: 1.1,
		spaceBetween: 15,
		breakpoints: {
			640: {
			  slidesPerView: 2.1,
			  spaceBetween: 20,
			  loop: true,
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			  loop: true,
			},
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			  loop: true,
			},
		  },
	  });