var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
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

		$(".card__slider").owlCarousel({
			loop: true,
			nav : true,
			dots: false,
			dotsEach: false,
			items: 1,
			margin: 20,
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
		$(".card__btn").click(function() {
			var $card = "." + $(this).data("card");

			var $cardTitle = $($card + " .card__title").text();
			var $cardInfo = $($card).find(".card__info").text();

			$(".modal__card .modal__select").css("display", "block");
			$(".modal__card .modal__select-premium").css("display", "none");

			$(".modal__card .modal__select option:first").prop('selected',true);
			$(".modal__card .modal__title").text($cardTitle);
			$(".modal__card .modal__text").text($cardInfo);

			if($(this).data("status") == "premium") {
				$(".modal__card .modal__select").css("display", "none");
				$(".modal__card .modal__select-premium").css("display", "block");
			}

			if($(this).data("status") == "wreath") {
				$(".modal__card .modal__select").css("display", "none");
				$(".modal__card .modal__select-premium").css("display", "none");
			}
		})
		
		function switchColor(selector) {
			$(selector).click(function () {
				$(selector).removeClass("active");
				$(this).addClass("active");
			})
		}
	
		switchColor(".card__5 .color")
		switchColor(".card__6 .color")
		switchColor(".card__7 .color")
		switchColor(".card__8 .color")


		function galary(selector) {
			var galaryFototsSelector = selector + " .card__slide img";
	
			function toggleDataSrcAtribute(string) {
				$(galaryFototsSelector).each(function () {
					if($(this).attr("src") === $(this).attr("data-" + string)) {
						return
					}
					var galary = $(this).attr("data-" + string);
					$(this)
						.hide()
						.attr("src",  galary)
						.fadeIn(1000);
					$(this).parent().attr("href", galary)
				})
			}
	
			$(selector + " .color").click(function () {
				if ($(this).hasClass("green")) {
					toggleDataSrcAtribute("green");
				} 
				if ($(this).hasClass("blue")) {
					toggleDataSrcAtribute("blue");
				}
			})
		}
	
		galary(".card__5")
		galary(".card__6")
		galary(".card__7")
		galary(".card__8")
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

