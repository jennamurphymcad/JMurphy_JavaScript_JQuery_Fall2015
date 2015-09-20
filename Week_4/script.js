var churchill = {
  author : 'Winston Churchill',
  year : 1940,
  bceOrNot : 'false'
};

var ghandi = {
  author : 'Ghandi',
  year : 1942,
  bceOrNot : 'false'
};

var demosthenes = {
  author : 'Demosthenes',
  year : 342,
  bceOrNot : 'true'
};

var myArray = ['churchill', 'ghandi', 'demosthenes'];

var yearDifference = ghandi.year - churchill.year;

console.log('Ghandi\'s speech and Churchill\'s speech are ' + yearDifference + ' years apart');


document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log('There are ' + myArray.length + ' speeches on the page.')
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log('This speech was written by ' + churchill.author + ' in ' + churchill.year + '. It is ' + churchill.bceOrNot + ' that this year is B.C.E.');
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log('This speech was written by ' + ghandi.author + ' in ' + ghandi.year + '. It is ' + ghandi.bceOrNot + ' that this year is B.C.E.');
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log('This speech was written by ' + demosthenes.author + ' in ' + demosthenes.year + '. It is ' + demosthenes.bceOrNot + ' that this year is B.C.E.');
});
