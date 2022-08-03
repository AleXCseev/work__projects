var landingFunctions = {
	init: function() {
		this.initLibraris()
		// this.time()
		this.modal()
		this.card()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 20;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()
			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})
		
		var owl = $(".header__slider").owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			dotsEach: true,
			items: 1,
			margin: 0,
			autoHeight: false,
			smartSpeed: 800,
			autoplay: true,
			autoplayTimeout: 10000,
			autoplayHoverPause: false,
		});

		$(".slide-next").click(function () {
			owl.trigger("next.owl.carousel");
		});

		$(".slide-prev").click(function () {
			owl.trigger("prev.owl.carousel");
		});

		$(".header__btn-slide").click(function () {
			owl.trigger("next.owl.carousel");
		});

		$(".review__slider").owlCarousel({
			loop: true,
			nav: true,
			dots: true,
			dotsEach: true,
			items: 1,
			margin: 50,
			stagePadding: 20,
			autoHeight: false,
		});

		$.raty.path = $("body").data("path") +  '/img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
		});

		AOS.init({
			disable : 'mobile',
			once: true,
			duration: 1000,
			offset : -200,
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
			if (+dd == 0) {
				dd = "01"
			}
			return dd + "." + mm + "." + yyyy
		}

		$(".date__1").text(getDate(-5));
    	$(".date__2").text(getDate(2));

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
					console.log(reader)
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

	card: function() {
		function galary(selector) {
			function toggleDataSrcAtribute(string) {
				$(selector + " .card__boot")
					.hide()
					.attr("src",  $(selector + " .card__boot").attr("data-" + string))
					.fadeIn(1000)
				$(selector + " .card__photo-wrapper img").each(function() {
					$(this).parent().attr("href",  $(this).attr("data-" + string))
					$(this)
						.hide()
						.attr("src",  $(this).attr("data-" + string))
						.fadeIn(1000)
				})
			}
	
			$(selector + " .card__color-btn").click(function () {
				var color = $(this).data("color")
				toggleDataSrcAtribute(color)

				$(selector + " .card__color-btn").removeClass("active")
				$(this).addClass("active")

				var price = $(this).data("price")
				$(selector + " .new__price").text(price)
			})
		}
	
		galary(".card__2")
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

