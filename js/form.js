var writeLink = document.querySelector(".write-us");
var writeForm = document.querySelector(".pop-up");
var writeClose = writeForm.querySelector(".form-close");
var writeName = writeForm.querySelector("[name=name]");
var writeFormValid = writeForm.querySelector("form");
var emailForm = writeForm.querySelector("[name=email]");
var commentForm = writeForm.querySelector("[name=comment]");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("name");
} catch (err) {
	isStorageSupport = false;
}

writeLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeForm.classList.remove("visually-hidden");
	writeForm.classList.add("modal-animation");
	writeName.focus();

	if (storage) {
		writeName.value = storage;
		emailForm.focus();
	} else {
		writeName.focus();
	}
});

writeClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeForm.classList.add("visually-hidden");
	writeForm.classList.remove("modal-error");
	writeForm.classList.remove("modal-animation");
});

writeFormValid.addEventListener("submit", function (evt) {
	if (!writeName.value || !emailForm.value || !commentForm.value) {
		evt.preventDefault();
		writeForm.classList.remove("modal-error");
		writeForm.offsetWidth = writeForm.offsetWidth;
		writeForm.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", writeName.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		writeForm.classList.add("visually-hidden");
		writeForm.classList.remove("modal-error");
		writeForm.classList.remove("modal-animation");
	}
});
