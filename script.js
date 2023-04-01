
let display = document.getElementById("show");
let input = document.getElementById("search");

let cardes = []

let users = [];
async function loadData() {
 
    let output = " ";
   await fetch("https://restcountries.com/v3.1/all")
    .then(res =>  res.json())
    .then(datas => {
      users = datas.map((data,index) => {
            //console.log(data)
            output += `<div id="design">
            <div id="flip-card" class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img  alt="Avatar" src = "${data.flags.png}" style="width:300px;height:200px;">
                <h2 Class="country"> ${(data.name.common).toUpperCase()}</h1>
              </div>
              <div class="flip-card-back">
                <h2 class="country1">${(data.name.common).toUpperCase()}</h2> 
                <h3 class="area">Area: ${data.area} SQ KM</h3> 
                <h3 class="population">Population: ${data.population}</h3>
                <h3 class="capital">Capital: ${data.capital}</h3>
                <h3 class="continent">Continent: ${data.continents}</h3>
              </div>
            </div>
          </div>
          </div>`
          
          const cards = document.getElementById(`flip-card`);
          
          return {country: data.name.common, element: cards};
            
        })

    
    })
    display.innerHTML = output;
    document.addEventListener("DOMContentLoaded", ()=> {
    cardes = Array.from(document.getElementById("flip-card"));
    });
}
loadData();

console.log(cardes)






