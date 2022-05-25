var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.quantity()
		this.modal()
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

		$.raty.path = $("body").data("path") + 'img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
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

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},

	quantity: function() {
		
		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}
	
		var currentNumber;

		if(localStorage.getItem("quantity")) {
			$(".header__info-text span").text(localStorage.getItem("quantity") + " шт.");
		} else {
			currentNumber = 25
			localStorage.setItem("quantity", currentNumber)
			$(".header__info-text span").text(currentNumber + " шт.");
		}

		setInterval(function () {
			currentNumber = localStorage.getItem("quantity");
			if (currentNumber >= 3) {
				currentNumber = currentNumber - getRandomInt(3);
				$(".header__info-text span").text(currentNumber + " шт.");
				localStorage.setItem("quantity", currentNumber)
			} else {
				currentNumber = 25;
				localStorage.setItem("quantity", currentNumber)
			}
		}, 100000)
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

