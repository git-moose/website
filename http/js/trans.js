$(function() {
	init();
});

function init() {
	$('header').addClass('animated fadeInDown');
	$('header').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('.content').css('opacity',1);
		$('.content').addClass('animated bounceInUp');
	});
}