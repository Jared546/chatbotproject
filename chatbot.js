function askQuestion() {
  var input = document.getElementById("input").value;
  var giveresponse = responses[input]
  document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + " " + "<br>";
}

var responses = {
  "How are you?" : "Very very good. And you?",
  "What's your name?" : "Me llamo Felipe",
  "How old are you?" : "I am a very young adult.",
  "Do you know what time it is?" : "I do not know, sorry ):",
  "what is the date" : "Today is " + weekDayConversion[weekday],
"what month are we in" : "The month is " + monthConversion[month],
"what is the time" : "The time is " + timeConvertion[time]
}


var fallBackResponse = ["Can you repeat that, por favor"];

if(response[userInput] == undefined) {
  var rand= Math.floor((Math.random()* myArray.length));
  var fallBackAnswer= fallBackResponse[random];
  document.getElementById("chat-area").innerHTML += input +":" +fallBackResponse +"";
}

var date = new Date();
var weekday = date.getUTCDay();
var month = date.getMonth();
var year = date.getFullYear();
var day = date.getDate();
var time = date.getTime();

var weekDayConversion = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wedsday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
}

var monthConversion = {
  0: "January",
  1: "Febuary",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
}
