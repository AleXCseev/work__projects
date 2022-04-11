var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.card()
		this.modal()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = -20;
			var cardHeight = $("#card").outerHeight(false)
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
			dots: false,
			items: 1,
			margin: 50,
			mouseDrag: false,
			touchDrag: false,
			// autoHeight: true,
		})

		if($(window).width() <= 540) {
			$(".header__advantages").addClass("owl-carousel").owlCarousel({
				loop: true,
				nav : false,
				dots: true,
				items: 1,
				margin: 30,
			})
		}

		if($(window).width() <= 540) {
			$(".advantages").addClass("owl-carousel").owlCarousel({
				loop: true,
				nav : false,
				dots: true,
				items: 1,
				margin: 30,
			})
		}

		var owl = $(".review__photo-slider").owlCarousel({
			loop: true,
			nav : false,
			dots: false,
			items: 3,
			margin: 15,
			mouseDrag: false,
			touchDrag: false,
			autoWidth: true,
			onInitialized: addSliderClass,
			onTranslate: addSliderClass,
			responsive:{
				0:{
					margin: 52,
				},
				1000:{
					margin: 10,
				}
			}
		})

		function addSliderClass(event) {
			var element = $(event.target);
			var idx = event.item.index;
			element.find('.owl-item.big').removeClass('big');
			element.find('.owl-item').eq(idx).addClass('big');
		}

		$(".review__slider .owl-prev").click( function() {
			owl.trigger('prev.owl.carousel');
		})

		$(".review__slider .owl-next").click( function() {
			owl.trigger('next.owl.carousel');
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
			return dd + "." + mm + "." + yyyy
		}


		$(".header__date span").text(getDate(2))
	},

	card: function() {

		$(".card__slider").owlCarousel({
			items: 1,
			margin: 100,
			dots: false,
			nav: true,
			loop: true,
			responsive:{
				0:{
					nav: false,
					dots: true,
				},
				1000:{
					nav: true,
					dots: false,
				}
			}
		});

		function switchBtns(selector) {
			$(selector + " .card__size-btn").click(function () {
				$(selector + " .card__size-btn").removeClass("active")
				$(this).addClass("active");
			})
		}
	
		switchBtns(".card__1");
		switchBtns(".card__2");
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
}

$(document).ready(function() {
	landingFunctions.init();
});

