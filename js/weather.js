const API_KEY = "8ba4da2fcca28e93dd7087c0cb6414e1";
function onGeoFine(loc){
    const lat = loc.coords.latitude;
    const lon = loc.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json()
    .then(data=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    }))
}

function onGeoError(){
    alert("Error!");
}
navigator.geolocation.getCurrentPosition(onGeoFine,onGeoError);