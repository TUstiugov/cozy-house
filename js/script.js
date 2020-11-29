//===ПРОВЕРКА БРАУЗЕРА НА WEBP============================
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

//ВЫПАДАЮЩЕЕ МЕНЮ USER-ICON===============================
// let user_icon = document.querySelector('.user-header__icon');
// user_icon.addEventListener("click", function (e) {
// 	let user_menu = document.querySelector('.user-header__menu');
// 	user_menu.classList.toggle('_active');
// });
/*=================ЗАКРЫТИЕ ВЫПАДАШКИ ПО КЛИКУ В ЛЮБОМ МЕСТЕ=============*/
// document.documentElement.addEventListener('click', function (e) {
// 	if (!e.target.closest('.user-header')) {
// 		let user_menu = document.querySelector('.user-header__menu');
// 		user_menu.classList.remove('_active');
// 	}
// });


/*=================БУРГЕР МЕНЮ======================*/
/*=================JQuery=========================*/
// $('.icon-menu').click(function (event) {
// 	$(this).toggleClass('active');
// 	$('.menu-header__menu').toggleClass('active');
// 	if ($(this).hasClass('active')) {
// 		$('body').data('scroll', $(window).scrollTop());
// 	}
// 	$('body').toggleClass('lock');
// 	if (!$(this).hasClass('active')) {
// 		$('body,html').scrollTop(parseInt($('body').data('scroll')));
// 	}
// });
/*=================JS=============================*/
let iconMenu = document.querySelector('.icon-menu');
if (iconMenu != null) {
	//let delay = 500;
	let body = document.querySelector('body');
	let menuBody = document.querySelector('.header__menu');
	iconMenu.addEventListener('click', (e) => {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		body.classList.toggle('_lock');
	});
};
/*================================================*/

/*==============КАРТИНКА КАК ФОН - ЧИСТЫЙ JS========================*/
// function ibg() {
// 	let ibg = document.querySelectorAll("._ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if (ibg[i].querySelector('img')) {
// 			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 		}
// 	}
// }
// ibg();
/*================КАРТИНКА КАК ФОН - JQeury=========================*/
// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// }
// ibg();

/*================SWIPER============================================*/
// new Swiper('.slider-pets', {
// 	navigation: {
// 		prevEl: '.slider-pets__prev',
// 		nextEl: '.slider-pets__next'
// 	},
// 	// slidesPerView: 3,
// 	spaceBetween: 10,
// 	// loop: true,
// 	// loopedSlides: 3,
// 	// breakpoints: {
// 	// 	320: {
// 	// 		slidesPerView: 1,
// 	// 	},
// 	// 	480: {
// 	// 		slidesPerView: 2,
// 	// 	},
// 	// 	1100: {
// 	// 		slidesPerView: 3,
// 	// 	},
// 	// },
// });