	//toogle menu open or close
	var navMain = document.querySelector (".main-header__inner");
	var navToggle = document.querySelector (".nav-toggle");
	var mainHeader= document.querySelector (".main-header");

	navMain.classList.remove("main-header__inner--nojs");

	navToggle.addEventListener ("click", function(event) {
		if (navMain.classList.contains("main-header__inner--opened")) {
			navMain.classList.remove("main-header__inner--opened");
			mainHeader.classList.remove(".main-header--fond");
		} else {
			navMain.classList.add("main-header__inner--opened");
			mainHeader.classList.add(".main-header--fond");
		}
	});

	// Create a map object and specify the DOM element for display
	function initMap() {

		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 59.938796, lng: 30.323169},
			scrollwheel: false,
			zoom: 18
		});

		var marker = new google.maps.Marker({
			position: {lat: 59.938796, lng: 30.323169},
			map: map,
			itle:"офис HTML academy"
		});
	}

if __inner.classList.contains(--opened) {добавляем к main-header модификатор, по которому фон внизу} else {убираем этот модификатор}
это по клику на nav-toggle тоже ловим
как и открытие меню

	// //modal failure
	// var linkFailure = document.querySelector (".btn-js--failure");
	// var modalFailure = document.querySelector (".modal");

	// linkFailure.addEventListener ("click", function (event) {
	// 	event.preventDefault();
	// 	modalFailure.classList.add ("modal-show");
	// });

	// window.addEventListener ("keydown", function(event) {
	// 	if (event.keyCode === 27) {
	// 		if (modalFailure.classList.contains ("modal-show")) {
	// 			modalFailure.classList.remove ("modal-close");
	// 		}
	// 	}
	// });

	// //modal success
	// var linkSuccess = document.querySelector (".btn-js--success");
	// var modalSuccess = document.querySelector (".modal");

	// linkSuccess.addEventListener ("click", function (event) {
	// 	event.preventDefault();
	// 	modalSuccess.classList.add ("modal-show");
	// });

	// window.addEventListener ("keydown", function(event) {
	// 	if (event.keyCode === 27) {
	// 		if (modalSuccess.classList.contains ("modal-show")) {
	// 			modalSuccess.classList.remove ("modal-close");
	// 		}
	// 	}
	// });
