//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
//Authors: Creator of Assignment7_start files, Jenna Murphy (leveraging own code from previous weeks assignments), and please see notes regarding leveraged code from Lecture 7.1.5
//Note: most of the comments throughout are just displaying my thought process and questions to remind myself to look up later. Feel free to ignore!

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
    authorAndYear,
    commonEra,
    theOldestSpeechFunction,
    theNewestSpeechFunction,
    donateValue,
    donateHeadingLess,
    h3TextLess,
    donateHeadingHigh,
    h3TextHigh,
    articles,
    oldest = speechesArray[0].year,
    newest = speechesArray[0].year;

// bit of trouble figuring out adding the <br> to string. After trial and error this formatting does not throw any console log errors. Is this the best way to add in HTML elements?
// Also, would best practice be to create a 'p' element and use append child to the ConsoleDisplay element to create more unique nodes for each button instead of getElementById.innerHTML?
//Function Author and Year msg associated with each nav button
authorAndYear = function(speechClicked) {
  document.getElementById("ConsoleDisplay").innerHTML = "This speech was written by " + speechClicked.author + " in " + speechClicked.year + "<br>";
};

commonEra = function(speech) {
  if(speech.yearIsBCE === true){
    document.getElementById("ConsoleDisplay").innerHTML  += "This speech took place before the common era." + "<br>";
  }else{
    document.getElementById("ConsoleDisplay").innerHTML  += "This speech took place during the common era." + "<br>";
  }
};

//for loop to compare object years to the oldest/newest variables and resetting values
for(var i = 0; i < speechesArray.length; i++){
  if(speechesArray[i].year < oldest){
    oldest = speechesArray[i].year;
  }
  if(speechesArray[i].year > newest){
    newest = speechesArray[i].year;
  }
}

//conditional function to determine Oldest speech
theOldestSpeechFunction = function(speechSelectedOld) {
  if(speechSelectedOld.year === oldest){
    document.getElementById("ConsoleDisplay").innerHTML += "This is the oldest speech on the page.";
  }
};

//conditional function to determine Newest speech
theNewestSpeechFunction = function(speechSelectedNew) {
  if(speechSelectedNew.year === newest){
    document.getElementById("ConsoleDisplay").innerHTML += "This is the most recent speech on the page.";
  }
};


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  donateValue = prompt("How much would you like to donate?");
  //Is there a more efficient way to write this if/else if? Should there be just one h3 variable that could be for either option, or should they be distinctly different?
  //textNode and createElement code leveraged from Lecture 7.1.5 creating DOM Elements
  //See notes about setAttribute, could not get to change color.
  if (donateValue < 100) {
    donateHeadingLess = document.createElement('h3');
    h3TextLess = document.createTextNode("Thank you for your donation of $" + donateValue);
    donateHeadingLess.appendChild(h3TextLess);
    document.getElementById("SideNav").appendChild(donateHeadingLess);
  } else if (donateValue >= 100) {
    donateHeadingHigh = document.createElement('h3');
    h3TextHigh = document.createTextNode("Thank you for your very generous donation!");
    donateHeadingHigh.appendChild(h3TextHigh);
    document.getElementById("SideNav").appendChild(donateHeadingHigh);

    //donateHeadingHigh = document.getElementById('donateHeadingHigh'); //Uncaught TypeError: Cannot read property 'setAttribute' of null
    //donateHeadingHigh.setAttribute("color", "#DB152C"); //*setAttribute is not working? this does work when i use align attribute, not sure what's going on.
    //document.getElementById('donateHeadingHigh').setAttribute('color','red'); Uncaught TypeError: Cannot read property 'setAttribute' of null
    donateHeadingHigh.style.color = "#DB152C"; //alternative to setAttribute

    articles = document.getElementsByTagName("article");
    for(var i = 0; i < articles.length; i++) {
        document.getElementById(articles[i].id).className = "generous-donation"; //is using .id the best solution? took a while to figure out by trial and error. without .id console log throws Uncaught TypeError message
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
