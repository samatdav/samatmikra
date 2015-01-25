$(function () {
	$('dt').on('click', function() {
	$(this).next().slideToggle();
	});
});

$(".thumbnail").hover(function(){
  $(".thumbnail").css("border","3px solid red");
  }
});