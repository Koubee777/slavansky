const cartItems = document.querySelectorAll('.cart_block__main--list--item');
cartItems.forEach((item) => {
	const cartItemsType = item.querySelectorAll('.cart_block__main--list--item--calc--top--type');
	cartItemsType.forEach((type) => {
		type.addEventListener('click', function() {
			cartItemsType.forEach(t => t.classList.remove('active'));
			type.classList.add('active');
		});
	});
});


const selectAll = document.querySelector('.cart_block__main--top--left input');
const productsAll = document.querySelectorAll('.cart_block__main--list--item--checkbox input');
selectAll && selectAll.addEventListener('change', function() {
	productsAll.forEach(item => {
		item.checked = selectAll.checked;
	});
})


const firstScreen = document.querySelector('.cart_block__main--products');
const secondScreen = document.querySelector('.cart_block__main--order');

const cartBtn = document.querySelector('.cart_block__total--btn');
cartBtn && cartBtn.addEventListener('click', function() {
	if (firstScreen.classList.contains('active')) {
		firstScreen.classList.remove('active');
		secondScreen.classList.add('active');
	} else {
		console.log('submit')
	}
})

const cartBackBtn = document.querySelector('.cart_back');
cartBackBtn && cartBackBtn.addEventListener('click', function() {
	firstScreen.classList.add('active');
	secondScreen.classList.remove('active');
})