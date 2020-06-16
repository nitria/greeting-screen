var text = document.querySelector("h1");
var input = document.querySelector("input");
var greetings;

function displayTime() {
  date = new Date();
  hours = date.getHours() % 24;
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  time = document.querySelector("span");
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  time.innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(displayTime, 1000);

input.addEventListener("keydown", function (enter) {
  if (enter.keyCode === 13) {
    greet();
    input.style.display = "none";
  }
});

function greet() {
  if (hours > 5 && hours < 12) {
    greetings = "Goodmorning";
    document.body.style.backgroundImage = "url(morning.jpg)";
  } else if (hours > 12 && hours < 18) {
    greetings = "Good afternoon";
    document.body.style.backgroundImage = "url(afternoon.jpg)";
  } else {
    greetings = "Good evening";
    document.body.style.backgroundImage = "url(evening.jpg)";
  }
  text.innerHTML = greetings + " " + input.value + "!";
}

function reload() {
  document.querySelector("input").value = "";
}

window.onload = reload;
