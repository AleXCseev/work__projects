var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
		this.time()
	}, 

	initLibraris: function() {
		// objectFitImages()

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 20;
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
			dots: true,
			items: 1,
			margin: 50,
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
	},

	card: function() {
		$(".card__slider").owlCarousel({
			loop: true,
			nav : false,
			dots: false,
			dotsEach: true,
			items: 1,
			margin: 50,
			// autoHeight: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
		})

		$(".card__nav-btn").click(function() {
			$(this).closest(".card").find(".card__nav-btn").removeClass("active");
			$(this).addClass("active");

			if($(this).hasClass("card__btn-characteristic")) {
				$(this).closest(".card").find(".card__characteristic").fadeIn(500);
				$(this).closest(".card").find(".card__info").hide();
				return
			}
			if($(this).hasClass("card__btn-info")) {
				$(this).closest(".card").find(".card__info").fadeIn(500);
				$(this).closest(".card").find(".card__characteristic").hide();
				return
			}
		})

		$(".add__form").click(function() {
			$(this).hide()
			$(this).closest(".card").find(".card__form").fadeIn(500);
		})

		function galary(selector) {
			var galaryFototsSelector = selector + " .card__img";
	
			function toggleDataSrcAtribute(string) {
				$(galaryFototsSelector).each(function () {
					if($(this).attr("src") === $(this).attr("data-" + string)) {
						return
					}
					$(this)
						.hide()
						.attr("src",  $(this).attr("data-" + string))
						.fadeIn(1000)
				})
			}
	
			$(selector + " .card__color").click(function () {
				$(selector + " .card__color").removeClass("active")
				var color = $(this).data("color")
				$(this).addClass("active")
				toggleDataSrcAtribute(color)
			})
		}
	
		galary(".card__2")
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
				mm = String(+mm + 1).padStart(2, "0");
			}
			if (+dd < 0) {
				dd = String(currentDaysInMonth + +dd).padStart(2, '0');
			}
			return dd + "." + mm + "." + yyyy
		}

		$(".date__1").text(getDate(-5));
    	$(".date__2").text(getDate(2));

		$(".header__discount span").text(getDate(2));

		// $(".year").text(new Date().getFullYear())
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

