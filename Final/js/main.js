$(function() {
  //make wholePage full size of window -- assistance from Anthony
    $('#wholePage').height(function() {
            return $(window).height();
    });
//and when window resizes (such as roatating phone screen) make wholePage whole page -- assistance from Anthony
    $(window).resize(function(){
        $('#wholePage').height(function(){
            return $(window).height();
        });
    });


  //if JS available, hide figcaption p
  $("figcaption p").addClass("hidden");

  //if JS available, hide mainContent  $("#mainContent").addClass("hidden");

  //click on h4 will reveal project description
  $("figure").each(function() {
    $(this).mouseenter(function() {
        $("#" + this.id + "Par").removeClass("hidden").addClass("show");
    });
    $(this).mouseleave(function() {
      $("#" + this.id + "Par").removeClass("show").addClass("hidden");
    })
  });

  //clicking on landing page will allow mainContent to slideup
  $("#myContainer").click(function() {
    mainContentSlideUp();
  });

  // var canvas = $('canvas');
  //
  //     // Obtain a graphics context on the
  //     // canvas element for drawing.
  //     context = canvas.getContext('2d');
  //
  // // Start listening to resize events and
  // // draw canvas.
  // initialize();
  //
  // function initialize() {
  //   // Register an event listener to
  //   // call the resizeCanvas() function each time
  //   // the window is resized.
  //   window.addEventListener('resize', resizeCanvas, false);
  //
  //   // Draw canvas border for the first time.
  //   resizeCanvas();
  // }
  //
  // // Display custom canvas.
  // // In this case it's a blue, 5 pixel border that
  // // resizes along with the browser window.
  // function redraw() {
  //   context.strokeStyle = 'blue';
  //   context.lineWidth = '5';
  //   context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
  // }
  //
  // // Runs each time the DOM window resize event fires.
  // // Resets the canvas dimensions to match window,
  // // then draws the new borders accordingly.
  // function resizeCanvas() {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   redraw();
  // }

});

function mainContentSlideUp() {
  $("#mainContent").animate({
  "margin-top": 0
  }, "slow", "swing");
};
