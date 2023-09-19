let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let countdowndiv = document.getElementById("countdownDiv");
let text = document.getElementById("text");

let mode = 0;

function setmode(number){
    mode = number;
    update();
}

function update(){
    let milisecLeft;
    
    console.log(mode);
    
    let curentTime = new Date().getTime();
    
    if(mode == 0){
    
    let dayOfTheWeek = new Date().getDay();
    
    if(dayOfTheWeek == 0){
        dayOfTheWeek = 7;
    }
    
    milisecLeft = (5-dayOfTheWeek)*24*60*60*1000 + 13*60*60*1000 + 10*60*1000 - curentTime%(24*60*60*1000);
    
    if(milisecLeft < 0){
        countdowndiv.style.display = "none";
        text.innerHTML = "It is the weekend right now!";
    }else{
        countdowndiv.style.display = "flex";
        text.innerHTML = "Weekend";
    }
        
    }else if(mode == 1){
        milisecLeft = new Date("24 dec "+(new Date().getYear()+1900)).getTime() - curentTime;
        
        if(milisecLeft < 0){
            milisecLeft = new Date("24 dec "+(new Date().getYear()+1901)).getTime() - curentTime;
        }

        if(milisecLeft<0 && milisecLeft > -24*60*60*1000){
            countdowndiv.style.display = "none";
            text.innerHTML = "It is X-mas right now!";
        }else{
            countdowndiv.style.display = "flex";
            text.innerHTML = "X-mas";
        }
    }else if(mode == 2){
        milisecLeft = new Date("20 jun "+(new Date().getYear()+1900)).getTime() - curentTime;
        
        if(milisecLeft < 0){
            milisecLeft = new Date("20 jun "+(new Date().getYear()+1901)).getTime() - curentTime;
        }

        if(milisecLeft<0 && milisecLeft > -24*60*60*1000){
            countdowndiv.style.display = "none";
            text.innerHTML = "It is my B-day right now!";
        }else{
            countdowndiv.style.display = "flex";
            text.innerHTML = "My B-day in:";
        }
    }
    
    
    
    secondsLeft = Math.floor(milisecLeft / 1000);
    minutesLeft = Math.floor(secondsLeft/60);
    hoursLeft = Math.floor(minutesLeft/60);
    daysLeft = Math.floor(hoursLeft/24);

    seconds.textContent = secondsLeft % 60;
    minutes.textContent = minutesLeft % 60;
    hours.textContent = hoursLeft % 24;
    days.textContent = daysLeft;
}

update();
setInterval(update,1000);