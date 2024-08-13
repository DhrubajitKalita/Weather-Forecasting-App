const api = {
    key: "ad219a43be320b6d19cfad6632cec048",
    base: "https://api.openweathermap.org/data/2.5/"
}
const searchBox = document.querySelector("#searchBox");
const container = document.querySelector(".container");
searchBox.addEventListener('keypress', setCity);

function setCity(evt) {
    if (evt.keyCode == "13") {
        container.style.height = "60vh";
        getresults(searchBox.value);
        searchBox.value = "";
    }
}
function getresults(query) {
    fetch(api.base + "weather?q=" + query + "&units=metric&appid=" + api.key).then(weather => {
        return weather.json();
    }).then(displayWeather);
}

function displayWeather(weather) {
    console.log(weather);
    let location = document.querySelector(".city");
    location.innerText = weather.name + ", " + weather.sys.country;

    let temp = document.querySelector(".temp");
    temp.innerText = Math.round(weather.main.temp) + "°C"

    let weatherDescription = document.querySelector(".description");
    weatherDescription.innerText = weather.weather[0].main;
}