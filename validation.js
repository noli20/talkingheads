const form = document.querySelector("#formLogIn")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const emailHelp = document.querySelector("#emailHelp")
const passwordHelp = document.querySelector("#passwordHelp")


form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (email.value === "" || password.value === "") {
		if (email.value === "") {
			emailHelp.innerText = "¡Completar los campos!"
		}
		if (password.value === "") {
			passwordHelp.innerText = "¡Completar los campos!"
		}
	} else {
	form.submit();
	}
})

