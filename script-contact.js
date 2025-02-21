document.getElementById("myForm").addEventListener("submit", (e) => {
	e.preventDefault();
	validateForm();
});
function validateForm() {
	// Récupération des champs
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const text = document.getElementById("message").value;

	const errorName = document.getElementById("error-username");
	const errorEmail = document.getElementById("error-email");
	const errorText = document.getElementById("error-message");

	errorName.innerHTML = "";
	errorEmail.innerHTML = "";
	errorText.innerHTML = "";

	let isValid = true;

	// Vérification du nom
	if (name === "") {
		errorName.innerHTML = "Le nom est obligatoire.";
		isValid = false;
	}

	// Verification de l'adresse e-mail si il contient un @
	if (email === "") {
		errorEmail.innerHTML = "L'adresse e-mail est obligatoire.";
		isValid = false;
	} else if (!email.includes("@")) {
		errorEmail.innerHTML = "Veuillez entrer une adresse e-mail valide.";
		isValid = false;
	}

	// Vérification du message
	if (text === "") {
		errorText.innerHTML = "Le message est obligatoire.";
		isValid = false;
	}

	// Si tout est valide
	if (isValid) {
		alert("Formulaire envoyé avec succès!");
	}
}
