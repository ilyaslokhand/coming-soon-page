let CountDownDate = new Date("26 OCT, 2024 00:00:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = CountDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  days;
  document.getElementById("days").innerHTML = days;
  document.getElementById("Hours").innerHTML = hours;
  document.getElementById("Minutes").innerHTML = minutes;
  document.getElementById("Seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = 0;
    document.getElementById("Hours").innerHTML = 0;
    document.getElementById("Minutes").innerHTML = 0;
    document.getElementById("Seconds").innerHTML = 0;
  }
}, 1000);
