const url = "https://api.open-meteo.com/v1/forecast?latitude=27.18&longitude=78.01&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours,windspeed_10m_max,sunrise,sunset&current_weather=true&timezone=IST";
var data;
fetchData();
function fetchData() {
    fetch(url).then((res) => res.json()).then((data) => { this.data = data; console.log(data) }).catch((error) => console.log(error.message));
}