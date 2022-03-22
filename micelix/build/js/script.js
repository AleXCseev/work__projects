var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.quantity()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()
	

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if($(window).scrollTop() >= 173) {
				$(".sidebar__section").addClass("fixed")
			} else {
				$(".sidebar__section").removeClass("fixed")
			}
		});


		// var owl = $(".review__slider").owlCarousel({
		// 	loop: true,
		// 	nav : false,
		// 	dots: false,
		// 	dotsEach: true,
		// 	items: 1,
		// 	margin: 100,
		// 	autoHeight: false,
		// 	responsive:{
		// 		0:{
		// 			autoHeight: true,
		// 		},
		// 		1000: {
		// 			autoHeight: false,
		// 		}
		// 	}
		// });

		// $('.next__btn').click(function() {
		// 	owl.trigger('next.owl.carousel');
		// })

		// $('.prev__btn').click(function() {
		// 	owl.trigger('prev.owl.carousel');
		// })

		// $(".review__slider").owlCarousel({
		// 	loop: true,
		// 	nav : false,
		// 	dots: false,
		// 	dotsEach: true,
		// 	items: 3,
		// 	margin: 28,
		// 	autoHeight: false,
		// 	responsive:{
		// 		0:{
		// 			items: 1,
		// 			autoHeight: true,
		// 			dots: true,
		// 		},
		// 		700:{
		// 			items: 2,
		// 			autoHeight: true,
		// 			dots: false,
		// 		},
		// 		1000: {
		// 			items: 3,
		// 			autoHeight: false,
		// 			dots: false,
		// 		}
		// 	}
		// });

		$(".review-form").submit(function(e) {
			e.preventDefault();
			$(".review-form").hide(320);
			console.log($(".form--message"));
			$(".reviews-message").show(320);
		});
	
		$(".header .menu__toggle-button").click(function(e) {
			e.preventDefault();
			$(".header").toggleClass("menu--opened");
		});
	
		$(".video-inner").click(function() {
	
			$(this).addClass("dis-active")
			if ($("iframe", this).length) {
				return;
			}
	
			var videoId = $(this).data("video");
	
			if (isMobile) {
				var videoElId = "video-" + Date.now();
				$(this).append("<div id='"+videoElId+"'></div>");
	
				var player = new YT.Player(videoElId, {
					videoId: videoId,
					events: {
						onReady: function() {
							player.playVideo();
						}
					}
				});
			} else {
				var videoSrc = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1";
				$(this).append("<iframe src=\""+videoSrc+"\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
			}
		});
	
		$(".js-anim-link").click(function(e) {
			e.preventDefault();
			$([document.documentElement, document.body]).animate({
				scrollTop: $($(this).attr("href")).offset().top
			}, 600)
		});
	
		$(".current-year").html(new Date().getFullYear());
		$(".reviews-count").html("(" + $(".comment").length + ")");
	
		promotionEndDate(1)
		reviewsDate();

		function pad(num) {
			return ("0" + num).substr(-2);
		}
		
		function promotionEndDate(countDays) {
			const date = new Date(Date.now() + (86400000 * countDays));
		
			$(".js-end-date").html(pad(date.getDate()) + "."
				+ pad(date.getMonth() + 1) + "."
				+ pad(date.getFullYear()));
		}
		
		function reviewsDate() {
			$(".review__date").each(function(index, item){
				var countDate = $(item).data("review");
		
				if (countDate >= 0) {
					const day = Date.now() - (countDate * 86400000);
					const date = new Date(day);
					$(item).html((pad(date.getDate()) + "."
						+ pad(date.getMonth() + 1) + "."
						+ pad(date.getFullYear())))
				}
			});
		}

		AOS.init({
			disable : 'mobile',
			once: true,
			duration: 1000,
			// offset : -200,
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
			return dd + "." + mm + "." + yyyy
		}

		// $(".date__1").text(getDate(-5));
    	// $(".date__2").text(getDate(2));

		$(".date").text(getDate(0))
		// $(".card__date .date").text(getDate(2))
		
		// $(".year").text(new Date().getFullYear())
	},

	quantity: function() {
		// var currentNumber;

		// function getRandomInt(max) {
		// 	return Math.floor(Math.random() * Math.floor(max));
		// }

		// if(localStorage.getItem("quantity")) {
		// 	$(".main__quantity span").text(localStorage.getItem("quantity"));
		// } else {
		// 	currentNumber = 25
		// 	localStorage.setItem("quantity", currentNumber)
		// 	$(".main__quantity span").text(currentNumber);
		// }

		// setInterval(function () {
		// 	currentNumber = localStorage.getItem("quantity");
		// 	if (currentNumber >= 3) {
		// 		currentNumber = currentNumber - getRandomInt(3);
		// 		$(".main__quantity span").text(currentNumber);
		// 		localStorage.setItem("quantity", currentNumber)
		// 	} else {
		// 		currentNumber = 25;
		// 		localStorage.setItem("quantity", currentNumber)
		// 	}
		// }, 100000)
		let prodLeft = [2, 3, 4, 6, 7, 8, 9, 9, 11, 11, 12, 14, 14, 15, 15, 16, 16, 16, 17, 17, 18, 18];

		function start_counting_timer(limitedSeconds) {
			let timeLeft = limitedSeconds;
			let secondsLeft,minutesLeft;
			let timerElement = $('.timer');
			let count = setInterval(function(){
				if(timeLeft <= 0) {
					clearTimeout(count);
				} else {
					timeLeft--;
					let min = parseInt(timeLeft/60);
					minutesLeft = min.toString();
					if(minutesLeft.length === 1) {
						minutesLeft = '0'+ minutesLeft;
					}
					let sec = timeLeft%60;
					secondsLeft = sec.toString();
					if(secondsLeft.length === 1) {
						secondsLeft = '0'+ secondsLeft;
					}
					if(sec === 0) {
						$('.quantity').text(prodLeft[min])
					}
					timerElement.text(minutesLeft+":"+secondsLeft)
				}
			}, 1000);
		}

		let tstamp = window.localStorage.getItem('tstamp-l2xyg239');
		let limitedSeconds = 1278;
		let prodElement = $('.prod_left_val');
	
		if (tstamp !== null) {
			let now = Math.round(new Date().getTime() / 1000);
			let then = tstamp;
			limitedSeconds = limitedSeconds - (now - then);
			let prod = Math.floor(limitedSeconds/60);
			if (prod < 0) prod = 0;
			prodElement.text(prodLeft[prod])
		} else {
			tstamp = Math.round(new Date().getTime() / 1000);
			window.localStorage.setItem('tstamp-l2xyg239', tstamp);
			prodElement.text(19);
		}
	
		start_counting_timer(limitedSeconds);
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

