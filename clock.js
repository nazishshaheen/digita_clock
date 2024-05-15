// Getting Elements  
let hourDisp = document.getElementById('hours');
let minDisp = document.getElementById('minute');
let secondTags = document.getElementsByTagName('p');
let dateDisp = document.getElementById('date');
let monthDisp = document.getElementById('month');
let yearDisp = document.getElementById('year');
let dayDisp = document.getElementById('day');
// Declaring variables for clock
let sec = 0;
let min = 0;
let hour = 0;
let date = 1;
let month = 0;
let year = 2000;
let day = 0;
let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

setInterval(setSec, 1000);
function setSec() {
    if (sec < 59) {
        sec++;
    } else {
        sec = 0;
        setMin();
    }
    secondsDisplay();
    minDisp.innerHTML = min.toString().padStart(2, '0');
    hourDisp.innerHTML = hour.toString().padStart(2, '0');
}

function secondsDisplay() {
    for (let i = 0; i < sec; i++) {
        secondTags[i].style.visibility = 'visible';
    }
    for(let j = sec; j < 60;j++){
        secondTags[j].style.visibility = 'hidden';
    }
}

function setMin() {
    if (min < 59) {
        min++;
    } else {
        min = 0;
        setHour();
    }
    alarm(hour,min)?console.log("Your Alarm is Ringing :)"):"";
    
}
function setHour() {
    if (hour < 23) {
        hour++;
    } else {
        hour = 0;
        setDay();
        setDate();
    }
}
function setDay() {
    if (day < 6) {
        day++;
    } else {
        day = 0;
    }
}

function setDate() {
    if (date < 31 && (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11)) {
        date++;
    } else if (date < 30 && (month === 3 || month === 5 || month === 8 || month === 10)) {
        date++;
    } else if (date < 29 && isLeapYear(year)) {
        date++;
    } else if (date < 28 && !(isLeapYear(year))) {
        date++;
    } else {
        date = 1;
        setMonth();
    }
    console.log(day);
    dateDisp.innerHTML = date.toString().padStart(2, '0');
    dayDisp.innerHTML = dayArray[day];
    monthDisp.innerHTML = monthArray[month];
    yearDisp.innerHTML = year;

}
function setMonth() {
    if (month < 11) {
        month++;
    } else {
        month = 0;
        year++;
    }
}
function setTime(_hour, _min, _sec) {
    hour = _hour;
    min = _min;
    sec = _sec;
}
function setCalendar(_date, _month, _year, _day) {
    date = _date;
    month = _month;
    year = _year;
    day = _day;
    dateDisp.innerHTML = date.toString().padStart(2, 0);
    monthDisp.innerHTML = monthArray[month];
    yearDisp.innerHTML = year;
    dayDisp.innerHTML = dayArray[day];
}
let compDate = new Date();
setTime(compDate.getHours(), compDate.getMinutes(), compDate.getSeconds());
setCalendar(compDate.getDate(), compDate.getMonth(), compDate.getFullYear(), compDate.getDay());

// Alarm 
function setAlarm(_hour,_min){
    let aHour = _hour;
    let aMin = _min;
    return function (cHour,cMin){
        if(aHour === cHour && aMin === cMin){
            return true;
        }
        return false;
    } 
}
let alarm = setAlarm(20,34);

// Utility Function Area
function isLeapYear(year) {
    if (year % 4 == 0 && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}
