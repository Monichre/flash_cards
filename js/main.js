$(function() {
  // Handler for .ready() called.
  $("h1").click(function(){
  	$(this).siblings("p").toggle();
  	$(this).parent().siblings().children('p').hide();

  });






});