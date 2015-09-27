//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
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


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var favAuthor = window.prompt("Who is your favorite author?");
  var result;

  switch (favAuthor) {

    case speechesArray[0].author:
      console.log(speechesArray[0].author + ' was ' + speechesArray[0].authorAge + ' during this speech.');
      break;

    case speechesArray[1].author:
      console.log(speechesArray[1].author + ' was ' + speechesArray[1].authorAge + ' during this speech.');
      break;

    case speechesArray[2].author:
      console.log(speechesArray[2].author + ' was ' + speechesArray[2].authorAge + ' during this speech.');
      break;

    default:
      console.log("Sorry, something is not quite right with your response. Please check your spelling and try again.");
      break; //break needed after default?
  }

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});


var User = window.prompt('What is your name?'); // note** Assignment asks for variable to be "User", isn't this incorrect syntax to have a capital?
if (typeof User === 'string' && User.hasOwnProperty('length') !== "") {
    console.log('Hi ' + User + '!');
} else {
    console.log("Ok, I\'ll just call you User.");
}
