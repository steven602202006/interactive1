$(document).ready(function(){


	$('.item').click(function() {

		$(this).next().show();

		var src = $(this).attr("data-audio")

		$("#audio").attr("src", "audio/"+src);

   		$('#audio').get(0).play();


	});	

	 // onClick="document.getElementById('').play(); return false;"

});
