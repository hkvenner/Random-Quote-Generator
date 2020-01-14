/******************************************
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "It doesn’t matter if care is cutting-edge and technologically advanced; if it" + 
    "doesn’t take the patient’s goals into account, it may not be worth doing.",
    source: "Amy Berman"
  },
  {
    quote: "You can't use up creativity, the more you use the more you have. ",
    source: "Maya Angelou",
    citation: "Conversations with Maya Angelou",
    year: "1989"
  },
  {
    quote: "Innovators/entrepreneurs from outside of healthcare need to understand that what healthcare " +
    "desperately needs is not innovative technology alone, but first and foremost it is an experience (for both patients and providers)" +
    "that can elevate that care and compassion that is provided to patients. Technology designed with these principles" +
    "top of mind, that can seamlessly integrate in the complex, generally dated systems typically used in healthcare is" + 
     "essential as these older or less optimally designed systems will not be retired immediately.",
     source: "Rebecca Kaul, chief innovation officer, University of Texas MD Anderson Cancer Center"
  },
  {
    quote: "There is no greatness where there is no simplicity, goodness and truth.",
    source: "Leo Tolstoy"
  },
  {
    quote: " Technology can become the '\"wings\"' that will allow the educational world to fly farther and faster than " +
    " ever before - if we will allow it.",
    source: "Jenny Arledge"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];  
}

function printQuote() {
  var randomQuote = getRandomQuote();
  var html = ' ';
  html += '<p class= "quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source + </p>
}



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);