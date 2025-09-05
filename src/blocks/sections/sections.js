function safeRun(selector, callback) {
  document.querySelectorAll(selector).forEach(el => callback(el));
}

// =======================
// МОДАЛКИ
// =======================
safeRun(".modal_call", link => {
  link.addEventListener("click", e => {
	e.preventDefault();
	const targetId = link.getAttribute("href");
	const modal = document.querySelector(targetId);
	if (modal) modal.classList.add("active");
  });
});

safeRun(".modal", modal => {
  modal.addEventListener("click", e => {
	if (
	  e.target.classList.contains("modal") ||
	  e.target.classList.contains("modal_close") ||
	  e.target.classList.contains("no_close")

	  
	) {
	  modal.classList.remove("active");
	}
  });
});

// =======================
// ПОИСК ГОРОДА
// =======================
safeRun(".search_city", input => {
  input.addEventListener("input", e => {
	const searchTerm = e.target.value.toLowerCase();
	const cityList = e.target.closest(".modal_content")?.querySelector(".city-list");
	if (!cityList) return;

	cityList.querySelectorAll("li").forEach(city => {
	  const cityName = city.textContent.toLowerCase();
	  city.style.display = cityName.includes(searchTerm) ? "" : "none";
	});
  });
});

// =======================
// ВЫБОР ГОРОДА
// =======================
safeRun(".city-list li", city => {
  city.addEventListener("click", e => {
	const selectedCity = e.target.textContent;
	const modal = e.target.closest(".modal");
	const cityLink = document.querySelector(".heder_city.modal_call");
	if (cityLink && modal) {
	  cityLink.textContent = selectedCity;
	  cityLink.dataset.city = selectedCity;
	  modal.classList.remove("active");
	}
  });
});


document.querySelector('.header_nav__btn').addEventListener("click", () => {
	console.log('asd')
	const menuElement = document.querySelector(".catalog_menu");
	menuElement.classList.toggle("active");
});

safeRun(".catalog_menu_item_text", item => {
  item.addEventListener("mouseenter", () => {
	const category = item.dataset.catalogCategory;
	document.querySelectorAll(".catalog_right_menu").forEach(gridItem => {
	  gridItem.classList.toggle(
		"active",
		gridItem.dataset.catalogCategory === category
	  );
	});
  });
});

// =======================
// СЕЛЕКТ
// =======================
safeRun(".catalog_select", select => {
  const selected = select.querySelector(".selected");
  const options = select.querySelectorAll("ul li");

  if (selected) {
	selected.addEventListener("click", async () => {
	  select.classList.toggle("open");
	  await new Promise(r => setTimeout(r, 200));
	  console.log("Сработало через 200 мс");
	});
  }

  options.forEach(option => {
	option.addEventListener("click", () => {
	  if (selected) selected.textContent = option.textContent;
	  select.classList.remove("open");
	  console.log("Выбрано:", option.dataset.value);
	});
  });

  document.addEventListener("click", e => {
	if (!select.contains(e.target)) {
	  select.classList.remove("open");
	}
  });
  
});

function safeRun(selector, callback) {
  document.querySelectorAll(selector).forEach(el => callback(el));
}

safeRun('a.ready_filter_open[href]', link => {
  link.addEventListener('click', e => {
	e.preventDefault(); // блокируем переход

	let targetId = link.getAttribute('href');
	if (!targetId) return;

	// добавляем # если его нет
	if (!targetId.startsWith('#')) {
	  targetId = `#${targetId}`;
	}

	const targetEl = document.querySelector(targetId);
	if (!targetEl) return;

	targetEl.classList.toggle('active');
  });
});

document.querySelectorAll(".mini_tabs").forEach(slider => {
  const images = slider.querySelectorAll(".product-card__image");
  const tabsContainer = slider.querySelector(".product-card_hover_tabs");

  // очищаем контейнер табов
  tabsContainer.innerHTML = "";

  images.forEach((img, index) => {
	const tab = document.createElement("div");
	tab.classList.add("hover-tab");
	tab.dataset.index = index;

	tab.addEventListener("mouseenter", () => {
	  images.forEach(i => i.classList.remove("active_image"));
	  images[index].classList.add("active_image");
	});

	tabsContainer.appendChild(tab);
  });

  // ставим активной первую картинку
  if (images.length > 0) {
	images[0].classList.add("active_image");
  }
});
if (document.querySelectorAll(".product-card-image_slider")){
  document.querySelectorAll(".product-card-image_slider").forEach(slider => {
	const images = slider.querySelectorAll(".product-card__image");
	const tabsContainer = slider.querySelector(".product-card_hover_tabs");
  
	// очищаем контейнер табов
	tabsContainer.innerHTML = "";
  
	images.forEach((img, index) => {
	  const tab = document.createElement("div");
	  tab.classList.add("hover-tab");
	  tab.dataset.index = index;
  
	  tab.addEventListener("mouseenter", () => {
		images.forEach(i => i.classList.remove("active_image"));
		images[index].classList.add("active_image");
	  });
  
	  tabsContainer.appendChild(tab);
	});
  
	// ставим активной первую картинку
	if (images.length > 0) {
	  images[0].classList.add("active_image");
	}
  });
}




//filter: 
	const filter = document.querySelector('.filter');
	if(filter) {
	// Price slider and inputs sync
	const minInput = filter.querySelector('.price .from');
	const maxInput = filter.querySelector('.price .to');
	const minSlider = filter.querySelector('.range-min');
	const maxSlider = filter.querySelector('.range-max');
	const progress = filter.querySelector('.progress');
  
	function updateProgress() {
	  const minVal = parseInt(minSlider.value);
	  const maxVal = parseInt(maxSlider.value);
	  const percentMin = (minVal / 60000) * 100;
	  const percentMax = 100 - (maxVal / 60000) * 100;
	  progress.style.left = `${percentMin}%`;
	  progress.style.right = `${percentMax}%`;
	}
  
	function syncSlidersAndInputs() {
	  let minVal = parseInt(minSlider.value);
	  let maxVal = parseInt(maxSlider.value);
	  if (minVal > maxVal) {
		[minVal, maxVal] = [maxVal, minVal];
		minSlider.value = minVal;
		maxSlider.value = maxVal;
	  }
	  minInput.value = minVal;
	  maxInput.value = maxVal;
	  updateProgress();
	}
  
	minSlider.addEventListener('input', syncSlidersAndInputs);
	maxSlider.addEventListener('input', syncSlidersAndInputs);
  
	minInput.addEventListener('input', () => {
	  let val = parseInt(minInput.value) || 0;
	  val = Math.max(0, Math.min(val, 60000));
	  minSlider.value = val;
	  syncSlidersAndInputs();
	});
  
	maxInput.addEventListener('input', () => {
	  let val = parseInt(maxInput.value) || 60000;
	  val = Math.max(0, Math.min(val, 60000));
	  maxSlider.value = val;
	  syncSlidersAndInputs();
	});
  
	updateProgress(); // Initial
  
	// Show more toggles
	filter.querySelectorAll('.show-more').forEach(button => {
	  button.addEventListener('click', () => {
		const ul = button.previousElementSibling;
		ul.classList.toggle('expanded');
		button.textContent = ul.classList.contains('expanded') ? 'Скрыть все' : 'Показать все';
	  });
	});
  
	// Clear all
	filter.querySelector('.clear').addEventListener('click', () => {
	  // Reset checkboxes and radios
	  filter.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
		input.checked = false;
	  });
	  // Reset price
	  minInput.value = 0;
	  maxInput.value = 60000;
	  minSlider.value = 0;
	  maxSlider.value = 60000;
	  updateProgress();
	  // Collapse expansions
	  filter.querySelectorAll('ul.expanded').forEach(ul => {
		ul.classList.remove('expanded');
		ul.nextElementSibling.textContent = 'Показать все';
	  });
	});
	const proxyBtn = document.getElementById("clear_catalog_filter_more");
	const realBtn = document.getElementById("clear_catalog_filter");
  
	if (proxyBtn && realBtn) {
	  proxyBtn.addEventListener("click", () => {
		realBtn.click();
	  });
	}
}


//modals

document.querySelectorAll(".modal_call").forEach(link => {
	link.addEventListener("click", e => {
	  e.preventDefault();
	  const targetId = link.getAttribute("href");
	  const modal = document.querySelector(targetId);
	  if (modal) {
		modal.classList.add("active");
	  }
	});
});

document.querySelectorAll(".modal").forEach(modal => {
	modal.addEventListener("click", e => {
	  if (
		e.target.classList.contains("modal") || e.target.classList.contains("modal_close") 
	  ) {
		modal.classList.remove("active");
	  }
	});
});

//sliders


	var mainSlider = new Swiper(".main_slider", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
		  el: ".main_slider__nav--pagination",
		  clickable: true,
		},
		navigation: {
			nextEl: ".main_slider__nav--next",
			prevEl: ".main_slider__nav--prev",
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




var phoneInputs = document.querySelectorAll("[name='phone']")
for (i = 0; i < phoneInputs.length; i++) {
	Inputmask("+7 (999) 999-99-99", { showMaskOnHover: false }).mask(phoneInputs[i])
}

@@include("./hit_sales_tabs/hit_sales_tabs.js")
@@include("./product_page/product_page.js")
@@include("./partners_page/partners_page.js")
@@include("./cart_page/cart_page.js")
@@include("./ready_made_page_in/ready_made_page_in.js")
@@include("./modals/modals_page.js")