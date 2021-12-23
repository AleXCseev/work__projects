var landingFunctions = {
	init: function() {
		this.initLibraris()
		// this.time()
		// this.modals()
		this.card()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $(".card").outerHeight(false)
			var windowHeight = $(window).height()
	

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		// $(".review__slider").owlCarousel({
		// 	loop: true,
		// 	nav : true,
		// 	dots: false,
		// 	dotsEach: false,
		// 	items: 2,
		// 	margin: 100,
		// 	// autoHeight: true,
		// 	responsive:{
		// 		0:{
		// 			items:1,
		// 		},
		// 		1000:{
		// 			items:2,
		// 		}
		// 	}
		// });

		$.raty.path = 'img/raty';

		$('.modal__raiting').raty({
			half: false,
			space: false,
			number: 5,
		});

		// if($(window).width() <= 480) {
		// 	$(".galary").addClass("owl-carousel").owlCarousel({
		// 		loop: true,
		// 		nav : true,
		// 		dots: false,
		// 		dotsEach: false,
		// 		items: 1,
		// 		margin: 30,
		// 		// autoHeight: true,
		// 	});
		// }

		// AOS.init({
		// 	disable : 'mobile',
		// 	once: true,
		// 	duration: 1000,
		// 	// offset : -200,
		// });
	
		// $(window).resize(function() {
		// 	AOS.refresh();
		// })

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},

	modals: function() {
		function modal() {
			$(".add__review").click(function () {
				$(".modal").addClass("active")
			})
	
			function close() {
				$(".modal").removeClass("active")
			}
	
			$(".modal").click( function(e) {
				var target = e.target;
				if(target.classList.contains("modal__close")) {
					close()
				}
				if(target.classList.contains("modal")) {
					close()
				}
			})
	
			function readURL(input) {
				if (input.files && input.files[0]) {
					var reader = new FileReader();
					reader.onload = function (e) {
						$('.file img').attr('src', e.target.result).css("display", "block");
					};
					reader.readAsDataURL(input.files[0]);
				}
			}
	
			$(".modal .input__file").on("change", function () {
				readURL(this);
			});
	
			$(".modal form").submit(function (e) {
				e.preventDefault()
				$(this).removeClass("active");
				$(".send__window").addClass("active");
				$(".modal .name__input").val("")
				$(".modal .modal__area").val("")
				$(".modal .file img").attr("src", "").css("display", "none")
				delayClose()
			})
			function delayClose() {
				setTimeout(function () {
					$(".modal form").addClass("active");
					$(".send__window").removeClass("active");
					close();
				}, 5000);
			}
		}
	
		modal()
	
		function privacy() {
			$(".confidantion").click(function () {
				$(".privacy-policy-popup").addClass("active")
			})
	
			function close() {
				$(".privacy-policy-popup").removeClass("active")
			}
	
			$(".privacy-policy-popup").click( function(e) {
				var target = e.target;
				if(target.classList.contains("privacy__close")) {
					close()
				}
				if(target.classList.contains("privacy-policy-popup")) {
					close()
				}
			})
		}
	
		privacy()
	},

	// time: function() {
	// 	Date.prototype.daysInMonth = function () {
	// 		return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
	// 	};
		
	// 	if (!String.prototype.padStart) {
	// 		String.prototype.padStart = function padStart(targetLength, padString) {
	// 			targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
	// 			padString = String((typeof padString !== 'undefined' ? padString : ' '));
	// 			if (this.length > targetLength) {
	// 				return String(this);
	// 			}
	// 			else {
	// 				targetLength = targetLength - this.length;
	// 				if (targetLength > padString.length) {
	// 					padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
	// 				}
	// 				return padString.slice(0, targetLength) + String(this);
	// 			}
	// 		};
	// 	}

	// 	function getDate(plusDays) {
	// 		var today = new Date();
	// 		var dd = String(today.getDate() + plusDays).padStart(2, '0');
	// 		var mm = String(today.getMonth() + 1).padStart(2, '0');
	// 		if (+dd < 0) {
	// 			mm = String(today.getMonth()).padStart(2, '0');
	// 		}
			
	// 		var yyyy = String(today.getFullYear());
	// 		yyyy = yyyy.substr(yyyy.length - 2);
	// 		var currentDaysInMonth = new Date().daysInMonth()
	// 		if (+dd > currentDaysInMonth) {
	// 			dd = String(dd - currentDaysInMonth).padStart(2, '0');
	// 			mm++
	// 		}
	// 		if (+dd < 0) {
	// 			dd = String(currentDaysInMonth + +dd).padStart(2, '0');
	// 		}
	// 		return dd + "." + mm + "." + yyyy
	// 	}

	// 	$(".header__discount span").text(getDate(2));

	// 	$(".year").text(new Date().getFullYear())
	// },

	card: function() {

		$(".card__slider").owlCarousel({
			loop: true,
			nav : false,
			dots: true,
			dotsEach: true,
			items: 1,
			margin: 30,
		});

		function openForm(selector) {
			var openBtn = $(selector + " .open__form")
			var form = $(selector + " .card__form")

			openBtn.click(function() {
				$(this).hide()
				form.fadeIn(300)
			})
		}

		openForm(".card__1")
		openForm(".card__2")
		openForm(".card__3")

		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}

		function quantity(selector, number) {
			var currentNumber;
	
			if(localStorage.getItem(selector)) {
				$(selector + " .card__quantity span").text(localStorage.getItem(selector));
			} else {
				currentNumber = number
				localStorage.setItem(selector, currentNumber)
				$(selector + " .card__quantity span").text(currentNumber);
			}
	
			setInterval(function () {
				currentNumber = localStorage.getItem(selector);
				if (currentNumber >= 3) {
					currentNumber = currentNumber - getRandomInt(3);
					$(selector + " .card__quantity span").text(currentNumber);
					localStorage.setItem(selector, currentNumber)
				} else {
					currentNumber = number;
					localStorage.setItem(selector, currentNumber)
				}
			}, 100000)
		}
	
		quantity(".card__1", 25)
		quantity(".card__2", 22)
		quantity(".card__3", 28)

	},
}

$(document).ready(function() {
	landingFunctions.init();
});

