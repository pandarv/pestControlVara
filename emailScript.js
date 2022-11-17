const formInput = document.querySelector("form");
const submitBtn = document.querySelector("button[type='submit']");
console.log(submitBtn);
console.log(formInput[1]);

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("Clicked");
});
