var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.quantity()
		this.card()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = -50;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		setInterval(function() {
			$(".header__poligon-block").toggleClass("active");
		}, 5000)

		if($(window).width() <= 1000) {
			$(".review__slider").addClass("owl-carousel").owlCarousel({
				items: 1,
				margin: 60,
				dots: true,
				dotsEach: true,
				nav: false,
				loop: true,
				autoHeight: true,
			})
		}

		// $(".review__slider").owlCarousel({
		// 	items: 2,
		// 	margin: 60,
		// 	dots: false,
		// 	dotsEach: true,
		// 	nav: true,
		// 	loop: true,
		// 	autoHeight: false,
		// 	stagePadding: 45,
		// 	responsive:{
		// 		0:{
		// 			items:1,
		// 			autoHeight: true,
		// 			dots: true,
		// 			stagePadding: 0,
		// 		},
		// 		1000:{
		// 			items:2,
		// 			autoHeight: false,
		// 			dots: false,
		// 			stagePadding: 45,
		// 		}
		// 	}
		// });

		// AOS.init({
		// 	disable : 'mobile',
		// 	once: true,
		// 	duration: 1000,
		// 	offset : -200,
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

	time: function() {
		Date.prototype.daysInMonth = function () {
			return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
		};
		
		if (!String.prototype.padStart) {
			String.prototype.padStart = function padStart(targetLength, padString) {
				targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
				padString = String((typeof padString !== 'undefined' ? padString : ' '));
				if (this.length > targetLength) {
					return String(this);
				}
				else {
					targetLength = targetLength - this.length;
					if (targetLength > padString.length) {
						padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
					}
					return padString.slice(0, targetLength) + String(this);
				}
			};
		}

		function getDate(plusDays) {
			var today = new Date();
			var dd = String(today.getDate() + plusDays).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0');
			if (+dd < 0) {
				mm = String(today.getMonth()).padStart(2, '0');
			}
			
			var yyyy = String(today.getFullYear());
			yyyy = yyyy.substr(yyyy.length - 2);
			var currentDaysInMonth = new Date().daysInMonth()
			if (+dd > currentDaysInMonth) {
				dd = String(dd - currentDaysInMonth).padStart(2, '0');
				mm = String(+mm + 1).padStart(2, '0');
			}
			if (+dd < 0) {
				dd = String(currentDaysInMonth + +dd).padStart(2, '0');
			}
			return dd + "." + mm + "." + yyyy
		}

		// $(".date__1").text(getDate(-5));
    	// $(".date__2").text(getDate(2));

		// $(".header__date span").text(getDate(2))
		// $(".card__date .date").text(getDate(2))
		
		// $(".year").text(new Date().getFullYear())
		function timer () {
			function runMultiple(hoursSelector, minutesSelector, secondsSelector) {
				var d = new Date();
				var h = String(23 - d.getHours()).padStart(2, "0");
				var m = String(59 - d.getMinutes()).padStart(2, "0");
				var s = String(60 - d.getSeconds()).padStart(2, "0");
				$(hoursSelector).text(h)
				$(minutesSelector).text(m)
				$(secondsSelector).text(s)
			}
			setInterval(function () {
				runMultiple(".hours", ".minutes", ".seconds")
			}, 1000);
		}
	
		timer()
	},

	quantity: function() {
		
		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}
	
		var currentNumber;

		if(localStorage.getItem("quantity")) {
			$(".header__quantity span").text(localStorage.getItem("quantity"));
		} else {
			currentNumber = 25
			localStorage.setItem("quantity", currentNumber)
			$(".header__quantity span").text(currentNumber);
		}

		setInterval(function () {
			currentNumber = localStorage.getItem("quantity");
			if (currentNumber >= 3) {
				currentNumber = currentNumber - getRandomInt(3);
				$(".header__quantity span").text(currentNumber);
				localStorage.setItem("quantity", currentNumber)
			} else {
				currentNumber = 25;
				localStorage.setItem("quantity", currentNumber)
			}
		}, 100000)
	},

	modal: function() {
		function modal() {
			$(".add__review").click(function () {
				$(".modal__review").addClass("active")
			})
	
			function close() {
				$(".modal__review").removeClass("active")
			}
	
			$(".modal__review").click( function(e) {
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
	
			$(".modal__review .input__file").on("change", function () {
				readURL(this);
			});
	
			$(".modal__review form").submit(function (e) {
				e.preventDefault()
				$(this).removeClass("active");
				$(".send__window").addClass("active");
				$(".modal__review .name__input").val("")
				$(".modal__review .modal__area").val("")
				$(".modal__review .file img").attr("src", "").css("display", "none")
				delayClose()
			})
			function delayClose() {
				setTimeout(function () {
					$(".modal__review form").addClass("active");
					$(".send__window").removeClass("active");
					close();
				}, 5000);
			}
		}
	
		modal()
	},

	galary: function() {
		function carousel(selector, btnSelector) {
			var acarousel = $(selector).acarousel();
	
			function changeActive(move) {
				var index = acarousel.getPos(move).index;
				$(btnSelector + " .move").removeClass("active").eq(index).addClass("active");
			}
			changeActive();
	
			$(btnSelector + " .move").click(function (e) {
				e.preventDefault();
				if (acarousel.isAnim()) return false;
				var index = $(".move").index(this);
				var move = acarousel.moveByIndex(index);
				changeActive(move);
				return false;
			});
	
	
			$(selector).swipeleft(function(e) {
				if (acarousel.isAnim()) return false;
				var move = acarousel.move(-1);
				changeActive(move);
				return false;
			})
	
			$(selector).swiperight(function(e) {
				if (acarousel.isAnim()) return false;
				var move = acarousel.move(1);
				changeActive(move);
				return false;
			})

			$(btnSelector + " .move__back").click(function () {
				if (acarousel.isAnim()) return false; 
				var move = acarousel.move(1);
				changeActive(move);
				return false;
			});
				
			$(btnSelector + " .move__next").click(function () {
				if (acarousel.isAnim()) return false; 
				var move = acarousel.move(-1);
				changeActive(move);
				return false;
			});
	
			// var interval = setInterval(function () {
			// 	if($(window).width() > 700) {
			// 		if (acarousel.isAnim()) return false;
			// 		var move = acarousel.move(-1);
			// 		changeActive(move);
			// 		return false;
			// 	}
			// }, 5000)
	
			// $(selector).mouseenter(function() {
			// 	clearInterval(interval)
			// })
	
			// $(selector).mouseleave(function() {
			// 	interval = setInterval(function () {
			// 		if($(window).width() > 700) {
			// 			if (acarousel.isAnim()) return false;
			// 			var move = acarousel.move(-1);
			// 			changeActive(move);
			// 			return false;
			// 		}
			// 	}, 5000)
			// })
	
			$(window).resize(function () {
				acarousel.init();
			});
		}

		$(".galary__slider img").on("dragstart", function(e) {
			e.preventDefault();
		});
	
		carousel(".galary__block-1 .galary__slider", ".galary__block-1 .move__mark");
		carousel(".galary__block-2 .galary__slider", ".galary__block-2 .move__mark");
	},

	paralax: function() {
		var scenesParallax = [];

		mQ("(max-width: 1023px)", function () {
			if (!scenesParallax.length) return
			scenesParallax.forEach(function (scene) {
				scene.disable();
				scene.element.removeAttribute('style');
			})
		}, 

		function () {
			if (scenesParallax.length === 0) {
				$('.parallax').each(function (i) {
					scenesParallax[i] = new Parallax($(this).children('div').attr('data-depth', randomNum(10, 20)).end().get(0), {
						frictionX: 0.0005,
						frictionY: 0.0005,
						invertX: Math.random() >= 0.5,
						invertY: Math.random() >= 0.5
					});
				})
			} else {
				scenesParallax.forEach(function (scene) {
					scene.enable();
				})
			}
		});
	
		function randomNum(min, max) {
			var numLow = min, numHigh = max,
			adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;
			return Math.floor(Math.random() * adjustedHigh) + parseFloat(numLow);
		}
	
		function mQ(mqStr, match, mismatch) {
			var mq = matchMedia(mqStr);
			mq.addListener(widthChange);
			widthChange(mq);
			function widthChange(mq) {
				if (mq.matches) {
					match();
				} else {
					mismatch();
				}
			}
		}
	},

	card: function() {
		function cardImage(selector) {
			function switchBtn(color) {
				$(selector + " .modal__img").each(function() {
					var link = $(this).data(color); 
					$(this).hide().attr("src", link).fadeIn(500)
				})
			}
	
			$(selector + " .modal__btn").click(function() {
				$(selector + " .modal__btn").removeClass("active")

				switchBtn($(this).data("color"))

				$(this).addClass("active")
			})
		}

		cardImage(".modal__form-block")
	
		// if ($(window).width() <= 1000) {
		// 	$(".card__right-block").each(function (index, item) {
		// 		var currentCard = $(item).closest(".card");
		// 		currentCard.prepend($(item))
		// 	})
		// } else {
		// 	$(".card .card__right-block").each(function (index, item) {
		// 		var currentCard = $(item).closest(".card");
		// 		var cardInfo = $(this).closest(".card").find(".card__right");
		// 		cardInfo.prepend($(item))
		// 	})
		// }
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

