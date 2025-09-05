document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".gallery");
  if (!grid) return; // если галереи нет — этот код пропускается

  const msnry = new Masonry(grid, {
    itemSelector: ".gallery_item",
    columnWidth: ".gallery_sizer",
    gutter: 30,
    percentPosition: true,
    fitWidth: true
  });

  imagesLoaded(grid, () => {
    msnry.layout();
  });
});