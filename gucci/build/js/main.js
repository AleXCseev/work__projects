$(function () {

	$(".galary__slider").owlCarousel({
		loop: true,
		nav : true,
		items: 1,
		margin: 20,
		dots: true,
		// stagePadding: 35,
		autoplay:true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		// responsive:{
		// 	290: {
		// 		items: 1,
		// 		stagePadding: 0,
		// 		margin: 40,
		// 		center: true,
		// 		dots: true,
		// 	},
		// 	600: {
		// 		items: 1,
		// 		stagePadding: 35,
		// 		margin: 40,
		// 		center: true,
		// 		dots: true,
		// 	},
		// 	800: {
		// 		margin: 15,
		// 		stagePadding: 10,
		// 	},
		// 	1081: {
		// 		margin: 40,
		// 		stagePadding: 35,
		// 	},
		// 	1440: {
		// 		margin: 70,
		// 	}
		// }
	});

	$(".review__slider").owlCarousel({
		loop: true,
		nav : true,
		items: 3,
		margin: 50,
		dots: true,
		dotsEach: true,
		// stagePadding: 35,
		// autoplay:true,
		// autoplayTimeout: 4000,
		// autoplayHoverPause: true,
		// responsive:{
		// 	290: {
		// 		items: 1,
		// 		stagePadding: 0,
		// 		margin: 40,
		// 		center: true,
		// 		dots: true,
		// 	},
		// 	600: {
		// 		items: 1,
		// 		stagePadding: 35,
		// 		margin: 40,
		// 		center: true,
		// 		dots: true,
		// 	},
		// 	800: {
		// 		margin: 15,
		// 		stagePadding: 10,
		// 	},
		// 	1081: {
		// 		margin: 40,
		// 		stagePadding: 35,
		// 	},
		// 	1440: {
		// 		margin: 70,
		// 	}
		// }
	});

	function lazyloadVideo() {
		var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

		if ("IntersectionObserver" in window) {
			var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(video) {
				if (video.isIntersecting) {
					for (var source in video.target.children) {
					var videoSource = video.target.children[source];
					if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
						videoSource.src = videoSource.dataset.src;
					}
					}
		
					video.target.load();
					video.target.classList.remove("lazy");
					lazyVideoObserver.unobserve(video.target);
				}
				});
			});
		
			lazyVideos.forEach(function(lazyVideo) {
				lazyVideoObserver.observe(lazyVideo);
			});
		}
	}

	lazyloadVideo()

	function addVideoOnPage(selector) {
		$(selector).click(function() {
			$(this).addClass("inactive")
			if ($("video", this).length) {
				return;
			}
			console.log(this)
			var videoId = $(this).data("video");
			var videoSrc =  videoId;
			$(this).append(
				"<video src='" + videoSrc + "' style='object-fit: cover; background-size: cover; width: 100%; height: 100%' preload='auto' playsinline='' autoplay='' loop='' controls=''></video>"
			);
		});
	}

	addVideoOnPage(".galary__video-wrapper1");
	addVideoOnPage(".galary__video-wrapper2");

	// AOS.init({
	// 	disable : 'mobile',
	// 	once: true,
	// 	// offset : -200,
	// });


	// $(window).resize(function() {
	// 	AOS.refresh();
	// })

	$('[data-fancybox]').fancybox({
		loop: true,
		infobar: false,
		animationEffect: false,
	});

	$('[href*="#"]').on('click', function (e) {
		var fixedOffset = 0;
		var cardHeight = $("#card").outerHeight(false)
		var windowHeight = $(window).height()

		$('html, body')
			.stop()
			.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
		e.preventDefault();
	});
	
	function cardImage(selector) {
		function switchBtn(color) {
			$(selector + " .galary__photo").each(function() {
				var galary = $(this).attr("data-" + color);
				$(this).hide().attr("src", galary).fadeIn(300)
				$(this).parent().attr("href", galary)
			})
		}

		$(selector + " .color__btn").click(function() {
			$(selector + " .color__btn").removeClass("active")
			if($(this).hasClass("blue")) {
				switchBtn("blue")
			}
			if($(this).hasClass("red")) {
				switchBtn("red")
			}
			if($(this).hasClass("black")) {
				switchBtn("black")

			}
			$(this).addClass("active")
		})
	}

	cardImage(".card__1")
	cardImage(".card__2")
	cardImage(".card__3")

})

