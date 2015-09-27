//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
// Authors: Author of Assignment5_start files and Jenna Murphy
var authorAndYear, commonEra, recentVsOldest, User;

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

    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

    //function Author and Year msg associated with each nav button
    authorAndYear = function(speechClicked) {
      console.log("This speech was written by " + speechClicked.author + " in " + speechClicked.year + '.');
    };

    //Function looks at speech objects boolean info yearIsBCE
    commonEra = function(speech) {
      if (speech.yearIsBCE === true) {
        console.log("This speech took place before the common era.");
      } else {
        console.log("This speech took place during the common era.");
      }
    };

    //Function compares each speech year to display a msg for the most recent or oldest speech.
    recentVsOldest = function(speechClicked, speechCompare1, speechCompare2) {
      if (speechClicked.year > speechCompare1.year && speechClicked.year > speechCompare2.year) {
       console.log('This is the most recent speech on the page.');
     } else if (speechClicked.year < speechCompare1.year && speechClicked.year < speechCompare2.year){
       console.log('This is the oldest speech on the page.');
     }
   };

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var favAuthor = window.prompt("Who is your favorite author?");
  switch (favAuthor) {
    case speechesArray[0].author :
      console.log(speechesArray[0].author + ' was ' + speechesArray[0].authorAge + ' during this speech.');
      break;
    case speechesArray[1].author :
      console.log(speechesArray[1].author + ' was ' + speechesArray[1].authorAge + ' during this speech.');
      break;
    case speechesArray[2].author :
      console.log(speechesArray[2].author + ' was ' + speechesArray[2].authorAge + ' during this speech.');
      break;
    default :
      console.log("Sorry, something is not quite right with your response. Please check your spelling and try again.");
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

  authorAndYear(speechesArray[0]);

  commonEra(speechesArray[0]);

  recentVsOldest(speechesArray[0], speechesArray[1], speechesArray[2]);

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

  authorAndYear(speechesArray[1]);

  commonEra(speechesArray[1]);

  recentVsOldest(speechesArray[1], speechesArray[0], speechesArray[2]);

});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

  authorAndYear(speechesArray[2]);

  commonEra(speechesArray[2]);

  recentVsOldest(speechesArray[2], speechesArray[0], speechesArray[1]);

});

//Prompt on Window Load
//**Note** Assignment asks for variable to be called "User", isn't this incorrect syntax for first letter of var to be capitalized?
User = window.prompt('What is your name?');
  if (typeof User === 'string' && ) User.length !== 0 { //should second condition be User.hasOwnProperty('length') !== "" -- doesnt work properly? "hasOwnLength" leveraged from Lecture 5.2.4
    console.log('Hi ' + User + '!');
  } else {
    console.log("Ok, I\'ll just call you User.");
  }
