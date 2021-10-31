function digitalClock () {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
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
    }

    let finalTime = `${hours}:${minutes}:${seconds}`;

    document.querySelector('#time').innerText = finalTime;
    document.querySelector('small').innerText = clockFormat;

    setInterval(digitalClock, 1000);

}

digitalClock();