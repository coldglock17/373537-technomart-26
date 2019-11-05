var cartLink = document.querySelector(".buy-button");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".cart-close");

cartLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.remove("visually-hidden");
});

cartClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.add("visually-hidden");
});
