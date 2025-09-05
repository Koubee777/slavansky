  const modalInnerTabs = document.querySelectorAll(".modal_content__tabs--tab");
  const inners = document.querySelectorAll(".modal_content__inner");

  modalInnerTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // убрать активность у всех
      modalInnerTabs.forEach(t => t.classList.remove("active"));
      inners.forEach(inner => inner.classList.remove("active"));

      // активный таб
      tab.classList.add("active");

      // показываем связанный inner
      const targetId = tab.dataset.activeModalInner;
      const targetInner = document.getElementById(`modal_inner_${targetId}`);
      if (targetInner) targetInner.classList.add("active");
    });
  });

  
    const tabs = document.querySelectorAll(".modal_content__inner--tabs--tab");
    const clients = document.querySelectorAll(".modal_content__inner--client");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // снять active у табов
        tabs.forEach(t => t.classList.remove("active"));
        // снять active у блоков
        clients.forEach(c => c.classList.remove("active"));
  
        // активировать текущий таб
        tab.classList.add("active");
  
        // связка: fiz → fiz1, ur → ur1
        const target = tab.dataset.tab + "1";
        const client = document.querySelector(`.modal_content__inner--client[data-tab="${target}"]`);
        if (client) {
          client.classList.add("active");
        }
      });
    });




      // Находим все формы на странице
      const forms = document.querySelectorAll("form");
    console.log("1111", forms)
      forms.forEach(form => {
        form.querySelector("button").addEventListener("click", (e) => {
          e.preventDefault(); // блокируем стандартную отправку и подсказки браузера
          let valid = true;
    
          // Находим все input и textarea с атрибутом required
          const requiredFields = form.querySelectorAll("input[required], textarea[required], select[required]");
          requiredFields.forEach(field => {
            // Для checkbox проверяем checked, для остальных value
            if ((field.type === "checkbox" && !field.checked) || 
                (field.type !== "checkbox" && !field.value.trim())) {
              field.classList.add("emty_input");
              valid = false;
            } else {
              field.classList.remove("emty_input");
            }
          });
    
          // Если все заполнено, отправляем форму
          if (valid) {
            form.submit();
          }
        });
    
        // Убираем класс emty_input при вводе/чекбоксе
        const fields = form.querySelectorAll("input, textarea, select");
        fields.forEach(field => {
          field.addEventListener("input", () => field.classList.remove("emty_input"));
          field.addEventListener("change", () => field.classList.remove("emty_input"));
        });
      });
    
