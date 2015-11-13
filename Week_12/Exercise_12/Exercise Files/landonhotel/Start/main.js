//Jenna Murphy with leveraged code from Lynda.com Solution Video

$(function() {
  setInterval(imageRotator, 5000);
});

function imageRotator() {
  var currentSlide = $("#hero div.current");
  var nextSlide = currentSlide.next();
  if (nextSlide.length === 0) {
    nextSlide = $("#hero div:first");
  }
  currentSlide.removeClass("current").addClass("previous");
  nextSlide.addClass("current");
  nextSlide.fadeIn( 3000, function(){
    currentSlide.removeClass("previous");
  });
}
