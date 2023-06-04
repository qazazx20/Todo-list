const API_KEY = "43f5f3f85d455251c7055854e3c2ebbb";

const icon = document.querySelector("#weather img:first-child");
const name = document.querySelector("#weather span:first-of-type");
const temp = document.querySelector("#weather span:nth-of-type(2)");
const weather = document.querySelector("#weather span:last-of-type");

function onGeoSucc(position) {
    const lat = position.coords.latitude; // 경도
    const lon = position.coords.longitude; // 위도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            name.innerText = `${data.name}`;
            temp.innerText = Math.round(`${data.main.temp}`)+'℃';
            weather.innerText = `${data.weather[0].main}`
        });
}


function onGeoError() {
    alert("위치 정보를 받아올 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoSucc, onGeoError);