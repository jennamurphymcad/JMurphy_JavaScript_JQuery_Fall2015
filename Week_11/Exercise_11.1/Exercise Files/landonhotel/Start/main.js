$(function() {
  $( "div.event" ).on( "mouseenter mouseleave", function( event ) {
    $( this ).toggleClass( "eventHover");
    //calls the rotation function every 3 seconds
    setInterval("rotateImages()", 3000);
  // $("#hero div.current").animate( {"opacity: 0.0"}, 1000, "swing", changeClass);
  });
});

function rotateImages() {
  $("#hero div.current").removeClass("current").addClass("previous");
  $("#hero div.current").next().css( { opacity: 0.0} ).addClass("current").animate({ opacity: 1.0 }, "slow", function() {
      $("#hero div.current").removeClass("previous");
    });
}
