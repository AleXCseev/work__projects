var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.quantity()
		this.review()
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
		});

		function endDifDate(countDays) {

			if (countDays || countDays === 0) {
		
				countDays = parseInt(countDays);
		
				const date = new Date(Date.now() - (86400000 * countDays));
				return pad(date.getDate()) + "." + pad(date.getMonth() + 1) + "." + date.getFullYear();
			}
		}
		
		function pad(num) {
			return ("0" + num).substr(-2);
		}

		$(".js-actual-date").each(function (index, item) {
			$(item).html(endDifDate($(item).data("dateEnd")));
		});

		// function handleReviewScroll() {
		// 	const offset = $(window).height() / 3;
		// 	const $holder = $(".reviews");
		
		// 	$(".review").eq(0).hide()
		
		// 	if (getDocumentScrollTop() + $(window).height() >= $holder.offset().top) {
		// 		setTimeout(function() {
		// 			$(".review").eq(0).fadeIn(320);
		// 		}, 640)
		
		// 		window.removeEventListener('scroll', handleReviewScroll);
		// 	}
		// }
		
		// function getDocumentScrollTop() {
		// 	return $(document.scrollingElement || document.documentElement).scrollTop();
		// }

		// handleReviewScroll();
		// window.addEventListener('scroll', handleReviewScroll);

		

		$("body").click(function (e) {
			if ($(e.target).is("p.add-like")) {
				var $currentTarget = $(e.target).is("p.add-like");
	
				var countReviewLike = parseInt($(e.target).closest(".review").find(".rating-like .count").html());
				var reviewRatingCount = $(e.target).closest(".review").find(".rating-like .count");
				if ($(e.target).hasClass("active")) {
					$(e.target).removeClass("active");
					$(e.target).closest(".review").find(".rating-like");
					reviewRatingCount.eq(0).html(countReviewLike - 1);
				} else {
					$(e.target).addClass("active");
					reviewRatingCount.eq(0).html(countReviewLike + 1);
				}
			}
	
			// scroll
	
			if ($(e.target).is("a.js-scroll") || $(e.target).closest(".js-scroll").length > 0) {
				var item = $(e.target).closest(".js-scroll").attr('href'),
					item_offset = $(item).offset().top;
	
				$('html, body').animate({scrollTop: item_offset}, 800);
			}
		});
		
		$(".info__slider").owlCarousel({
			items: 1,
			margin: 20,
			dots: true,
			nav: false,
			loop: true,
			autoHeight: true,
		});

		$(".magazine__slider").owlCarousel({
			items: 1,
			margin: 20,
			dots: true,
			nav: false,
			loop: true,
			autoHeight: true,
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
		var currentNumber;
		var prefix = $(".quantity").data("prefix")

		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}

		if(localStorage.getItem("quantity")) {
			$(".quantity").text(localStorage.getItem("quantity") + " " + prefix);
		} else {
			currentNumber = 25
			localStorage.setItem("quantity", currentNumber)
			$(".quantity").text(currentNumber + " " + prefix);
		}

		setInterval(function () {
			currentNumber = localStorage.getItem("quantity");
			if (currentNumber >= 3) {
				currentNumber = currentNumber - getRandomInt(3);
				$(".quantity").text(currentNumber + " " + prefix);
				localStorage.setItem("quantity", currentNumber)
			} else {
				currentNumber = 25;
				localStorage.setItem("quantity", currentNumber)
			}
		}, 100000)
	},

	review: function() {
		var $path = $("body").data("path")

		$(".form-reviews .comment-info").submit(function (event) {
			event.preventDefault();
			var commentName = $(this).closest(".form-reviews").find('input').val();
			var commentText = $(this).closest(".form-reviews").find('textarea').val();
			var commentNamePlaseholder = $(this).closest(".form-reviews").find('.form-comment--name input').attr("placeholder");
	
			if ($(this).closest(".form-reviews").find('textarea').val().length > 0) {
				if (commentName === "") {
					commentName = commentNamePlaseholder;
				}
	
				var el = "<div class=\"review\">\n" +
					"       <div class=\"review-photo\">\n" +
					"          <img src=\"" + $path + "/img/default-avatar.jpg\" alt=\"img\">\n" +
					"       </div>\n" +
					"       <div class=\"review-body\">\n" +
					"       	<div class=\"review__header\">\n" +
					"          		<div class=\"user-name\"> " + commentName + " </div>\n" +
					"             	<div class=\"review__time\">Saat ini</div>\n" +
					"       	</div>\n" +
					"          <div class=\"review-inner\">" + commentText + "</div>\n" +
					"       </div>\n" +
					" </div>"
	
				$(".reviews").prepend(el);
				$(this).closest(".form-reviews").find('input').val('');
				$(this).closest(".form-reviews").find('textarea').val('');
			}
		});
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

