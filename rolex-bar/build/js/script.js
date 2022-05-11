var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.bar()
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
			function runMultiple(hoursSelector, minutesSelector, secondsSelector, milisecondsSelector) {
				var d = new Date();
				var h = String(23 - d.getHours()).padStart(2, "0");
				var m = String(59 - d.getMinutes()).padStart(2, "0");
				var s = String(60 - d.getSeconds()).padStart(2, "0");
				var ms = String(1000 - d.getMilliseconds()).padStart(3, "0");
				$(hoursSelector).text(h)
				$(minutesSelector).text(m)
				$(secondsSelector).text(s)
				$(milisecondsSelector).text(ms)
			}
			setInterval(function () {
				runMultiple(".hours", ".minutes", ".seconds", ".miliseconds")
			}, 48);
		}
	
		timer()
	},

	bar: function() {
		function scrollBar(selector, center) {
			$(selector + " .bar__item").each(function(item) {
				if($(this).hasClass("bar__item-top-opacity")) {
					$(this).removeClass("bar__item-top-opacity")
					$(this).addClass("bar__item-top")
				} else if($(this).hasClass("bar__item-top")) {
					$(this).removeClass("bar__item-top")
					$(this).addClass("bar__item-center")
				} else if($(this).hasClass("bar__item-center")) {
					$(this).removeClass("bar__item-center")
					$(this).addClass("bar__item-bottom")
				} else if($(this).hasClass("bar__item-bottom")) {
					$(this).removeClass("bar__item-bottom")
					$(this).addClass("bar__item-bottom-opacity")
				} else if($(this).hasClass("bar__item-bottom-opacity")) {
					$(this).removeClass("bar__item-bottom-opacity")
					$(this).addClass("bar__item-top-opacity")
				}
			}) 
		}

		function scrollStop(selector) {
			setTimeout(function() {
				var el = $(".bar__column__1 .bar__item-active").html()
				$(".bar__item-center").empty().append(el)
				$(".bar__item-center").addClass("scale");
			}, 200)
		}
		
		var interval = 0
		var status = true
		var count = 1

		$(".order__btn-start").click(function() {
			if(count !== 4) {
				if(status) {
					$(".divider__horizontal").fadeOut(300)
	
					interval = setInterval(function() {
						scrollBar(".bar__column")
					}, 300)
	
					$(".start").hide()
					$(".stop").fadeIn(200)
					status = !status
	
				} else if(!status) {
					clearInterval(interval);
					$(".divider__horizontal").fadeIn(300)
	
					if (count == 1) {
						$(".bar__info-text").hide()
						$(".text__2").fadeIn(1000)
						count = 2
					} else if (count == 2) {
						$(".bar__info-text").hide()
						$(".text__3").fadeIn(1000)
						count = 3
					} else if (count == 3) {
						$(".bar__info-text").hide()
						$(".text__4").fadeIn(1000)
						scrollStop()
						count = 4
					}
	
					$(".stop").hide()
					$(".start").fadeIn(200)
					status = !status
				}
			}
			if(count === 4) {
				setTimeout(function() {
					$(".timer").hide()
					$(".header__title-main").hide()
					$(".info__section").hide()
					$(".header__logo-main").hide()
					$(".header__hide").fadeIn(1000);

					$([document.documentElement, document.body]).animate(
						{
							scrollTop: $("body").offset().top,
						},
						1000
					);
				}, 4000)
			}
		})
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

