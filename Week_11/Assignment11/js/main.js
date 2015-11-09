//Written by Jenna Murphy with assistance from jQuery API

$(function() {
  //places image before text in li element
  $("#menu ul li a").prepend("<img src='icon.png' alt='icon'>");

  //clicking h1 element calls headerChange function
  $("#header h1").on("click", headerChange);

  //changes color of first li text
  $("#sidebar_content_1 ul li a:first").css("color", "red");

  //adds class to change position of all even li elements
  $("#sidebar_content_2 ul li:even").addClass("listItemPosition");

  //clicking either h2 in the #content div, content will be replaced
  $("#content h2").on("click", contentChange);

  //clicking h2 will toggle the list items for first sidebar
  $("#sidebar #sidebar_content_1 h2").on("click", toggleFunction1);

  //clicking h2 will toggle the list items for second sidebar
  $("#sidebar #sidebar_content_2 h2").on("click", toggleFunction2);
});

function headerChange() {
  $( "#header").toggleClass("changeBackground");
};

function toggleFunction1() {
  $("#sidebar_content_1 li").toggle();
};

function toggleFunction2() {
  $("#sidebar_content_2 li").toggle();
};

function contentChange() {
  $("#content").html("Content has been replaced!");
};
