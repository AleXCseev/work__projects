$(function () {

	$(".owl-carousel").owlCarousel({
		loop: true,
		nav : true,
		items: 1,
		dots: true,
		margin: 30,
		// autoplay:true,
		// autoplayTimeout: 4000,
		// autoplayHoverPause: true,
		// responsive:{
		// 	290: {
		// 		items: 2,
		// 	},
		// 	900: {
		// 		items: 3,
		// 	},
		// 	1281: {
		// 		items: 4,
		// 	}
		// }
	});

// 	AOS.init({
// 		disable : 'mobile',
// 		// offset : -100,
// 	});

// // 	$(window).resize(function() {
// // 		AOS.refresh();
// // 	})

// // 	if($(window).width() < 1080) {
// // 		$(".card__boot").removeAttr("data-aos");
// // 	}

	$('[data-fancybox]').fancybox({
		loop: true,
	});


	$('[href*="#"]').on('click', function (e) {
		var fixedOffset = -100;
		// if ($(document).width() <= 768) {
		// 	fixedOffset = 300;
		// }

		$('html, body')
			.stop()
			.animate({ scrollTop: $(this.hash).offset().top + fixedOffset }, 1000);
		e.preventDefault();
	});


	$(".year").text(new Date().getFullYear())


	function menu() {
		$(window).scroll(function() {

			var $sections = $('.menu__nav');
	
			$sections.each(function(i,el){
				var top  = $(el).offset().top-200;
				var bottom = top +$(el).height();
				var scroll = $(window).scrollTop();
				var id = $(el).attr('id');
				if( scroll > top){
					$('.menu__item').removeClass('active');
					$('a[href="#'+id+'"]').parent().addClass('active');
	
				}
			   })
		});
	}

	menu()


	function mobileMenu() {
		$(".burger__menu").click(function() {
			if($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(".site__header").removeClass("active")
			} else {
				$(this).addClass("active");
				$(".site__header").addClass("active")
			}
		})
		
		$(".menu__item").click(function(e) {
			if($(window).width() <= 1000) {
				console.log("ok")
				$(".burger__menu").removeClass("active")
				$(".site__header").removeClass("active")
			}
		})
		
	}

	mobileMenu()
})

