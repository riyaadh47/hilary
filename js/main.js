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

  $("#gallery").nanogallery2({
    thumbnailHeight: "auto",
    thumbnailWidth: 300
  });

});