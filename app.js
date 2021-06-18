const darkModeToggle = document.querySelector(".toggle-switch");

const body = document.querySelector("body");
const title = document.querySelector(".title");
const titleDesc = document.querySelector(".title__desc");
const darkModeText = document.querySelector(".dark-mode");
const toggleSlider = document.querySelector(".toggle-slider");
const overall = document.querySelectorAll(".overall");
const accountName = document.querySelectorAll(".overall__account__name");
const statDesc = document.querySelectorAll(".overall__stat__desc");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const todayItem = document.querySelectorAll(".today__item");

darkModeToggle.addEventListener("click", () => {
	body.classList.toggle("dark");
	title.classList.toggle("dark");
	titleDesc.classList.toggle("dark");
	darkModeText.classList.toggle("dark");
	toggleSlider.classList.toggle("dark");
	[...overall].forEach((el) => el.classList.toggle("dark"));
	[...accountName].forEach((el) => el.classList.toggle("dark"));
	[...statDesc].forEach((el) => el.classList.toggle("dark"));
	[...h2].forEach((el) => el.classList.toggle("dark"));
	[...h3].forEach((el) => el.classList.toggle("dark"));
	[...todayItem].forEach((el) => el.classList.toggle("dark"));
});
