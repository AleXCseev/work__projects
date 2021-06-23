$(function () {

	$(".first-slider").owlCarousel({
		loop: true,
		nav : false,
		items: 1,
		dots: false,
		autoplay:true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
	});

	var owl = $(".second-slider").owlCarousel({
		loop: true,
		nav : true,
		items: 1,
		margin: 0,
		dots: false,
		onTranslate: callback,
		autoplay:true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
	});

	function callback(event) {
		var item = event.item.index; 
		$(".block__slide-wrapper").removeClass("active")
		$(".block__slide-wrapper").eq(item-3).addClass("active")
	}

	$(".block__slide-wrapper").click(function() {
		var currentSlide = $(this).attr("data-item");
		owl.trigger('to.owl.carousel', [currentSlide-1]);
	})

	$('a[data-rel^=lightcase]').lightcase({
		swipe: true,
		showCaption: false,
		maxHeight: 1200,
		speedIn: 0,
		speedOut: 0,
	});


	// $.raty.path = 'img/raty';

	// $('.modal__raiting').raty({
	// 	half: true,
	// 	space: false,
	// 	number: 5,
	// });

	AOS.init({
		disable : 'mobile',
		once: true,
		// offset : -200,
	});


	// $(window).resize(function() {
	// 	AOS.refresh();
	// })

	// $('[data-fancybox]').fancybox({
	// 	loop: true,
	// 	infobar: false,
	// });


	$('[href*="#"]').on('click', function (e) {
		var fixedOffset = -200;

		$('html, body')
			.stop()
			.animate({ scrollTop: $(this.hash).offset().top + fixedOffset }, 1000);
		e.preventDefault();
	});


	// $(".copiright span").text(new Date().getFullYear())

	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	function quantity() {
		var currentNumber;

		if(localStorage.getItem("quantity")) {
			$(".remainder__number").text(localStorage.getItem("quantity"));
		} else {
			currentNumber = 25
			localStorage.setItem("quantity", currentNumber)
			$(".remainder__number").text(currentNumber);
		}

		setInterval(function () {
			currentNumber = localStorage.getItem("quantity");
			if (currentNumber >= 3) {
				currentNumber = currentNumber - getRandomInt(3);
				$(".remainder__number").text(currentNumber);
				localStorage.setItem("quantity", currentNumber)
			} else {
				currentNumber = 25;
				localStorage.setItem("quantity", currentNumber)
			}
		}, 100000)
	}

	quantity()
	
})

