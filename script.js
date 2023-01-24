let items = document.querySelectorAll(".countdown-item > h4");
let countdownDate = new Date(2022, 9, 29, 12, 29, 0).getTime();
function getCountTime() {
  let now = new Date().getTime();
  let distance = countdownDate - now;
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMinute = 60 * 1000;
  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);
  let values = [days, hours, minutes, seconds];
  items.forEach(function (item, index) {
    item.textContent = values[index];
  });

  if (distance < 0) {
    clearInterval(countdown);
    alert("Срочно целуй зефирку!!");
  }
}
let countdown = setInterval(getCountTime, 1000);
getCountTime();
