/* Authors: Author of Assignment8_start.zip and Jenna Murphy
This script calls three functions getAuthorAndYearString, displayBCEString, getOldestOrYoungestString when user clicks associated
navigation button. Note- Assignment asks for the speechesArray data to be called as function arguments. I have deliberately
chosen to call the object name instead for better readiblity. Please see my Assignment 5, 6 and 7 for calling speechArray data as function arguments.
*/
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

//function returns author and speech year and displays to the consoleDisplay div
//*note - this could either accept array data or object data
function getAuthorAndYearString(speechClicked) {
  document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechClicked.author + ' in ' + speechClicked.year + '<br>';
}

//function returns yearIsBCE data object from speechesArray and displays message to ConsoleDisplay div
function displayBCEString(speechClicked) {
  if(speechClicked.yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>';
  }
}

//function loops through year data object from speechesArray, resets oldest/newest variables, and determines Oldest and Newest speeches
function getOldestOrYoungestString(speechClicked) {
  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }
  /*added an else if/else statement as per assignment instructions to return a string for every case:
  "Be careful to return a string value for every potential case - the data object passed in to the function
  may not be either the oldest or the youngest."*/
  if(speechClicked.year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  } else if (speechClicked.year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  } else {
    document.getElementById('ConsoleDisplay').innerHTML += 'This is neither the most recent or oldest speech on the page.<br>';
  }
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  /*Note - assignment specifically asks for speechesArray data, I am going to use the object data instead for better readability.
  please see previous three assignments for an example of using the speechesArray data as the function argument.*/
  getAuthorAndYearString(churchillSpeech);
  displayBCEString(churchillSpeech);
  getOldestOrYoungestString(churchillSpeech);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  getAuthorAndYearString(ghandiSpeech);
  displayBCEString(ghandiSpeech);
  getOldestOrYoungestString(ghandiSpeech);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  getAuthorAndYearString(demosthenesSpeech);
  displayBCEString(demosthenesSpeech);
  getOldestOrYoungestString(demosthenesSpeech);
});
