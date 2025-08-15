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
        e.target.classList.contains("modal") || 
        e.target.classList.contains("modal_close")
      ) {
        modal.classList.remove("active");
      }
    });
  });
  
  // Search functionality
  document.querySelectorAll(".search_city").forEach(input => {
    input.addEventListener("input", e => {
      const searchTerm = e.target.value.toLowerCase();
      const cityList = e.target.closest(".modal_content").querySelector(".city-list");
      const cities = cityList.querySelectorAll("li");
  
      cities.forEach(city => {
        const cityName = city.textContent.toLowerCase();
        city.style.display = cityName.includes(searchTerm) ? "" : "none";
      });
    });
  });
  
  // City selection functionality
  document.querySelectorAll(".city-list li").forEach(city => {
    city.addEventListener("click", e => {
      const selectedCity = e.target.textContent;
      const modal = e.target.closest(".modal");
      const cityLink = document.querySelector(".heder_city.modal_call");
      
      if (cityLink && modal) {
        cityLink.textContent = selectedCity; // Update link text
        cityLink.setAttribute("data-city", selectedCity); // Update data-city attribute
        modal.classList.remove("active"); // Close modal
      }
    });
  });

// Находим элемент с классом catalog_botton
const buttonCatalog = document.querySelector('.catalog_botton');
console.log(buttonCatalog)
// Добавляем обработчик события клика
buttonCatalog.addEventListener('click', () => {
  const leftElement = document.querySelector('.catalog_botton_lefl');
  const menuElement = document.querySelector('.catalog_menu');
  leftElement.classList.toggle('active');
  menuElement.classList.toggle('active');
});
document.querySelectorAll('.catalog_menu_item_text').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const category = item.getAttribute('data-catalog-category');
    document.querySelectorAll('.catalog_right_menu').forEach(gridItem => {
      gridItem.classList.remove('active');
      if (gridItem.getAttribute('data-catalog-category') === category) {
        gridItem.classList.add('active');
      }
    });
  });
});