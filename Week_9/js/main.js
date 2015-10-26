/*Author: Jenna Murphy with assistance from jQuery API Documentation
This script features a function to change text following an on click event of the mainHeading. Utilizing the jQuery API
to implement jQuery's defined functionality.
Slightly confused on whether $('#id') is equivalent to document.getElementById and which would be appropriate for this
assignment. I have written the function for the jQuery $('#id') call and the javaScript getElementById. Both functions will respond
the same.
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

// $( document ).ready(function() {
//   var elementClicked = document.getElementById("mainHeading");
//   elementClicked.onclick = function() {
//   var response = prompt("What is your name?");
//     if (response != null) {
//      elementClicked.innerHTML = "Hello " + response + "!";
//      elementClicked.css( "color", "#000" );
//     } else {
//      elementClicked.innerHTML = "Hello Stranger!";
//     }
//    }
// });
