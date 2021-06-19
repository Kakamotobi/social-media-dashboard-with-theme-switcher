const darkModeToggle = document.querySelector(".toggle-switch");
const body = document.querySelector("body");

darkModeToggle.addEventListener("click", () => {
	body.classList.toggle("dark");
});
