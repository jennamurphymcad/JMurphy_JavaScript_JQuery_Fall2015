$( "document" ).ready( function() {
  $( "a" ).click( function() {
    $( this ).toggleClass("linkBackground");
  });
  $( ".content, h2" ).click( function() {
    $( this ).hide( 1000 );
  });
});
