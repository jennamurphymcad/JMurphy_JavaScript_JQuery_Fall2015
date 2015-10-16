/* Author: Jenna Murphy
This script features a function that creates new document elements, textNodes and sets ID attributes
*/

function createNewElement(elementType, newElementUniqueIdentifier, elementStr, parentID) {
  var newElement = document.createElement(elementType);
  newElement.setAttribute("id", newElementUniqueIdentifier)
  var elementText = document.createTextNode(elementStr);
  newElement.appendChild(elementText);
  document.getElementById(parentID).appendChild(newElement);
}

createNewElement("h1", "mainHeading", "Functions in JavaScript", "mainContent");
createNewElement("p", "mainParagraph", "Functions makes writing JavaScript much more efficient!", "mainContent");
createNewElement("ul", "unorderedList", "", "mainContent");
createNewElement("li", "listItem", "list item created with a JavaScript function", "unorderedList");
