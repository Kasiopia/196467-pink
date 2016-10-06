	//toogle menu open or close
	var navMain = document.querySelector (".main-header__inner");
	var navToggle = document.querySelector (".nav-toggle");

	navMain.classList.remove("main-header__inner--nojs");

	navToggle.addEventListener ("click", function(event) {
		if (navMain.classList.contains("main-header__inner--opened")) {
			navMain.classList.remove("main-header__inner--opened");
		} else {
			navMain.classList.add("main-header__inner--opened");
		}
	});

	//modal failure
	var linkFailure = document.querySelector (".btn-js--failure");
	var modalFailure = document.querySelector (".modal");

	linkFailure.addEventListener ("click", function (event) {
		event.preventDefault();
		modalFailure.classList.add ("modal-show");
	});

	window.addEventListener ("keydown", function(event) {
		if (event.keyCode === 27) {
			if (modalFailure.classList.contains ("modal-show")) {
				modalFailure.classList.remove ("modal-close");
			}
		}
	});

	//modal success
	var linkSuccess = document.querySelector (".btn-js--success");
	var modalSuccess = document.querySelector (".modal");

	linkSuccess.addEventListener ("click", function (event) {
		event.preventDefault();
		modalSuccess.classList.add ("modal-show");
	});

	window.addEventListener ("keydown", function(event) {
		if (event.keyCode === 27) {
			if (modalSuccess.classList.contains ("modal-show")) {
				modalSuccess.classList.remove ("modal-close");
			}
		}
	});
