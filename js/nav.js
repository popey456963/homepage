var menuBoolean = false;
var menuWidthThird = $('.off-canvas').width() / $('.menu-element').length;

$('.nav-wrapper').click(function(ev) {
			$('#nav-trigger-anim').toggleClass('active');
			if (menuBoolean == false) {
						menuAnimIn($('.container'), menuWidthThird);
						menuBoolean = true;
			} else {
						menuAnimIn($('.container'), 0);
						menuBoolean = false;
			}
});

$('.seemore').click(function(ev) {
	if	($('.container').offset().left != $('.off-canvas').width())
	{
		var currentLoc = $('.container').offset().left;
		menuAnimIn($('.container'), currentLoc + menuWidthThird);	
	}
});

function menuAnimIn(obj, fromLeft) {
			$(obj).velocity({
						left: fromLeft
			}, {
						easing: 'easeInSine'
			})
}