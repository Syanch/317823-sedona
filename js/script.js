var button = document.querySelector(".button__search");
var form = document.querySelector(".search-form");
var arrivalData = document.querySelector("[name=arrival-data]");
var departureData = document.querySelector("[name=departure-data]");
var numberAdults = document.querySelector("[name=number-adults]");
var numberChildren = document.querySelector("[name=number-children]");


button.addEventListener("click", function () {
	form.classList.toggle("form-search");
	arrivalData.focus();
});

form.addEventListener("submit", function (evt) {
	if (!arrivalData.value || !departureData.value || !numberAdults.value || !numberChildren.value) {
		evt.preventDefault();
		form.classList.remove("form-error");
		form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
	}

});