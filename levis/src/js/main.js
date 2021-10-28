var landingFunctions = {
	init: function() {
		this.initLibraris()
		// this.time()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()
	

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
			e.preventDefault();
		});

		function cardSlider (selector) {
			var owl = $(selector + " .card__galary").owlCarousel({
				items: 1,
				margin: 100,
				dots: false,
				nav: true,
				loop: true,
				// mouseDrag: false,
				// touchDrag: false,
				// animateOut: 'fadeOut',
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
	
		cardSlider(".card__1")
		// cardSlider(".card__2")
		// cardSlider(".card__3")

		// function switchBtns(selector) {
		// 	$(selector + " .card__size-btn").click(function () {
		// 		$(selector + " .card__size-btn").removeClass("active")
		// 		$(this).addClass("active");
		// 	})
		// }
	
		// switchBtns(".card__1");
		// switchBtns(".card__2");
		// switchBtns(".card__3");

		$(".galary__slider").owlCarousel({
			loop: true,
			nav : true,
			dots: true,
			dotsEach: true,
			items: 1,
			// margin: 0,
		})

		// AOS.init({
		// 	disable : 'mobile',
		// 	once: true,
		// 	duration: 600,
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

		// $(".year").text(new Date().getFullYear())

		function getDate(plusDays) {
			var today = new Date();
			var dd = String(today.getDate() + plusDays).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0');
			var yyyy = String(today.getFullYear());
			// yyyy = yyyy.substr(yyyy.length - 2);
			var currentDaysInMonth = new Date().daysInMonth()
			if (+dd > currentDaysInMonth) {
				dd = String(dd - currentDaysInMonth).padStart(2, '0');
				mm++
			}
			return dd + "." + mm + "." + yyyy
		}
	
		$(".discount__info .date span").text(getDate(2));
	},
	
}

$(document).ready(function() {
	landingFunctions.init();
});

