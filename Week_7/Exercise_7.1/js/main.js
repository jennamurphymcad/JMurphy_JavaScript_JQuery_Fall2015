//create new elements H1 and P
var mainHeading = document.createElement("h1");
var mainParagraph = document.createElement("p");

//Add text to elements with Create Text Node
var mainHeadingText = document.createTextNode("Exercise 7.1 - DOM DOM DOM");
var mainParagraphText = document.createTextNode("This text is created by using JavaScript to access the DOM");
mainHeading.appendChild(mainHeadingText);
mainParagraph.appendChild(mainParagraphText);

//add/position new elements into the document
document.getElementById("mainContent").appendChild(mainHeading);
document.getElementById("mainContent").appendChild(mainParagraph);

//set the paragraph text alignment to center
mainParagraph.setAttribute("align", "center");
