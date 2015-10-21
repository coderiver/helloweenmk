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

});