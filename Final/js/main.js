$(function() {
    //make wholePage full size of window -- assistance from Anthony
    $('html').height(function() {
            return $(window).height();
    });
    //and when window resizes (such as roatating phone screen) make wholePage whole page -- assistance from Anthony
    $(window).resize(function(){
        $('html').height(function(){
            return $(window).height();
        });
    });

  //if JS available, hide figcaption p
  $("figcaption p").addClass("hidden");

  //mouseenter figure will reveal project description
  $("figure").each(function() {
    $(this).mouseenter(function() {
        $("#" + this.id + "Par").removeClass("hidden").addClass("show");
    });
    $(this).mouseleave(function() {
      $("#" + this.id + "Par").removeClass("show").addClass("hidden");
    })
  });

  //clicking on arrow on landing page will allow mainContent to slideup
  $("#myContainer").click(function() {
    mainContentSlideUp();
    $("#myContainer canvas").remove();
    $("#navStick").addClass("sticky")
  });

  //leveraged from own code week 13: when clicked on recipe in nav, will only show the selected recipe and hide others
  $('#navStick ul li').click(function() {
    var selectedArticle = $("#" + this.id + "Article");
    //  $(selectedArticle).animate({"padding-top": "0px"}, {queue: false, duration: "slow"});
        if ($(selectedArticle).is(":visible")) {
          if ($("article").is(":visible")) {
            $("article").hide();
            $(selectedArticle).fadeIn();
            $("article").removeClass("hidden");
          } else {
            $(selectedArticle).fadeOut();
          }
      } else {
        $("article").hide();
        $(selectedArticle).fadeIn();
      }
  });

});

function mainContentSlideUp() {
  $("#mainContent").animate({
  "margin-top": 0
  }, "slow", "swing");
};
