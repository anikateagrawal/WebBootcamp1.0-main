const url = "https://api.covid19api.com/summary";
var data;
fetchData();
function fetchData() {
    fetch(url).then((res) => res.json()).then((data) => { this.data = data; list(); getData() }).catch((error) => console.log(error.message));
}

function list() {
    var c = 0
    var l = document.getElementById("country");
    for (let i of data.Countries) {
        var a = document.createElement("option");
        a.value = c++; a.textContent = i.Country;
        l.appendChild(a);
        if (a.textContent == "India") {
            a.selected = true;
        }
    }
}

function getData() {
    var s = data.Countries[document.getElementById("country").value];
    document.getElementById("name").textContent = s.Country;
    document.getElementById("date").textContent = new Date().toDateString();
    document.getElementById("tcases").textContent = s.TotalConfirmed;
    document.getElementById("tdeaths").textContent = s.TotalDeaths;
    document.getElementById("ncases").textContent = s.NewConfirmed;
    document.getElementById("ndeaths").textContent = s.NewDeaths;


}
