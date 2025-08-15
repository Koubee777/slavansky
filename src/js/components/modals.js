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