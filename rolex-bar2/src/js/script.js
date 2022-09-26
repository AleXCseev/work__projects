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


		// AOS.init({
		// 	disable : 'mobile',
		// 	once: true,
		// 	duration: 1000,
		// 	offset : -200,
		// });
	
		// $(window).resize(function() {
		// 	AOS.refresh();
		// })

		// $('[data-fancybox]').fancybox({
		// 	loop: true,
		// 	infobar: false,
		// 	animationEffect: false,
		// 	backFocus: false,
		// 	hash: false,
		// });
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
			}, 103);
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
				var el = $(".bar__column__1 .bar__item-active span").text()
				$(".bar__item-center span").addClass("bar__item-logos").text(el)
				$(".bar__item-center").addClass("scale");
			}, 20)
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
					}, 100)
	
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
					$(".info__section-1").hide()
					$(".info__section-2").fadeIn(1000)

					// if($(window).width() > 1000 ) {
					// 	$(".site__wrapper").addClass("active")
					// }

					// $([document.documentElement, document.body]).animate(
					// 	{
					// 		scrollTop: $("body").offset().top,
					// 	},
					// 	1000
					// );
				}, 4000)
			}
		})
	},
}

$(document).ready(function() {
	landingFunctions.init();
	// $(".timer").hide()
	// $(".bar__info").hide()
	// $(".bar").hide()
	// $(".order__btn-start").hide()
	// $(".header__title-header").hide()
	// $(".header__decor").hide()
	// $(".mobile__imgs").hide()
	// $(".header__hide").fadeIn(1000);

});

