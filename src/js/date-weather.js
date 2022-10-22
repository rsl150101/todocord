const clock = document.getElementById("clock");
const today = document.getElementById("today");
const weatherImg = document.getElementById("weather__icon");
const city = document.getElementById("city");
const API_KEY = "f92809414158f7a33b9694a4d39fcd42";

function inputDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dow = date.getDay();
  const hour = date.getHours().toString();
  const min = date.getMinutes().toString();
  const sec = date.getSeconds().toString();
  today.textContent = `${year}.${month.padStart(2, 0)}.${day.padStart(2, 0)} (${
    week[dow]
  })`;
  clock.textContent = `${hour.padStart(2, 0)} : ${min.padStart(
    2,
    0
  )} : ${sec.padStart(2, 0)}`;
}

function geoSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      weatherIcon = data.weather[0].icon;
      weatherImg.src = `src/images/weather-icon/${weatherIcon}.png`;
      city.textContent = data.name;
    });
}

function geoError() {
  alert("Error! Please try again");
}

navigator.geolocation.getCurrentPosition(geoSucess, geoError);
inputDate();
setInterval(inputDate, 1000);
