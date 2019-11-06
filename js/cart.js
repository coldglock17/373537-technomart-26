var cartLink = document.querySelectorAll(".buy-button");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".cart-close");
var cartContinue = cartPopup.querySelector(".modal-continue");

cartClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.add("visually-hidden");
});

cartContinue.addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.add("visually-hidden");
});

for (var i = 0; i < cartLink.length; i++ ) {
	cartLink[i].addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.remove("visually-hidden");
});
}
