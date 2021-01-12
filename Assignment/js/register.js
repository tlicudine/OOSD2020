function validate(myForm) {
	var form = document.getElementById(".form-container")

	for (el in document.form()) {
		if (el == "") {
			alert(el + "must have a value");
			return false
		};
	};
}
