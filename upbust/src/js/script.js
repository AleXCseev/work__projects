var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		// this.modal()
		// this.card()
		// this.galary()
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

		var info = [
			{
				name: "Eka Agustin",
				time: "16 menit yang lalu",
			},
			{
				name: "Manda Putriana",
				time: "8 menit yang lalu",
			},
			{
				name: "Ranny Kusuma",
				time: "10 menit yang lalu",
			},
			{
				name: "Rahma Mustika",
				time: "12 menit yang lalu",
			},
			{
				name: "Dony Hermawan",
				time: "15 menit yang lalu",
			},
			{
				name: "Melisa Karim",
				time: "3 menit yang lalu",
			},
		]

		var index = 0;

		function fixed () {
			var block = $(".fixed__block");

			if(index >= info.length) {
				index = 0
			}

			block.addClass("show")

			$(".fixed__name").text(info[index].name)
			$(".fixed__time").text(info[index].time)

			index++

			setTimeout( function() {
				block.removeClass("show")
			}, 6000)
		}

		
		setInterval( function () {
			fixed()
		}, 10000)

		// for (var i = 0; i < info.length; i++) {
		// 	fixed(info[i])
		// }
		
		// $(".review__slider").owlCarousel({
		// 	loop: true,
		// 	nav: true,
		// 	dots: false,
		// 	dotsEach: true,
		// 	items: 2,
		// 	margin: 72,
		// 	autoHeight: false,
		// 	responsive:{
		// 		0:{
		// 			items: 1,
		// 			autoHeight: true,
		// 		},
		// 		1025:{
		// 			items: 2,
		// 			autoHeight: false,
		// 		}
		// 	}
		// });

		// function showBtn() {
		// 	var $element = $('.card');
		// 	$(window).scroll(function() {
		// 		var scroll = $(window).scrollTop() + $(window).height();
		// 		var offset = $element.offset().top + $element.height();

		// 		if (scroll + 100 >= $(document).outerHeight(true)) {
		// 			$(".fixed__block").removeClass("fixed")
		// 		} else if (scroll > offset + 500 || scroll < offset - $element.height() - 200 ) {
		// 			if(scroll > 1300) {
		// 				$(".fixed__block").addClass("fixed")
		// 			} else {
		// 				$(".fixed__block").removeClass("fixed")
		// 			}
		// 		} else {
		// 			$(".fixed__block").removeClass("fixed")
		// 		}
		// 	});
		// }
	
		// showBtn()

		// var owl = $(".modal__slider").owlCarousel({
		// 	items: 1,
		// 	margin: 100,
		// 	dots: false,
		// 	nav: false,
		// 	loop: true,
		// 	mouseDrag: false,
		// 	touchDrag: false,
		// 	// animateOut: 'fadeOut',
		// });

		// $(".modal__color").each(function() {
		// 	$(this).click(function() {
		// 		$(".modal__color").removeClass("active");
		// 		var position = $(this).data("slide") - 1;
		// 		owl.trigger("to.owl.carousel", [position, 300]);
		// 		$(this).addClass("active");

		// 		var price = $(this).data("price");
		// 		$(".modal__price .new__price").text(price)
		// 	})
		// })
		
	

		// if($(window).width() <= 700) {
		// 	$(".galary").addClass("owl-carousel").owlCarousel({
		// 		loop: true,
		// 		nav: true,
		// 		dots: true,
		// 		dotsEach: true,
		// 		items: 1,
		// 		margin: 50,
		// 	});
		// }
	
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


		// $(".date__1").text(getDate(-5));
    	$(".info__date").text(getDate(0));
		$(".card__date").text(getDate(0));

		// $(".header__date span").text(getDate(2))
		// $(".card__date .date").text(getDate(2))
		
		// $(".year").text(new Date().getFullYear())
	},

	modal: function() {
		function modal() {
			$(".card__btn").click(function() {
				$(".modal__block-wrapper").addClass("show");
				$("body").css("overflow", "hidden");
				var color = $(this).data("card");

				$("." + color).click()
			})

			function close() {
				$(".modal__block-wrapper").removeClass("show");
				$("body").css("overflow", "auto");
			}
	
			$(".modal__block-wrapper").click( function(e) {
				var target = e.target;
				if(target.classList.contains("close")) {
					close()
				}
				if(target.classList.contains("modal__block-wrapper")) {
					close()
				}
			})

			// $(".add__review").click(function () {
			// 	$(".modal__review").addClass("active")
			// })
	
			// function close() {
			// 	$(".modal__review").removeClass("active")
			// }
	
			// $(".modal__review").click( function(e) {
			// 	var target = e.target;
			// 	if(target.classList.contains("modal__close")) {
			// 		close()
			// 	}
			// 	if(target.classList.contains("modal")) {
			// 		close()
			// 	}
			// })
	
			// function readURL(input) {
			// 	if (input.files && input.files[0]) {
			// 		var reader = new FileReader();
			// 		console.log(reader)
			// 		reader.onload = function (e) {
			// 			$('.file img').attr('src', e.target.result).css("display", "block");
			// 		};
			// 		reader.readAsDataURL(input.files[0]);
			// 	}
			// }
	
			// $(".modal__review .input__file").on("change", function () {
			// 	readURL(this);
			// });
	
			// $(".modal__review form").submit(function (e) {
			// 	e.preventDefault()
			// 	$(this).removeClass("active");
			// 	$(".send__window").addClass("active");
			// 	$(".modal__review .name__input").val("")
			// 	$(".modal__review .modal__area").val("")
			// 	$(".modal__review .file img").attr("src", "").css("display", "none")
			// 	delayClose()
			// })
			// function delayClose() {
			// 	setTimeout(function () {
			// 		$(".modal__review form").addClass("active");
			// 		$(".send__window").removeClass("active");
			// 		close();
			// 	}, 5000);
			// }
		}
	
		modal()
	},

	card: function() {
		function switchBtns(selector) {
			$(selector + " .card__btn").click(function () {
				var size = $(this).data("size")
				$(this).closest(".card__btns").find(".card__btn").removeClass("active")
				$(this).addClass("active");
				$(this).closest(".card__size-block").find(".card__size-text").text(size);
			})
		}
	
		switchBtns(".card");

		if($(window).width() <= 540) {
			$(".card__right").addClass("owl-carousel").owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				dotsEach: true,
				items: 1,
				margin: 20,
				// mouseDrag: false,
				// touchDrag: false,
			});
	
		}
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

