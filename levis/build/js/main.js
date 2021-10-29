var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.modals()
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
		cardSlider(".card__2")


		$(".galary__slider").owlCarousel({
			loop: true,
			nav : true,
			dots: true,
			dotsEach: true,
			items: 1,
		})

		$(".review__slider").owlCarousel({
			loop: true,
			nav : true,
			dots: false,
			items: 1,
			margin: 50,
			autoHeight: true,
		})

		$.raty.path = 'img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
		});
	
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

		$(".year").text(new Date().getFullYear())
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
	
}

$(document).ready(function() {
	landingFunctions.init();
});

