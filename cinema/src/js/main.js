$(function () {
	function carousel(selector, btnSelector) {
		var acarousel = $(selector).acarousel();

		function changeActive(move) {
			var index = acarousel.getPos(move).index;
			$(btnSelector + " .move").removeClass("active").eq(index).addClass("active");
		}
		changeActive();

		$(btnSelector + " .move").click(function () {
			if (acarousel.isAnim()) return false;
			var index = $(".move").index(this);
			var move = acarousel.moveByIndex(index);
			changeActive(move);
			return false;
		});


		$(selector).swipeleft(function(e) {
			if (acarousel.isAnim()) return false;
			var move = acarousel.move(-1);
			changeActive(move);
			return false;
		})

		$(selector).swiperight(function(e) {
			console.log("swipe")
			if (acarousel.isAnim()) return false;
			var move = acarousel.move(1);
			changeActive(move);
			return false;
		})

		setInterval(function () {
			if (acarousel.isAnim()) return false;
			var move = acarousel.move(-1);
			changeActive(move);
			return false;
		}, 5000)


		$(window).resize(function () {
			acarousel.init();
		});
	}

	carousel(".slider", ".move__mark");
})



