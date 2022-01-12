var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
		this.time()
		this.galary()
	}, 

	initLibraris: function() {

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
			nav : false,
			dots: true,
			dotsEach: true,
			items: 3,
			margin: 33,
			autoHeight: false,
			responsive:{
				0:{
					items:1,
					autoHeight: true,
				},
				481:{
					items:2,
					autoHeight: false,
				},
				1000: {
					items:3,
					autoHeight: false,
				}
			}
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
	
			var interval = setInterval(function () {
				if($(window).width() > 700) {
					if (acarousel.isAnim()) return false;
					var move = acarousel.move(-1);
					changeActive(move);
					return false;
				}
			}, 5000)
	
			$(selector).mouseenter(function() {
				clearInterval(interval)
			})
	
			$(selector).mouseleave(function() {
				interval = setInterval(function () {
					if($(window).width() > 700) {
						if (acarousel.isAnim()) return false;
						var move = acarousel.move(-1);
						changeActive(move);
						return false;
					}
				}, 5000)
			})
	
			$(window).resize(function () {
				acarousel.init();
			});
		}
	
		carousel(".galary", ".move__mark");
	},

	card: function() {
		function cardSlider (selector) {
			var owl = $(".card__slider").owlCarousel({
				items: 1,
				margin: 100,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				animateOut: 'fadeOut',
			});
	
			$(selector + " .card__color").each(function() {
				$(this).click(function() {
					$(selector + " .card__color").removeClass("not")
					$(selector + " .card__color").removeClass("active")

					var color = $(this).data("color");
					$(".card__info-color").text(color)

					var availTrue = $(".card__availability").data("avail-true");
					var availFalse = $(".card__availability").data("avail-false");
					
					$(".card__availability").text(availTrue)

					var position = $(this).data("slide") - 1
					owl.trigger("to.owl.carousel", [position, 300])
					$(this).addClass("active")

					if($(this).data("avail") == false) {
						$(this).addClass("not")
						$(".card__availability").text(availFalse)
					}
				})
			})
		}
	
		cardSlider(".card__1")

		$(".card__size").click( function() {
			$(".card__size").removeClass("active");
			$(this).addClass("active");
		})
		
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

		$(".date__1").text(getDate(-5));
    	$(".date__2").text(getDate(2));

		// $(".year").text(new Date().getFullYear())
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

