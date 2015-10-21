$(document).ready(function() {
	
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	
	$('.js-btn-sound').on('click', function() {

		$(this).toggleClass('is-active');

		if ($(this).hasClass('is-active')) {
			$("audio").prop('muted', false);
		}
		else {
			$("audio").prop('muted', true);
		};
	});

	function scrollImg() {
		var winHeight = $(window).height(),
			winTop = $(window).scrollTop();

		$('.js-gif').each(function() {

			var imgTop = $(this).offset().top,
				imgHeight = $(this).height();

			if (winTop + winHeight >= imgTop + imgHeight) {
				if (!$(this).hasClass('is-active')) {
					$(this).addClass('is-active');
					$(this).find('img').attr('src', $('.js-gif img').data('src'));
				}
			};

		});

	}

	$(window).scroll(function() {
		scrollImg();		
	});

	$('.js-info-link').click(function() {
		$('.js-info-visible').addClass('is-active');
		$('.js-info-hidden').addClass('is-active');
		return false
	});

});