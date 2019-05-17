$(document).ready(function(){
  $('.slider').bxSlider({
  	infiniteLoop: false,
  	controls: true
  });

  $("#menu").on("click", function(){
  	$("nav").toggleClass("nav-close");
  });

  $(".close").click(function(){
  	$("nav").addClass("nav-close");
  });

});