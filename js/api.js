const url="https://api.covid19api.com/summary";

function fetchData()
{
    fetch(url).then((res)=>res.json()).then((data)=>{this.data=data;getData()}).catch((error)=>console.log(error.message));
}
var data;

function getData()
{
    var s=document.getElementById("country").value;
    for (let i of data.Countries)
    {
        if(i.Country==s)
        {
            document.getElementById("name").textContent=i.Country;
            document.getElementById("date").textContent=new Date().toDateString();
            document.getElementById("tcases").textContent=i.TotalConfirmed;
            document.getElementById("tdeaths").textContent=i.TotalDeaths;
            document.getElementById("ncases").textContent=i.NewConfirmed;
            document.getElementById("ndeaths").textContent=i.NewDeaths;      
        }
    }
}
fetchData();