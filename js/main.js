$(document).ready(function(){
  $('.slider').bxSlider({
  	infiniteLoop: false,
  	controls: true
  });

  $("#menu").on("click", function(){
  	$(".nav").prev().removeClass("nav-close");
  })

});