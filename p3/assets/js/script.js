$(document).ready(function() {
 

 	$('body').click(function(e){
		$('#click').append('<br /><br>User cursor clicked:<br />Position X : ' + e.pageX + '<br />Position Y : ' + e.pageY);
		//$('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
	});


	 $('body').mousemove(function(e){
		$('#move').append('<br />User cursor moved:<br />Position X : ' + e.pageX + '<br />Position Y : ' + e.pageY);
		//$('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
	});

	$('.searchTerm').keypress(function( event ) {
	
		
		// store key pressed
		var code = (event.keyCode ? event.keyCode : event.which);
		

		// detect if 'enter' is pressed
		if(code == 13) {
			var text = $('.searchTerm').val();
			$('body').append('<div class="break typing">User typed:<br>'+text+'</div>');
			$('.searchTerm').val('');
		}

		//

	});


	var output = document.getElementById("out");

	if (!navigator.geolocation){
		output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
		return;
	}

	function success(position) {
		var latitude  = position.coords.latitude;
		var longitude = position.coords.longitude;

		output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

		// var img = new Image();
		// img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

		output.appendChild(img);
	}

	function error() {
		output.innerHTML = "Unable to retrieve your location";
	}

	output.innerHTML = "<p>Locating ...</p>";

	navigator.geolocation.getCurrentPosition(success, error);

	$("#blue").click(function(){
       $("#move").hide(0);
    });
   	$("#green").click(function(){
       $("#out").hide(0);
    });
   	$("#red").click(function(){
       $("#click").hide(0);
    });
   	$("#yellow").click(function(){
       $(".typing").hide(0);
    });
	

});
	
