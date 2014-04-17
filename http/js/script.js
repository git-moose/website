$(function() {
	init();
});

function init() {
	$("header").transition({opacity:1}, 800, 'linear');
	$("body").transition({y:'2em'}, 1400, 'easeOutQuint', function() {
		unfold("a:first");
	});
}

function unfold(node) {
	$(node).transition({perspective: '400px', rotateX: '-360deg', opacity: 1}, 100, 'snap', function() {
		unfold(this.next());
	});
}