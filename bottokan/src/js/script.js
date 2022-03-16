var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.quantity()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()
	

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});


		// var owl = $(".review__slider").owlCarousel({
		// 	loop: true,
		// 	nav : false,
		// 	dots: false,
		// 	dotsEach: true,
		// 	items: 1,
		// 	margin: 100,
		// 	autoHeight: false,
		// 	responsive:{
		// 		0:{
		// 			autoHeight: true,
		// 		},
		// 		1000: {
		// 			autoHeight: false,
		// 		}
		// 	}
		// });

		// $('.next__btn').click(function() {
		// 	owl.trigger('next.owl.carousel');
		// })

		// $('.prev__btn').click(function() {
		// 	owl.trigger('prev.owl.carousel');
		// })

		$(".review__slider").owlCarousel({
			loop: true,
			nav : false,
			dots: false,
			dotsEach: true,
			items: 3,
			margin: 28,
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

		$(".header__discount .date").text(getDate(0))
		// $(".card__date .date").text(getDate(2))
		
		// $(".year").text(new Date().getFullYear())
	},

	quantity: function() {
		var currentNumber;

		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}

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
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

