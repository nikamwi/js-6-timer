let hour, minute,second;

function settime(){
    document.getElementById('hour').innerHTML = document.getElementById('sethour').value;
    document.getElementById('minute').innerHTML = document.getElementById('setminute').value;
    document.getElementById('second').innerHTML = document.getElementById('setsecond').value;
    document.getElementById('settimer').style.display = "none";
    document.getElementById('divi').style.display = "block";
    
}


function start() {
    hour = document.getElementById('hour').innerHTML;
    minute = document.getElementById('minute').innerHTML;
    second = document.getElementById('second').innerHTML;


    hour  *= 1;
    minute  *= 1;
    second  *= 1;
    
    
    intervalId = setInterval(() => {
        second -1 ;

        if (second > 0) {
            second -= 1;
        }
        else if (second = 0 || minute > 0) {
            minute -= 1;
            second = 60;
        }
        else if (second = 0 || minute == 0 || hour > 0) {
            hour-= 1;
            minute = 60;
        }
        else if (second == 0 || minute == 0 || hour == 0) {
            second == 0;
            minute == 0;
            hour == 0;
        }
        document.getElementById("second").innerHTML = second
        document.getElementById("minute").innerHTML = minute
        document.getElementById("hour").innerHTML = hour
        document.getElementById("start").style.display = "none"
        document.getElementById("paus").style.display = "block"
    }, 1000);
}

function round() {
    const round = document.createElement('div');
    round.innerText = `${hPassed}:${mPassed}:${sPassed}`;
    round.append(round);
}
