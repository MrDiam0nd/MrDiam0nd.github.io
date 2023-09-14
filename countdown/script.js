let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const targetDate = "16 Jun 2023";
const targetTime = new Date(targetDate).getTime();

function update(){
    let curentTime = new Date().getTime();

    milisecLeft = targetTime - curentTime;

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