// select elements 
let hr = min = sec = ms = "0" + 0;
let hour = document.querySelector(".hour"),
    minute = document.querySelector(".minute"),
    second = document.querySelector(".second"),
    millisecond = document.querySelector(".millisecond");
let timeRuner;
// select buttons 
let startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");
// start Timer 
function startTimer () {
    timeRuner = setInterval(() => {
        ms++;
        millisecond.innerText = ms;
        if(ms === 100) {
            ms = 0;
            sec++;            
            if(sec < 10) {
                sec = "0" + sec;
            }else {
                sec = sec;
            }
            second.innerText = sec;
        }
        if(sec === 60) {
            sec = 0;
            min++;            
            if(min < 10) {
                min = "0" + min;
            }else {
                min = min;
            }
            minute.innerText = min;
        }
        if(min === 60) {
            min = 0;
            hr++;          
            if(hr < 10) {
                hr = "0" + hr;
            }else {
                hr = hr;
            }
            hour.innerText = hr;
        }
    }, 10)

}

// stop timer function 
function stopTimer () {
    clearInterval(timeRuner);
}

function resetTimer() {
    clearInterval(timeRuner);
    hr = "0" + 0;
    min = "0" + 0;
    sec = "0" + 0;
    ms = "0" + 0;
    hour.innerText = hr;
    minute.innerText = min;
    second.innerText = sec;
    millisecond.innerText = ms;
}
// start timer 
startBtn.addEventListener("click", startTimer);
// stop timer 
stopBtn.addEventListener("click", stopTimer);
// reset timer 
resetBtn.addEventListener("click", resetTimer);
