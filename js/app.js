$(document).ready(function() {
	$('.standing').show();
	$('.ready').hide();
	$('.throwing').hide();
	$('.cool').hide();
	$('.hadouken').hide();
	$('.audio-intro').get(0).play();



	//mouse hovers on Ryu 

	$('.ryu').mouseenter(function() {
		$('.standing').hide();
		$('.ready').show();
	});

	$('.ryu').mouseleave(function() {
		$('.ready').hide();
		$('.standing').show();
	});



	//click on Ryu for "Hadouken"

	$('.ryu').click(function() {
		$('.ready').hide();
		$('.standing').hide();
		$('.throwing').show();
		$('.hadouken').show();

		

	});

});