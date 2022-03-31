var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.modal()
		this.bar()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = -20;
			// var cardHeight = $("#card").outerHeight(false)
			// var windowHeight = $(window).height()
	

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		$.raty.path = $("body").data("path") + 'img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
		});

		function cardSlider (selector) {
			var owl = $(selector + " .card__galary-slider").owlCarousel({
				items: 1,
				margin: 100,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				animateOut: 'fadeOut',
			});
	
			$(selector + " .card__foto").each(function() {
				$(this).click(function() {
					$(selector + " .card__foto").removeClass("active")
					var position = $(this).data("slide") - 1
					owl.trigger("to.owl.carousel", [position, 300])
					$(this).addClass("active")
				})
			})
		}
	
		cardSlider(".card__2")

		var owl = $(".review__slider").owlCarousel({
			items: 3,
			margin: 29,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
			autoHeight: false,
			responsive:{
				0:{
					items:1,
					autoHeight: true,
					nav: true,
				},
				700:{
					items:2,
					autoHeight: false,
					nav: false,
				},
				1000:{
					items:3,
					autoHeight: false,
					nav: false,
				}
			}
		});

		$('.next__btn').click(function() {
			owl.trigger('next.owl.carousel');
		})

		$('.prev__btn').click(function() {
			owl.trigger('prev.owl.carousel');
		})

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
				mm = String(+mm + 1).padStart(2, '0');
			}
			if (+dd < 0) {
				dd = String(currentDaysInMonth + +dd).padStart(2, '0');
			}
			return dd + "." + mm + "." + yyyy
		}

		// $(".date__1").text(getDate(-5));
    	// $(".date__2").text(getDate(2));

		$(".date").text(getDate(2))
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
	bar: function() {
		$("a.header__order-btn").attr("href", "#card");
		var animate = true;
		if (localStorage.getItem("lotery")) {
			$(".galary__section").addClass("active")
			$("a.header__order-btn").attr("href", "#card");
			$(".bar__section-wrapper").hide();
			$(".card__section").show();
			$(".review__section").show();
			animate = false;
		}

		$(".modal__result").click(function(e) {
			if(e.target.classList.contains("modal__result")) {
				$(this).fadeOut(1000);
			}
			if(e.target.classList.contains("modal__result-close")) {
				$(this).fadeOut(1000);
			}
		})

		$(".bar__btn").click(function (e) {
			e.preventDefault();
			if (!localStorage.getItem("lotery")) {
				localStorage.setItem("lotery", true);
				$("a.header__order-btn").attr("href", "#card");
				$(".bar__wrapper").addClass("active__animate");

				setTimeout(function () {
					$(".bar__wrapper").addClass("active");
				}, 8000);

				setTimeout(function () {
					$(".modal__result").fadeIn(1000);
				}, 10000);

				setTimeout(function () {
					$(".bar__section-wrapper").hide();
					$(".galary__section").addClass("active")
					$(".card__section").fadeIn(300);
					$(".review__section").fadeIn(300);
				}, 11000);

				setTimeout(function () {
					animate = false;
					$([document.documentElement, document.body]).animate(
						{
							scrollTop: $("#card").offset().top,
						},
						1200
					);
				}, 11000);
			}

			if (!animate) {
				$([document.documentElement, document.body]).animate(
					{
						scrollTop: $("#card").offset().top,
					},
					1200
				);
			}
		});
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

