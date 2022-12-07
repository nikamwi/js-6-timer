function settime(){
    document.getElementById('hour').innerHTML = document.getElementById('sethour').value;
    document.getElementById('minute').innerHTML = document.getElementById('setminute').value;
    document.getElementById('second').innerHTML = document.getElementById('setsecond').value;
    document.getElementById('settimer').style.display = "none";
    document.getElementById('divi').style.display = "block";
}

const startEl = document.getElementById('start');
const pausEl = document.getElementById('paus');
const roundEl = document.getElementById('round');
const resetEl = document.getElementById('reset');
const rounds = document.getElementById('rounds');


const seconds = document.getElementById('second');
const minutes = document.getElementById('minute');
const hours = document.getElementById('hour');

// veranairad avamushave taimeri/


function start() {
    intervalId = setInterval(() => {
        // seconds -- ;

        if (seconds > 0) {
            seconds --;
        }
        else if (seconds == 0 && minutes > 0) {
            minutes --;
            seconds == 60;
        }
        else if (seconds == 0 && minutes == 0 && hours > 0) {
            hours --;
            minutes == 60;
        }
        // else if (seconds == 0 && minutes == 0 && hours == 0) {
            
        // }
    }, 100);
}

function round() {
    const round = document.createElement('div');
    round.innerText = `${hPassed}:${mPassed}:${sPassed}`;
    rounds.append(round);
}
