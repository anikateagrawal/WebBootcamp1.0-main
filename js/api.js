const url="https://api.covid19api.com/summary";

function fetchData()
{
    fetch(url).then((res)=>{return res.json()}).then((data)=>getData(data)).catch((error)=>console.log(error.message));
}
function getData(data)
{
    console.log(data.Countries);
    for (let i of data.Countries)
    {
        if(i.Country=="India")
        {
            let country=document.createElement("span");
            let date=document.createElement("span");
            let tcases=document.createElement("span");
            let tdeaths=document.createElement("span");
            let ncases=document.createElement("span");
            let ndeaths=document.createElement("span");
            country.textContent="India";
            date.textContent=`${Date()}`;
            tcases.textContent=`${i.TotalConfirmed}`;
            tdeaths.textContent=`${i.TotalDeaths}`;
            ncases.textContent=`${i.NewConfirmed}`;
            ndeaths.textContent=`${i.NewDeaths}`;
            document.getElementById("name").appendChild(country);
            document.getElementById("date").appendChild(date);
            document.getElementById("tcases").appendChild(tcases);
            document.getElementById("tdeaths").appendChild(tdeaths);
            document.getElementById("ncases").appendChild(ncases);
            document.getElementById("ndeaths").appendChild(ndeaths);        
        }
    }
   
}
fetchData();