/* Code written by Jenna Murphy with help from jQuery API - Specifically : http://api.jquery.com/attr/
  updated gitHub and Assignment Files on 11/1/15
*/

var tableOfContents;

$("document").ready(function() {
  //create ul for Table of Contents
  tableOfContents = $("<ul id='tblOfCnts'>");
  //Insert ul after the h1
  tableOfContents.insertAfter("h1");
  //set id attribute for each h2 heading
  $("h2").attr( "id", function( i ) {
    return "headingId" + i++;
    });
  //loop through each h2 heading and append to the ul
  $("h2").each(function() {
    $(tableOfContents).append("<li><a href='#" + this.id + "'>" + $(this).text() + "</a>");
  });
});
