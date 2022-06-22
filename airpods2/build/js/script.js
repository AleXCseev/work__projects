var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 50;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		$(".card__slider").owlCarousel({
			items: 1,
			margin: 20,
			dots: true,
			nav: false,
			loop: true,
		});

		$(".review__slider").owlCarousel({
			items: 1,
			margin: 20,
			dots: true,
			nav: false,
			loop: true,
			autoHeight: true,
		});

		$(window).scroll(function() {
			if($(window).scrollTop() >= 1100) {
				$(".fixed__block").addClass("fixed")
			} else {
				$(".fixed__block").removeClass("fixed")
			}
		});

		function showBtn() {
			var $element = $('.card');
			$(window).scroll(function() {
				// $(".site__order-btn").addClass('active');
				var scroll = $(window).scrollTop() + $(window).height();
				var offset = $element.offset().top + $element.height();

				if($(window).scrollTop() >= 1100) {
					if (scroll > offset + 500 || scroll < offset - $element.height() - 200 ) {
						$(".fixed__block").addClass("fixed")
					} else {
						$(".fixed__block").removeClass("fixed")
					}

				} else {
					$(".fixed__block").removeClass("fixed")
				}

				
			});
		}
	
		showBtn()

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

		function timer () {
			function runMultiple(hoursSelector, minutesSelector, secondsSelector, milisecondsSelector) {
				var d = new Date();
				var h = String(23 - d.getHours()).padStart(2, "0");
				var m = String(59 - d.getMinutes()).padStart(2, "0");
				var s = String(60 - d.getSeconds()).padStart(2, "0");
				// var ms = String(1000 - d.getMilliseconds()).padStart(3, "0");
				$(hoursSelector).text(h)
				$(minutesSelector).text(m)
				$(secondsSelector).text(s)
				// $(milisecondsSelector).text(ms)
			}
			setInterval(function () {
				runMultiple(".hours", ".minutes", ".seconds")
			}, 1000);
		}
	
		timer()

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

		$(".card__date span").text(getDate(2))
		$(".review__date-1").text(getDate(0));
		$(".review__date-2").text(getDate(-1));
		$(".review__date-3").text(getDate(-2));
	},

}

$(document).ready(function() {
	landingFunctions.init();
});

