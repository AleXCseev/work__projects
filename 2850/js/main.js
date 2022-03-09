$(document).ready(function() {
	 $('[href*="#"]').on('click', function (e) {
        var fixedOffset = 0;
        // var cardHeight = $("#bar").outerHeight(false)
        // var windowHeight = $(window).height()


        $('html, body')
            .stop()
            // .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
            .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
        e.preventDefault();
    });
});