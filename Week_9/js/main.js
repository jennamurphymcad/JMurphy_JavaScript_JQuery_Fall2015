/*Author: Jenna Murphy with assistance from jQuery API Documentation
This script features a function to change text following an on click event of the mainHeading. Utilizing the jQuery API
to implement jQuery's defined functionality.
*/

$( document ).ready(function() {
  var elementClicked = $( "#mainHeading" );
  elementClicked.click(function() {
  var response = prompt("What is your name?");
    if (response != null) {
     elementClicked.html("Hello " + response + "!");
     elementClicked.css( "color", "#000" );
    } else {
     elementClicked.html("Hello Stranger!");
    }
   })
});
