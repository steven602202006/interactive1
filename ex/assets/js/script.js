$(document).ready(function(){

	// original

	$('body').mousemove(function(e){
		//$('#position').html('Position X : ' + e.pageX + '<br />Position Y : ' + e.pageY);
		$('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
	});
  
	$('body').click(function(){
		var clone = $('#position').clone();
		$('body').append(clone);
	});

	// end original


	// $('body').click(function(e){
	// 	$('body').append('<img id="theImg" style="top: '+ e.pageY +'px; left: '+e.pageX+'px;" src="0001.png">');
	// });





});