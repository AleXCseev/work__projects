var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
		this.time()
		this.galary()
		this.bar()
		this.modal()
		this.header()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			// var cardHeight = $("#bar").outerHeight(false)
			// var windowHeight = $(window).height()
	

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		$.raty.path = 'img/raty';

		$('.modal__raiting').raty({
			half: false,
			space: false,
			number: 5,
		});

		$(".review__slider").owlCarousel({
			loop: true,
			nav : true,
			dots: false,
			items: 1,
			margin: 50,
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

	header: function() {
		function headerAnimate() {
			$(".header__boot").each(function() {
				if($(this).hasClass("boot__active")) {
					$(this).removeClass("boot__active").addClass("boot__left")
					return
				}
				if($(this).hasClass("boot__left")) {
					$(this).removeClass("boot__left").addClass("boot__right")
					return
				}
				if($(this).hasClass("boot__right")) {
					$(this).removeClass("boot__right").addClass("boot__active")
					return
				}
			})
		}

		setInterval(headerAnimate , 4000)
	},

	galary: function() {
		function galary(selector) {
			function toggleActiveSlider(string) {
				$(selector + " .galary__column img").each(function() {
					var path = $(this).attr("data-" + string);
					$(this).hide().attr("src", path).fadeIn(500)
					$(this).parent().attr("href", path)
				})
			}
	
			$(selector + " .galary__nav-item").click(function () {
				if($(this).hasClass("active")) {
					return false
				}
				$(selector + " .galary__nav-item").removeClass("active")
				toggleActiveSlider($(this).data("color"));
				$(this).addClass("active")
			})
		}
	
		galary(".galary__wrapper")

		if($(window).width() <= 1000) {
			$(".galary").addClass("owl-carousel").owlCarousel({
				loop: true,
				nav : false,
				dots: false,
				items: 1,
				margin: 50,
			});
		}
	},

	bar: function() {
		if(localStorage.getItem("lotery")) {
			$(".discount__block").addClass("discount__opacity")
			$(".discount__active").removeClass("discount__opacity")
			$(".main__second-block").show()
		}
		
		$(".start").click(function() {
			if(!localStorage.getItem("lotery")) {
				localStorage.setItem("lotery", true);
				$(".discount__line").addClass("active");

				setTimeout(function() {
					$(".discount__block").addClass("discount__opacity")
					$(".discount__active").removeClass("discount__opacity")
				}, 10000)

				setTimeout(function() {
					$(".main__second-block").show()
					$([document.documentElement, document.body]).animate({
						scrollTop: $("#card").offset().top
					}, 1200)
					
				}, 12000)
			}
			
		})
	},

	card: function() {
		function galary(selector) {
			var galaryFotosSelector = selector + " .card__foto-wrapper img";
			var galaryMainFotosSelector = selector + " .card__boot";
	
			function toggleDataSrcAtribute(string) {
				$(galaryFotosSelector).each(function () {
					$(this).parent().hide()
					$(this).parent().attr("href", $(this).attr("data-" + string))
					$(this).attr("src",  $(this).attr("data-" + string))
					$(this).parent().fadeIn(1000);

					$(galaryMainFotosSelector)
						.hide()
						.attr("src",  $(galaryMainFotosSelector).attr("data-" + string))
						.fadeIn(1000);
				})
			}
	
			$(selector + " .color__btn").click(function () {
				if($(this).hasClass("active")) {
					return false
				}
				
				$(selector + " .color__btn").removeClass("active")
				var color = $(this).data("color")
				$(this).addClass("active")
				toggleDataSrcAtribute(color)

				var text = $(selector + " .card__title").attr("data-" + color)

				$(selector + " .card__title").hide().text(text).fadeIn(1000);
				// console.log(text)
			})
		}

		galary(".card__2")
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
				mm++
			}
			if (+dd < 0) {
				dd = String(currentDaysInMonth + +dd).padStart(2, '0');
			}
			return dd + "." + mm + "." + yyyy
		}

		$(".date__1").text(getDate(-5));
    	$(".date__2").text(getDate(2));

		// $(".header__discount span").text(getDate(2));

		// $(".year").text(new Date().getFullYear())
	},

	modal: function() {
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
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

