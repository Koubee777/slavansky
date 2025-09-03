var grid = document.querySelector('.gallery');
var msnry = new Masonry(grid, {
  itemSelector: '.gallery_item',
  columnWidth: '.gallery_sizer',
  gutter: 30,
  percentPosition: true,
  fitWidth: true
});

imagesLoaded(grid, function() {
  msnry.layout();
});