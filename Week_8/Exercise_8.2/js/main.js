/* Author: Jenna Murphy
This script features a function leveraged from my Exercise 8.1. The function creates a new document element
and text node with a unique identifier. Another function has been added to change the newly created h1 element's text
based on the prompt value.
*/

//function creates a new element with text. A unique identifier is set to the new element
function createNewElement(elementType, newElementUniqueIdentifier, elementStr, parentElementID) {
  var newElement = document.createElement(elementType);
  newElement.setAttribute("id", newElementUniqueIdentifier)
  var elementText = document.createTextNode(elementStr);
  newElement.appendChild(elementText);
  document.getElementById(parentElementID).appendChild(newElement);
}

//creates a new h1 element with unique identifier.
createNewElement("h1", "mainHeading", "Click Here!", "mainContent");

//Function loads with browser. Function responds to user clicking on mainHeading and initiates prompt.
//Prompt value is used to change mainHeading text and class.
window.onload = function favoriteColorResponse() {
  var elementClicked = document.getElementById("mainHeading");
  elementClicked.onclick = function() {
	var response = prompt("What is your favorite color?");
    switch (response) {
      case 'green' :
        elementClicked.innerHTML = "Green rocks!";
        elementClicked.className = "green";
        break;
      case 'blue' :
        elementClicked.innerHTML = "Blue rocks!";
        elementClicked.className = "blue";
        break;
      case 'red' :
        elementClicked.innerHTML = "Red rocks!";
        elementClicked.className = "red";
        break;
      default :
        elementClicked.innerHTML = "Sorry, I didn't code for that response :(";
        break;
    }
	}
};
