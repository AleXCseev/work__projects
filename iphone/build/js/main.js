var landingFunctions = {
	init: function() {
		this.initLibraris()
		// this.modals()
		this.card()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
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
			nav : true,
			dots: false,
			dotsEach: false,
			items: 1,
			margin: 50,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true
			// autoHeight: true,
		});

		$.raty.path = $("body").data("path") + '/img/raty';

		$('.modal__raiting').raty({
			half: false,
			space: false,
			number: 5,
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

	modals: function() {
		function modal() {
			$(".add__review").click(function () {
				$(".modal").addClass("active")
			})
	
			function close() {
				$(".modal").removeClass("active")
			}
	
			$(".modal").click( function(e) {
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
	
			$(".modal .input__file").on("change", function () {
				readURL(this);
			});
	
			$(".modal form").submit(function (e) {
				e.preventDefault()
				$(this).removeClass("active");
				$(".send__window").addClass("active");
				$(".modal .name__input").val("")
				$(".modal .modal__area").val("")
				$(".modal .file img").attr("src", "").css("display", "none")
				delayClose()
			})
			function delayClose() {
				setTimeout(function () {
					$(".modal form").addClass("active");
					$(".send__window").removeClass("active");
					close();
				}, 5000);
			}
		}
	
		modal()
	
		function privacy() {
			$(".confidantion").click(function () {
				$(".privacy-policy-popup").addClass("active")
			})
	
			function close() {
				$(".privacy-policy-popup").removeClass("active")
			}
	
			$(".privacy-policy-popup").click( function(e) {
				var target = e.target;
				if(target.classList.contains("privacy__close")) {
					close()
				}
				if(target.classList.contains("privacy-policy-popup")) {
					close()
				}
			})
		}
	
		privacy()
	},

	card: function() {

		$(".card__slider").owlCarousel({
			loop: true,
			nav : false,
			dots: true,
			dotsEach: true,
			items: 1,
			margin: 30,
		});

		function openForm(selector) {
			var openBtn = $(selector + " .open__form")
			var form = $(selector + " .card__form")

			openBtn.click(function() {
				$(this).hide()
				form.fadeIn(300)
			})
		}

		openForm(".card__1")
		openForm(".card__2")
		openForm(".card__3")

		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}

		function quantity(selector, number) {
			var currentNumber;
	
			if(localStorage.getItem(selector)) {
				$(selector + " .card__quantity span").text(localStorage.getItem(selector));
			} else {
				currentNumber = number
				localStorage.setItem(selector, currentNumber)
				$(selector + " .card__quantity span").text(currentNumber);
			}
	
			setInterval(function () {
				currentNumber = localStorage.getItem(selector);
				if (currentNumber >= 3) {
					currentNumber = currentNumber - getRandomInt(3);
					$(selector + " .card__quantity span").text(currentNumber);
					localStorage.setItem(selector, currentNumber)
				} else {
					currentNumber = number;
					localStorage.setItem(selector, currentNumber)
				}
			}, 100000)
		}
	
		quantity(".card__1", 25)
		quantity(".card__2", 22)
		quantity(".card__3", 28)

	},
}

$(document).ready(function() {
	landingFunctions.init();
});

