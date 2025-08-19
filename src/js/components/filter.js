    const filter = document.querySelector('.filter');
  
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