// Today's date
var now = new Date();

// Creating array of days (getDay always starts with Sunday)
var weekday = new Array();
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// Creating array of months
var monthYear = new Array();
monthYear[0] = "January";
monthYear[1] = "February";
monthYear[2] = "March";
monthYear[3] = "April";
monthYear[4] = "May";
monthYear[5] = "June";
monthYear[6] = "July";
monthYear[7] = "August";
monthYear[8] = "September";
monthYear[9] = "October";
monthYear[10] = "November";
monthYear[11] = "December";

// Variables for date, month and time
var checkTime = function() {
  var dayOfWeek = now.getDay();
  var nbDate = now.getDate(); 
  var month = now.getMonth(); 
  var hour = now.getHours(); 
  var minutes = now.getMinutes(); 
  var today = weekday[dayOfWeek]; 
  var thisMonth = monthYear[month];

// Inserting date and time in div
var updateOpening = document.getElementById('updateOpening');

// Choosing 24h time (not am/pm)
var suffix = hour >= 24 ? "" : "";

// Adding 0 to one digit minutes
if (minutes < 10) {
    minutes = "0" + minutes
}; 

// =============== CLOSING EARLY =============== 

// Variables for opening hours (if closing early)
var earlyTuesday = document.getElementById("earlyTuesday");
var earlyWednesday = document.getElementById("earlyWednesday");
var earlyThursday = document.getElementById("earlyThursday");
var earlyFriday = document.getElementById("earlyFriday");
var earlySaturday = document.getElementById("earlySaturday");


// Button "close early"
var btn = document.getElementById("close"); 
btn.addEventListener("click", closeEarly);

function closeEarly() {
    // Closing early on Tuesday
    if ((dayOfWeek == 2) && hour >= 9 && hour <= 18)
    { 
    earlyTuesday.innerHTML = '9h - ' + hour + 'h' + minutes + suffix; 
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Go to hell, we\'re closing early today ! <br/><br/><img class="picture" src="https://media1.tenor.com/images/34fecae7c3f348f0606c7ad9d5489f48/tenor.gif?itemid=3389550">';
    timeDiv.className = 'closed';
    }

    // Closing early on Wednesday
    else if ((dayOfWeek == 3) && hour >= 9 && hour <= 18)
    { 
    earlyWednesday.innerHTML = '9h - ' + hour + 'h' + minutes + suffix; 
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Go to hell, we\'re closing early today ! <br/><br/><img class="picture" src="https://media1.tenor.com/images/34fecae7c3f348f0606c7ad9d5489f48/tenor.gif?itemid=3389550">';
    timeDiv.className = 'closed';
    }

    // Closing early on Thursday
    else if ((dayOfWeek == 4) && hour >= 9 && hour <= 18)
    { 
    earlyThursday.innerHTML = '9h - ' + hour + 'h' + minutes + suffix; 
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Go to hell, we\'re closing early today ! <br/><br/><img class="picture" src="https://media1.tenor.com/images/34fecae7c3f348f0606c7ad9d5489f48/tenor.gif?itemid=3389550">';
    timeDiv.className = 'closed';
    }

    // Closing early on Friday
    else if ((dayOfWeek == 5) && hour >= 9 && hour <= 18)
    { 
    earlyFriday.innerHTML = '9h - ' + hour + 'h' + minutes + suffix; 
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Go to hell, we\'re closing early today ! <br/><br/><img class="picture" src="https://media1.tenor.com/images/34fecae7c3f348f0606c7ad9d5489f48/tenor.gif?itemid=3389550">';
    timeDiv.className = 'closed';
    }

    // Closing early on Saturday
    else if ((dayOfWeek == 6) && hour >= 9 && hour <= 18)
    { 
    earlySaturday.innerHTML = '9h - ' + hour + 'h' + minutes + suffix; 
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Go to hell, we\'re closing early today ! <br/><br/><img class="picture" src="https://media1.tenor.com/images/34fecae7c3f348f0606c7ad9d5489f48/tenor.gif?itemid=3389550">';
    timeDiv.className = 'closed';
    }
 };

 // =============== OPENED YES/NO ===============

  // Closed on Sunday and Monday
  if ((dayOfWeek == 0 || dayOfWeek == 1) && hour >= 0 && hour <= 23) {
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Oh crap, we\'re closed ! <br/><br/><img class="picture" src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif">';
    timeDiv.className = 'closed';
  } 

  // Open from Tuesday to Saturday 9h-18h
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5 || dayOfWeek == 6) && hour >= 9 && hour <= 18) {
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Hooray, we\'re open ! <br/><br/><img class="picture" src="https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif">';
    timeDiv.className = 'open';
  } 

  // Closed from Tuesday to Saturday 0h-9h 
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5 || dayOfWeek == 6) && hour >= 0 && hour < 9) {
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Oh crap, we\'re closed ! <br/><br/><img class="picture" src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif">';
    timeDiv.className = 'closed';
  } 

  // Closed from Tuesday to Saturday 18h-23h 
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5 || dayOfWeek == 6) && hour > 18 && hour <= 23) {
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Oh crap, we\'re closed ! <br/><br/><img class="picture" src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif">';
    timeDiv.className = 'closed';
  } 

  // Closing early when button clicked 
  else if (closeEarly()) { 
    textEarly.innerHTML = '9h - ' + hour + 'h' + ' ' + minutes + suffix; 
    updateOpening.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Go to hell, we\'re closing early today ! <br/><br/><img class="picture" src="https://media1.tenor.com/images/34fecae7c3f348f0606c7ad9d5489f48/tenor.gif?itemid=3389550">';
    timeDiv.className = 'closed';
  }
};

// Clock updates every 30 seconds
setInterval(checkTime, 30000);
checkTime();