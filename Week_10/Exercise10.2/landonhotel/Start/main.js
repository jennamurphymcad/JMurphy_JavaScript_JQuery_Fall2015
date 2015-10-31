$("document").ready(function() {
  //clone all of the h2 elements
  var tableOfContents = $("<ul id='tblOfCnts'>");
  tableOfContents.insertAfter("h1");
  $("h2").each(function() {
  //  var index = $("h2").index(this);
    $(tableOfContents).append("<li><a href='#" + this + "'>" + this + "</a>");

  })
});

  //var h2Headings = $("h2");


  // for (i = 0; i < h2Headings.length; i++) {
  // //insert the cloned h2 elements after the "Specials" h1 element
  //   var list = $("<li class='tableOfCntList'><a href='#" + this[i] +"'>" + this[i] +"</a>").insertAfter("h1");
  // }
  //   //wrap all <li> tags in a <ul>
  // $(".tableOfCntList").wrapAll("<ul id='table'>");






  // var h2Headings = $("h2");
  // var tabelOfContents = $("<ul class='tableOfCnts'>");
  // $(h2Headings).each(function(index, element) {
  //   $(element).append("<li><a href= ")
  //   // var current = $(this);
  //   // current.attr("id", "title" + i);
  //   // $("ol").append("<li><a id='link" +i + "' href='#title" +
  //   // i + "' title ='" + current.attr('tagName') + "'>" + current.html() + "</a></li>");
  //   // //$("<a href='#" + this + "></a>").append("h1");
  // });


//
// $("document").ready(function() {
//   $("ol").insertAfter("h1").addClass("tableOfContents");
//   var h1Content = $("h2").clone();
//   $("ol").add("<li><a href='#" + h1Content +"'</li>");
//
//   // $( "ul" ).add( "<p id='new'>new paragraph</p>" )
//
//   // h1Content.insertAfter("h1");
//   // //$("<a href='#h1Content'>").appendTo("h1");
// });
