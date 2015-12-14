var img;

function preload() {
  img = loadImage("img/screenshots/wk2ex2.png");
}

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
   myCanvas.parent("myContainer");
   myCanvas.position(0,0);
   img.loadPixels();
}

function draw() {
  var change = map(mouseX, 0, mouseY, 0, 255);
  change = Math.abs(change);
  change = Math.floor(change);

for (i = 0; i < img.pixels.length; i = i + 2) {
  if (random(img.pixels[i+1]) >= 50) {
    img.pixels[i] = img.pixels[i-change];
  }
}

img.updatePixels();
image(img, 0, 0, windowWidth, windowHeight);
}



// var cell;
// var angle1=0;
// var angle2=0;
// var x1, y1;
//
// function setup() {
//  var myCanvas = createCanvas(windowWidth, windowHeight);
//  myCanvas.parent("myContainer");
//  myCanvas.position(0,0);
//  // frameRate(10);
// }
// function draw() {
//  background(255);
//  for (var i=0; i<=2500; i++) {
//     var cell = new Particle();
//     cell.display();
//     cell.move();
//   }
// }
//
// function Particle() {
//   this.x = random(windowWidth);
//   this.y = random(windowHeight);
//
//     this.move = function() {
// 	  var ang1 = degrees(angle1);
//       var ang2 = degrees(angle2);
// 	  this.x += width/2 + (5*cos(ang1));
//       this.y += height/2 + (15*sin(ang1));
//     };
//
//   this.display = function() {
//     strokeWeight(2);
//     stroke(235, 230, 210);
//     //fill(random(110, 153), 0, 0);
//   	ellipse(this.x, this.y, 15, 15);
//
//   angle1 += 2;
//   angle2 += 3;
//
//   };
// };
