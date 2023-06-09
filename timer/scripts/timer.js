var seconds = 1;
var x = setInterval(function () {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var secondsToShow = (seconds % 3600) % 60;
  document.getElementById("timer").innerHTML =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (secondsToShow < 10 ? "0" + secondsToShow : secondsToShow);
  seconds++;
}, 1000);

// 3883757255
