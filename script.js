const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let passedTime = 0; //to store passed time in milliseconds
let currentTime = 0;
let paused=true;
let intervalId;
let hours = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", ()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - passedTime;
        intervalId = setInterval(updateTime,1000); //every 75 millisecs updates time
    }
})

pauseBtn.addEventListener("click", ()=>{
    if(!paused){
        paused = true;
        passedTime = Date.now() - startTime;
        clearInterval(intervalId); //stopping the timer
    }

})

resetBtn.addEventListener("click", ()=>{
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    passedTime = 0; 
    currentTime = 0;
    hours = 0;
    mins = 0;
    secs = 0;
    display.textContent = "00:00:00";

})

function updateTime(){
    passedTime = Date.now() - startTime; //calculate time passed Date.now() Returns the number of milliseconds elapsed since

    secs=Math.floor((passedTime / 1000) %60);
    mins=Math.floor((passedTime / (1000*60)) %60);
    hours=Math.floor((passedTime / (1000*60*60)) %60);


    secs = pad(secs);
    mins = pad(mins);
    hours = pad(hours);
    display.textContent = `${hours}:${mins}:${secs}`;
    //to display two zeros as 00:00:00 add padding
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0"+ unit;
    }
}

