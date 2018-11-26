$(document).ready(function(){
  $('.slider').bxSlider({
  	infiniteLoop: false,
  	controls: true
  });

  $("#menu").on("click", function(){
  	$("nav").removeClass("nav-close");
  });

  $(".close").click(function(){
  	$("nav").addClass("nav-close");
  });

});