//Written by Jenna Murphy with assistance from stackoverflow.com link:http://stackoverflow.com/questions/7012364/jquery-show-only-one-div-at-any-time

var mainNavList;

$(function() {
  $("#mainContent article").hide();
  mainNavList = $("<ul>");
  mainNavList.appendTo("#mainNav");

   $("h2").each(function() {
     $(mainNavList).append("<li>"+ $(this).text());
   });

   $("li").attr( "id", function( i ) {
     return "recipe" + i++;
   });

  $('li').click(function() {
    var selectedArticle = $("#" + this.id + "Content");
        if ($(selectedArticle).is(":visible")) {
          $(selectedArticle).fadeOut({duration: 800});
        } else {
          $("#mainContent article").hide();
          $(selectedArticle).fadeIn({duration: 1500});
          $(selectedArticle).animate({"padding-top": "0px"}, {queue: false, duration: "slow"});
        }
    });

  $("#mainNav li")
    .mouseover(function() {
      $(this).addClass('listHover');
    })
    .mouseout(function() {
      $(this).removeClass('listHover');
    });

  $("#mainNav" ).click(function() {
    $( "h1" ).animate({left: "20px", "font-size": "1em"}, {queue: false, duration: "slow"});

    });

  $("article").click(function() {
    $(this).slideUp("slow", "linear");
  });
});
