/******************************************
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "It doesn’t matter if care is cutting-edge and technologically advanced; if it" + 
    " doesn’t take the patient’s goals into account, it may not be worth doing.",
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
     " essential as these older or less optimally designed systems will not be retired immediately.",
     source: "Rebecca Kaul, Chief Innovation Officer, University of Texas MD Anderson Cancer Center",
     tags: ["healthcare", "innovation"]
  },
  {
    quote: "There is no greatness where there is no simplicity, goodness and truth.",
    source: "Leo Tolstoy",
    tags: ["simplicity"]
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


/***
 * `printQuote` function. Prints a random quote to the page when the "show another quote" button is 
 * clicked
***/
function printQuote() {
  var randomQuote = getRandomQuote();
  var html = ' ';
  html += '<p class= "quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.hasOwnProperty("citation")){
    html += '<span class= "citation">' + randomQuote.citation + '</span>';
  }

  if (randomQuote.hasOwnProperty("year") ){
    html += '<span class= "year">' + randomQuote.year + '</span>';
  }

  if (randomQuote.tags ){
    html += '<span class= "tags-headline"> Tags: </span>';
    for (let i =0 ; i < randomQuote.tags.length ; i ++){
      html += '<span class= "tags">' + randomQuote.tags[i] + ' </span>';
    }
  }

  html += '</p>';
  
  document.getElementById("quote-box").innerHTML = html;
}

function changeBackgroundColor(){
  //randomly changes the background colors - burgundy, burnt orange, navy blue, indigo
  var colors = ["#800020", "#cc5500","#000080", "#4b0082"];
  var randomColor = colors[Math.floor(Math.random()* colors.length)];
  document.body.style.background = randomColor;
}
//auto-refreshes the quote and background color
var intervalID = window.setInterval(printQuote, 20000);
var intervalID = window.setInterval(changeBackgroundColor, 20000);

/***
 * Event Listener that allows a new quote to appear on the page when the "show another quote" button 
 * is clicked
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", changeBackgroundColor, false);