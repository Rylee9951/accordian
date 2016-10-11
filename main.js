$(document).ready(function(){
	$(".head").on('click', function(){
		//$(".content").hide()
		//$(this).siblings('.content').show()
		$(".content").removeClass("show");
		$(this).find("+ .content").addClass("show");
	})
})


// .addClass()
// .removeClass()