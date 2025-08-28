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
      e.target.classList.contains("modal_close")
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

// =======================
// КАТАЛОГ
// =======================
safeRun(".catalog_botton", button => {
  button.addEventListener("click", () => {
    const leftElement = document.querySelector(".catalog_botton_lefl");
    const menuElement = document.querySelector(".catalog_menu");
    if (leftElement && menuElement) {
      leftElement.classList.toggle("active");
      menuElement.classList.toggle("active");
    }
  });
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



// =======================
// ЯКОРЯ
// =======================
