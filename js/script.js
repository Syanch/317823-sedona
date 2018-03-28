var button = document.querySelector(".button__search");
var form = document.querySelector(".search-form");

button.addEventListener("click", function () {
	form.classList.toggle("form-search");
});