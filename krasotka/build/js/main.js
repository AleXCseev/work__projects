$(function () {
	AOS.init({
		disable : "phone",
		// offset : -100,
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
		center: true,
		nav : true,
		dots : true,
		items: 5,
		margin: 30,
		onChange: callback,
		onInitialized: initialized,
	});

	function callback(event) {
		$(".owl-item").removeClass("opacity7")
		setTimeout(function () {
			$(".center").prev().addClass("opacity7")
			$(".center").next().addClass("opacity7")
		}, 0)
	}

	function initialized(event) {
		$(".center").prev().addClass("opacity7")
		$(".center").next().addClass("opacity7")
	}


	function parallax(selectorWrapper, selectorElement) {
		var banner = $(selectorWrapper);
		var imgs = $(selectorElement);
		function showAllObjects (object) {
			object.fadeIn(900);
		}

		function moving (object, speed) {
			banner.on('mousemove', function(event) {
				var X = Math.floor((event.pageX)/speed-20) + "px";
				var Y = Math.floor((event.pageY)/speed) + "px";
				object.css('transform', 'translate('+X+' , '+Y+')');
			});
		}

		function moveAll (object) {
			moving($(object[0]),80);
			moving($(object[1]),40);
			moving($(object[2]),100);
			moving($(object[3]),90);
			moving($(object[4]),100);
			moving($(object[5]),40);
		}

		showAllObjects(imgs);
		moveAll(imgs);
	}

	if($(document).width() > 1080) {
		parallax(".site__footer", ".footer__leaf")
		parallax(".site__header", ".header__leaf")
	}
});




