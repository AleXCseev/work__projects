var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
		this.time()
		this.modals()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 50;
			var cardHeight = $(".card").outerHeight(false)
			var windowHeight = $(window).height()
	

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		$(".review__slider").owlCarousel({
			loop: true,
			nav : true,
			dots: false,
			dotsEach: false,
			items: 1,
			margin: 20,
		});

		$.raty.path = 'img/raty';

		$('.modal__raiting').raty({
			half: false,
			space: false,
			number: 5,
		});

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

		$(".year").text(new Date().getFullYear())
	},

	card: function() {

		function galary(selector) {
			function toggleActiveSlider(string) {
				$(selector + " .card__slider-block").each(function() {
					$(this).removeClass("active")
					if($(this).hasClass("color-" + string)) {
						$(this).addClass("active")
					} 
				})
			}
	
			$(selector + " .card__color-btn").click(function () {
				$(selector + " .card__color-btn").removeClass("active")
				toggleActiveSlider($(this).data("color"));
				$(this).addClass("active")
			})
		}
	
		galary(".card__1")
		galary(".card__2")
		galary(".card__3")

		function cardSlider (selector) {
			
			var owl = $(selector + " .card__slider").addClass("owl-carousel").owlCarousel({
				items: 1,
				margin: 100,
				dots: false,
				nav: true,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				animateOut: 'fadeOut',
			});
	
			$(selector + " .card__foto").each(function() {
				$(this).click(function() {
					// $(selector + " .card__foto").removeClass("active")
					var position = $(this).data("slide") - 1
					owl.trigger("to.owl.carousel", [position, 300])
					// $(this).addClass("active")
				})
			})

			// $(selector + " .owl-next").click(function() {
			// 	var total = $(selector + " .card__slider-block.active .card__foto").last().data("slide")

			// 	if($(selector + " .card__slider-block.active .card__foto.active").data("slide") === total) {
			// 		$(selector + " .card__slider-block.active .card__foto.active").removeClass("active")
			// 		$(selector + " .card__slider-block.active .card__foto").first().addClass("active")
			// 	} else {
			// 		$(selector + " .card__slider-block.active .card__foto.active").removeClass("active").next().addClass("active")
			// 	}
			// })

			// $(selector + " .owl-prev").click(function() {
			// 	var total = $(selector + " .card__slider-block.active .card__foto").first().data("slide")

			// 	if($(selector + " .card__slider-block.active .card__foto.active").data("slide") === total) {
			// 		$(selector + " .card__slider-block.active .card__foto.active").removeClass("active")
			// 		$(selector + " .card__slider-block.active .card__foto").last().addClass("active")
			// 	} else {
			// 		$(selector + " .card__slider-block.active .card__foto.active").removeClass("active").prev().addClass("active")
			// 	}
			// })
		}
	
		cardSlider(".card__1")
		cardSlider(".card__2")
		cardSlider(".card__3")
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
			// yyyy = yyyy.substr(yyyy.length - 2);
			var currentDaysInMonth = new Date().daysInMonth()
			if (+dd > currentDaysInMonth) {
				dd = String(dd - currentDaysInMonth).padStart(2, '0');
				mm++
			}
			if (+dd < 0) {
				dd = String(currentDaysInMonth + +dd).padStart(2, '0');
			}
			return dd + "." + mm + "." + yyyy
		}
	
		$(".header__discount span").text(getDate(2));
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

