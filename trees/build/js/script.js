var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.modal()
	}, 

	initLibraris: function() {

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

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 20;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})


		var owlReview = $(".review__slider").owlCarousel({
			items: 3,
			margin: 7,
			dots: false,
			dotsEach: true,
			nav: false,
			loop: true,
			autoHeight: false,
			stagePadding: 7,
			responsive:{
				0: {
					items:1,
					// autoHeight: true,
					dots: true,
					stagePadding: 0,
					margin: 40,
				},
				700:{
					items:2,
					// autoHeight: false,
					dots: true,
					stagePadding: 7,
					margin: 7,
				},
				1000:{
					items: 3,
					// autoHeight: false,
					dots: false,
					stagePadding: 7,
					margin: 7,
				}
			}
		});

		$('.next__btn').click(function() {
			owlReview.trigger('next.owl.carousel');
		})

		$('.prev__btn').click(function() {
			owlReview.trigger('prev.owl.carousel');
		})

		var owl = $(".header__slider").owlCarousel({
			items: 1,
			margin: 1000,
			dots: false,
			dotsEach: true,
			nav: true,
			loop: true,
			mouseDrag: false,
			touchDrag: false,
			animateOut: 'fadeOut',
			smartSpeed: 0,
		})

		owl.on("changed.owl.carousel", function(e) {
			var index = e.relatedTarget.relative(e.item.index);
			$(this).closest(".header__slider-block").find(".slider__number-current").html(String(index + 1).padStart(2, '0'));
			$(this).closest(".header__slider-block").find(".slider__number").html(String(index + 1).padStart(2, '0'));
		});

		function modalSlider (selector) {
			var owl = $(selector + " .modal__slider").owlCarousel({
				items: 1,
				margin: 1000,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				animateOut: false,
				smartSpeed: 0,
			});
	
			$(selector + " .modal__btn").each(function() {
				$(this).click(function() {
					// $(selector + " .card__foto").removeClass("active")
					var position = $(this).data("slide") - 1
					owl.trigger("to.owl.carousel", [position, 300])
					// $(this).addClass("active")
				})
			})

			$(".card .header__order-btn").click( function() {
				var index = $(this).data("id");

				$(".modal__btn[data-slide='" + index +"']").click()
			})
		}
	
		modalSlider(".modal__form")
		modalSlider(".card__mobile")

		if($(window).width() <= 700) {
			$(".secret__block").addClass("owl-carousel").owlCarousel({
				items: 1,
				margin: 7,
				dots: true,
				dotsEach: true,
				nav: false,
				loop: true,
				autoHeight: true,
				stagePadding: 0,
			});

			$(".advantage2__block").addClass("owl-carousel").owlCarousel({
				items: 1,
				margin: 0,
				dots: true,
				dotsEach: true,
				nav: false,
				loop: true,
				autoHeight: true,
				stagePadding: 0,
			});
		}

		AOS.init({
			disable : 'mobile',
			once: true,
			duration: 1000,
			offset : -200,
		});
	
		$(window).resize(function() {
			AOS.refresh();
		})

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
		
		// if (!String.prototype.padStart) {
		// 	String.prototype.padStart = function padStart(targetLength, padString) {
		// 		targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
		// 		padString = String((typeof padString !== 'undefined' ? padString : ' '));
		// 		if (this.length > targetLength) {
		// 			return String(this);
		// 		}
		// 		else {
		// 			targetLength = targetLength - this.length;
		// 			if (targetLength > padString.length) {
		// 				padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
		// 			}
		// 			return padString.slice(0, targetLength) + String(this);
		// 		}
		// 	};
		// }

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
				mm = String(+mm + 1).padStart(2, '0');
			}
			if (+dd < 0) {
				dd = String(currentDaysInMonth + +dd).padStart(2, '0');
			}
			if (+dd == 0) {
				dd = "01"
			}
			return dd + "." + mm + "." + yyyy
		}

		// $(".date__1").text(getDate(-5));
    	// $(".date__2").text(getDate(2));

		$(".header__info-date span").text(getDate(2))
		// $(".card__date .date").text(getDate(2))
		
		// $(".year").text(new Date().getFullYear())
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
					console.log(reader)
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
}

$(document).ready(function() {
	landingFunctions.init();
});

