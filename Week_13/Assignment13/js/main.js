$(function() {

    //hide nested list items when javaScript is loaded
    $("#mainNav ul.recipe li").hide();

    //add hidden class to div when javaScript is loaded
    $("article div").addClass("hidden");

    //reveal show more button when javaScript is loaded
    $(".button").css("display", "block");

    //toggle nested list items in each category of recipes
    $("#mainNav h3").each(function() {
      $(this).click(function() {
        $("#" + this.id + "ul").children().slideToggle("slow");
      });
    });

    //show more, show less toggle function
    $("p.button").each(function() {
      $(this).click(function() {
        if ($("#" + this.id + "Div").hasClass("hidden")) {
            $("#" + this.id + "Div").removeClass("hidden").addClass("show");
            $(this).text("Show Less");
        } else {
            $("#" + this.id + "Div").addClass("hidden");
            $(this).text("Read More...");
        }
      });
    });

  //when clicked on recipe in nav, will only show the selected recipe and hide others
  $('#mainNav ul li ul li').click(function() {
    var selectedArticle = $("#" + this.id + "Content");
    //  $(selectedArticle).animate({"padding-top": "0px"}, {queue: false, duration: "slow"});
        if ($(selectedArticle).is(":visible")) {
          if ($("#mainContent article").is(":visible")) {
            $("#mainContent article").hide();
            $(selectedArticle).fadeIn({duration: 1000});
            $("article div").removeClass("hidden");
            $(".button").css("display", "none");
          } else {
            $(selectedArticle).fadeOut({duration: 800});
          }
        } else {
          $("#mainContent article").hide();
          $(selectedArticle).fadeIn({duration: 1500});
        }
    });

  $("#mainNav" ).click(function() {
    $( "h1" ).animate({left: "20px", "font-size": "1em"}, {queue: false, duration: "slow"});
  });
});
