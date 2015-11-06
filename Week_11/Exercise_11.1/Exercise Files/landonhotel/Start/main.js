$(function() {
  $( "div.event" ).on( "mouseenter mouseleave", function( event ) {
    $( this ).toggleClass( "eventHover");
  });
});
