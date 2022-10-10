window.onload = function() {
    let seconds = 00;
    let minutes = 00;
    let appendSeconds = document.getElementById("seconds");
    let appendMinutes = document.getElementById("minutes");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");

    let Interval;

    buttonStart.onclick = function(){

        clearInterval(Interval);
        Interval = setInterval(TaskCounter, 1000);
    }

    buttonStop.onclick = function(){

        clearInterval(Interval);
    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        seconds = "00";
        minutes = "00";
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }

    function TaskCounter (){
        
        seconds++

        if(seconds<=9){
            appendSeconds.innerHTML = "0" + seconds;
        }

        if(seconds>9){
            appendSeconds.innerHTML = seconds;
        }

        if(seconds>59){
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = "0";
            appendSeconds.innerHTML = "0" + 0;
        }

        if(minutes>9){
            appendMinutes.innerHTML = minutes;
        }
    }
}