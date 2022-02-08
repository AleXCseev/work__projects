var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
		this.time()
	}, 

	initLibraris: function() {
		// objectFitImages()

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = -20;
			// var cardHeight = $(".card").outerHeight(false)
			// var windowHeight = $(window).height()
	

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		var owl = $(".review__slider").owlCarousel({
			loop: true,
			nav : false,
			dots: true,
			items: 1,
			margin: 0,
			center: true,
			// autoHeight: false,
			autoWidth: true,
			responsive:{
				0: {
					items: 1,
					center: false,
					autoWidth: false,
				},
				701: {
					items: 1,
					center: true,
					autoWidth: true,
				},
			}
		});

		$('.review__btn-prev').click(function() {
			owl.trigger('prev.owl.carousel');
		})

		$('.review__btn-next').click(function() {
			owl.trigger('next.owl.carousel');
		})

		if($(window).width() <= 700) {
			$(".advantages").addClass("owl-carousel").owlCarousel({
				loop: true,
				nav : false,
				dots: true,
				items: 1,
				margin: 100,
			})
		}

		AOS.init({
			disable : 'mobile',
			once: true,
			duration: 1000,
			offset : 200,
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

	card: function() {
		function createCard(cardInfo, selector) {
			var card = $(".card__1").clone();
			var path = $("body").data("path");

			card.find(".card__flag").attr("src", path + cardInfo.flag);
			card.find(".card__img").attr("src", path + cardInfo.img);
			card.find(".card__brand").text(cardInfo.brand);
			card.find(".card__name").text(cardInfo.name);
			card.find(".card__description").text(cardInfo.description);
			card.find(".card__volume span").text(cardInfo.volume);
			card.find(".card__manufactur").text(cardInfo.country);

			card.removeClass("card__1 close");
			$(selector).append(card);
		}

		for ( var i = 0; i < womanParfums.length; i++) {
			createCard(womanParfums[i], ".card__block-woman")
		}

		for ( var i = 0; i < manParfums.length; i++) {
			createCard(manParfums[i], ".card__block-man")
		}

		$(".card").hover(function() {
			$(this).find(".card__info").addClass("active");
		}, function(){
			$(this).find(".card__info").removeClass("active");
		})

		$(".open__form-btn").click(function() {
			$(this).closest(".card").find(".card__form-block").addClass("active");
		})

		$(".card__form-close").click(function() {
			$(this).closest(".card").find(".card__form-block").removeClass("active");
		})

		$(".open__info-btn").click(function() {
			$(this).closest(".card").find(".card__info").addClass("active");
		})

		$(".card__info-close").click(function() {
			$(this).closest(".card").find(".card__info").removeClass("active");
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

