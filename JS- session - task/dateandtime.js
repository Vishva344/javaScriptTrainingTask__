//Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
let d1 = new Date(2012, 1, 20, 3, 12);
console.log( d1 );
//Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 Jan 2014
  console.log( getWeekDay(date) ); // FR   
  
    
  //European countries have days of week starting with Monday (number 1), 
  //then Tuesday (number 2) and till Sunday (number 7). 
  //Write a function getLocalDay(date) that returns the “European” day of week for date.
  function getLocalDay(date1) {

    let day = date1.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }
  let date1 = new Date(2012, 0, 4);  // 3 Jan 2012
console.log( getLocalDay(date1) ); 
//Create a function getDateAgo(date, days) to return the day of month days ago from the date.
//For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }
  let date2 = new Date(2023, 2, 26);

  console.log( getDateAgo(date2, 1) ); 
  console.log( getDateAgo(date2, 2) );
  console.log( getDateAgo(date2, 3) ); 
  console.log( getDateAgo(date2, 365) ); 
//Write a function getLastDayOfMonth(year, month) that returns the last day of month. 
//Sometimes it is 30th, 31st or even 28/29th for Feb.
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  console.log( getLastDayOfMonth(2012, 0) ); 
  console.log( getLastDayOfMonth(2012, 1) ); 
  console.log( getLastDayOfMonth(2013, 1) ); 
//Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
//For instance, if now were 10:00 am, and there was no daylight savings shift, then:
function getSecondsToday() {
    let now = new Date();
  
    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; // ms difference
    return Math.round(diff / 1000); // make seconds
  }
  
  console.log( getSecondsToday() );
//Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86900;
  
    return totalSecondsInADay - totalSecondsToday;
  }
  console.log(getSecondsToTomorrow());
/* Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
For instance:*/

function formatDate(date) {
    let diff = new Date() - date; // difference in milliseconds
  
    if (diff < 1000) { // less than 1 second
      return "right now";
    }
  
    let sec = Math.floor(diff / 1000); // convert to seconds
  
    if (sec < 60) { // less than 1 minute
      return sec + " sec. ago";
    }
  
    let min = Math.floor(diff / 60000); // convert to minutes
  
    if (min < 60) { // less than 1 hour
      return min + " min. ago";
    }
  
    // format the date
    let d = date;
    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of each component
  
    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
  }
  let date11 = new Date("2023-02-26T08:30:00");
  console.log(formatDate(date11)); // "26.02.2023 08:30"
  
  let date22 = new Date("2023-02-26T08:25:15");
  console.log(formatDate(date22)); // "5 min. ago"
  
  let date33 = new Date("2023-02-26T08:24:30");
  console.log(formatDate(date33)); // "1 min. ago"
  
  let date44 = new Date("2023-02-26T08:24:00");
  console.log(formatDate(date44)); // "right now"
    