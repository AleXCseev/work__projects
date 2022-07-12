var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
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
}

$(document).ready(function() {
	landingFunctions.init();
});

