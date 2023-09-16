let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let countdowndiv = document.getElementById("countdownDiv");
let text = document.getElementById("text");

function update(){
    let curentTime = new Date().getTime();
    
    let day = new Date().getDate();
    let dayOfTheWeek = new Date().getDay();
    
    if(dayOfTheWeek == 0){
        dayOfTheWeek = 7;
    }
    day += 5-dayOfTheWeek;
    
    let targetTime = new Date(new Date().getMonth()+1+" "+day+" "+(new Date().getYear()+1900)+" 15:10:00").getTime();

    milisecLeft = targetTime - curentTime;
    
    if(milisecLeft < 0){
        countdowndiv.style.display = "none";
        text.innerHTML = "It is the weekend right now!";
    }else{
        countdowndiv.style.display = "flex";
        text.innerHTML = "Weekend";
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