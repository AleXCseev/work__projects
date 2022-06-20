var landingFunctions = {
	init: function() {
		this.initLibraris()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = -20;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if($(window).scrollTop() >= 135) {
				$(".header__main").addClass("fixed")
			} else {
				$(".header__main").removeClass("fixed")
			}
		});

		// function showBtn() {
		// 	var $element = $('.card');
		// 	$(window).scroll(function() {
		// 		// $(".site__order-btn").addClass('active');
		// 		var scroll = $(window).scrollTop() + $(window).height();
		// 		var offset = $element.offset().top + $element.height();
		
		// 		if (scroll > offset + 0 || scroll < offset - $element.height() - 100 ) {
		// 			$(".header__main").show(100);
		// 		} else {
		// 			$(".header__main").hide(100)
		// 		}
		// 	});
		// }
	
		// showBtn()

		$('.header__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.header__subslider'
		});

		$('.header__subslider').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.header__slider',
			arrows: true,
			dots: false,
			centerMode: false,
			focusOnSelect: true
		});

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

