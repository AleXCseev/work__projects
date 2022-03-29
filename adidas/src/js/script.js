var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		// this.quantity()
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

		$.raty.path = $("body").data("path") + 'img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
		});

		function cardSlider (selector) {
			var owl = $(selector + " .card__galary-slider").owlCarousel({
				items: 1,
				margin: 100,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				animateOut: 'fadeOut',
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
	
		cardSlider(".card__2")

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

		$(".date").text(getDate(2))
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

