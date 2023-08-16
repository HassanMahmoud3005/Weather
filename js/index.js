
var allData = [];
async function dataCity(city) {
  let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9dcaaeb01f1d4050afc175613230908&q=${city}&days=3&History=/history.json&TimeZone=/timezone.json`);
  let newData = await data.json();
  allData = newData;

  
  //!==================================Start====================================

  //!================================first Day================================
  let maxtemp1 = allData.forecast.forecastday[0].day.maxtemp_c;
  let mintemp1 = allData.forecast.forecastday[0].day.mintemp_c + " ْC";
  let state1 = allData.forecast.forecastday[0].day.condition; //!====> text------icon.png
  let air = allData.forecast.forecastday[0].day.maxwind_kph; //!====> text------icon.png
  //!================================Second Day================================
  let maxtemp2 = allData.forecast.forecastday[1].day.maxtemp_c + " ْC";
  let mintemp2 = allData.forecast.forecastday[1].day.mintemp_c + " ْ";
  let state2 = allData.forecast.forecastday[1].day.condition; //!====>  text------icon.png
  //!================================Three Day================================
  let maxtemp3 = allData.forecast.forecastday[2].day.maxtemp_c + " ْC";
  let mintemp3 = allData.forecast.forecastday[2].day.mintemp_c + " ْ";
  let state3 = allData.forecast.forecastday[2].day.condition; //!====>  text------icon.png
  let nameCity = allData.location.name;

  //!====================================End====================================
  document.getElementById("city").innerHTML = nameCity;
  document.getElementById("tempMon").innerHTML = mintemp1;
  document.getElementById("tempStateMon").innerHTML = state1.text;
  document.getElementById("stateMon").setAttribute("src", `https:${state1.icon}`);
  document.getElementById("wind").innerHTML = air + " km/h";

  //!=====================================One=====================================
  document.getElementById("stateTues").setAttribute("src", `https:${state2.icon}`);
  document.getElementById("tempMorningTues").innerHTML = maxtemp2;
  document.getElementById("tempNightTues").innerHTML = mintemp2;
  document.getElementById("tempStateTues").innerHTML = state2.text;
  //!=====================================Two=====================================
  document.getElementById("imgStateLast").setAttribute("src", `https:${state3.icon}`);
  document.getElementById("tempMorningWedn").innerHTML = maxtemp3;
  document.getElementById("tempNightWedn").innerHTML = mintemp3;
  document.getElementById("tempStateWend").innerHTML = state3.text;
}
let search = document.getElementById("search");
function writeText() {
  let searchVal = search.value;
  dataCity(searchVal);
}
function findCity() {
  let searchVal = search.value;
  dataCity(searchVal);
}
dataCity("cairo");
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  document.getElementById("day1").innerHTML = days[d.getDay()];
  document.getElementById("day2").innerHTML = days[d.getDay() + 1] ;
  document.getElementById("day3").innerHTML = days[d.getDay() + 2] ;
  document.getElementById("date1").innerHTML = d.getDate() + " " + month[d.getMonth()];
  document.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
      let searchVal = search.value;
      dataCity(searchVal);
    }
  })