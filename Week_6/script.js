//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
//Author: Creator of Assignment_6 starter files and Jenna Murphy

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
    favoriteSpeechPrompt,
    authorAndYear,
    commonEra,
    oldestSpeech = speechesArray[0].year,
    newestSpeech = speechesArray[0].year;

    //for loop to compare object years to the oldest/newest variables and resetting values
    for (i = 0; i < speechesArray.length; i++) {
      if (speechesArray[i].year < oldestSpeech ) {
          oldestSpeech = speechesArray[i].year;
        } else if (speechesArray[i].year > newestSpeech) {
          newestSpeech = speechesArray[i].year;
        }
    } //do you need semicolon after for loops?

    //while loop function to determine Oldest speech, not sure if this should just be an if/else if instead of the two while statements?
    var theOldestSpeechFunction = function(speechSelectedOld) {
      while (oldestSpeech === speechSelectedOld.year){
        console.log('This is the oldest speech on the page');
        break;
      }
    };

    //while loop function to determine Newest speech
    var theNewestSpeechFunction = function(speechSelectedNew) {
      while (newestSpeech === speechSelectedNew.year) {
        console.log('This is the most recent speech on the page.');
        break;
      }
    };

    //Part of Week 5 Assignment, this was not addressed in Lesson 6 so kept the code but made more efficient with function
    //Function Author and Year msg associated with each nav button
    authorAndYear = function(speechClicked) {
      console.log("This speech was written by " + speechClicked.author + " in " + speechClicked.year + '.');
    };

    //Part of Week 5 Assignment, this was not addressed in Lesson 6 so kept the code but made more efficient with function
    //Function looks at speech objects boolean info yearIsBCE
    commonEra = function(speech) {
      if (speech.yearIsBCE === true) {
        console.log("This speech took place before the common era.");
      } else {
        console.log("This speech took place during the common era.");
      }
    };

document.getElementById('BtnDonate').addEventListener('click', function(){
  //var set to users input to window prompt
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');
  //for loop to loop through speechesArray and compare user input to object data
  for (i = 0; i < speechesArray.length; i++) {
    if(favoriteSpeechPrompt === speechesArray[i].author) {
      console.log(speechesArray[i].author + ' was ' + speechesArray[i].authorAge + ' during this speech.');
    }
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  authorAndYear(speechesArray[0]);
  commonEra(speechesArray[0]);
  theOldestSpeechFunction(speechesArray[0]);
  theNewestSpeechFunction(speechesArray[0]);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  authorAndYear(speechesArray[1]);
  commonEra(speechesArray[1]);
  theOldestSpeechFunction(speechesArray[1]);
  theNewestSpeechFunction(speechesArray[1]);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
    authorAndYear(speechesArray[2]);
    commonEra(speechesArray[2]);
    theOldestSpeechFunction(speechesArray[2]);
    theNewestSpeechFunction(speechesArray[2]);
});

//while loop executed on page load
var i = 0;
while (i < speechesArray.length) {
  console.log('This speech is written by ' + speechesArray[i].author);
  i++;
} // do you need a semi colon after while loop?
