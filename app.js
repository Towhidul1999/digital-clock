function digitalClock () {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let finalMonth = month + 1;
    let year = date.getFullYear();
    let clockFormat = "AM";

    if(hours == 0){
        hours = 12;
    }if(hours > 12){
        hours = hours - 12;
        clockFormat = "PM"
    }if(hours < 10){
        hours = "0" + hours;
    }if(minutes < 10){
        minutes = "0" + minutes;
    }if(seconds < 10){
        seconds = "0" + seconds;
    }if(day < 10){
        day = "0" + day;
    }if(month < 10){
        month = "0" + month;
    }

    let finalTime = `${hours}:${minutes}:${seconds}`;
    let getFinalYear = `${day}/${finalMonth}/${year}`;

    document.querySelector('#time').innerText = finalTime;
    document.querySelector('small').innerText = clockFormat;
    document.querySelector('#date').innerText = getFinalYear;

    setInterval(digitalClock, 1000);

}

digitalClock();