$(function() {

  // $("#mainNav").navgoco({accordion: true});
    $("#mainNav ul.recipe li").hide();

    $("#mainNav h3").each(function(){
      $(this).click(function() {
        $("#" + this.id + "ul").children().slideToggle("slow");
      });
    });

    $(".more").toggle(function(){
    $(this).text("less..").siblings(".complete").show();
  }, function(){
    $(this).text("more..").siblings(".complete").hide();
  });

    // $("#mainNav li.category").children().hide();
    // $("#mainNav li.category").each(function() {
    //   $(this).click(function(){
    //     $(this).children().slideToggle("slow");
    //   });
    // });
// this works now how to apply singularly
    // $("#mainNav li.category").click(function() {
    //     $("#mainNav ul.recipe li").slideToggle("slow");
    //   });

  $('#mainNav ul li ul li').click(function() {
    var selectedArticle = $("#" + this.id + "Content");
    //  $(selectedArticle).animate({"padding-top": "0px"}, {queue: false, duration: "slow"});
        if ($(selectedArticle).is(":visible")) {
          if ($("#mainContent article").is(":visible")) {
            $("#mainContent article").hide();
            $(selectedArticle).fadeIn({duration: 1000});
          } else {
            $(selectedArticle).fadeOut({duration: 800});
          }
        } else {
          $("#mainContent article").hide();
          $(selectedArticle).fadeIn({duration: 1500});
        //  $(selectedArticle).animate({"padding-top": "0px"}, {queue: false, duration: "slow"});
        }
    });

  // $("#mainNav li")
  //   .mouseover(function() {
  //     $(this).addClass('listHover');
  //   })
  //   .mouseout(function() {
  //     $(this).removeClass('listHover');
  //   });

  $("#mainNav" ).click(function() {
    $( "h1" ).animate({left: "20px", "font-size": "1em"}, {queue: false, duration: "slow"});

    });
});
