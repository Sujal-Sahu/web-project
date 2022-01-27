let day1 = document.getElementById("day1");
let date1 = document.getElementById("date1");
let currtime = new Date();
let getcurrday=()=>{
    const dayarray = [
           "sunday",
           "Monday",
           "Tuesday",
           "Thursday",
           "Friday",
           "Saturday",
      ];
    let days = currtime.getDay();
    // console.log(day1);
    day1.innerText = `${dayarray[days]}`;
}

let getcurrdate=()=>{
    let date2 = currtime.getDate();
    let month = currtime.getMonth();
    const montharray = [
        "Jan",
        "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
    ];
    date1.innerText = `${date2} ${montharray[month]}`;
}

getcurrday();
getcurrdate();

let mainoutput = document.getElementById("mainoutput1");
let temp = document.getElementById("temp");
let temp_status = document.getElementById("temp_status1");
let data_hide = document.querySelector(".middle-layer");


let special_search = document.getElementById("special_search");
let getdata=async(event)=>{
    event.preventDefault();
    let city_val = document.getElementById("city_name").value;
    if(city_val===""){
        mainoutput.innerText=`Please enter the city name first....`;
        data_hide.style.display = "none";
    }
    else{
        try{
        // let city_val = document.getElementById("city_name").value;
        let url = `http://api.weatherapi.com/v1/current.json?key=6dade08f9bff4cc3a2d164123212911&q=${city_val},INDIA&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        const arrdata = [data];
        mainoutput.innerText = `${arrdata[0].location.name},${arrdata[0].location.country}`
        temp.innerText = `${arrdata[0].current.temp_c}`
        temp_status.innerHTML = `<img src = "${arrdata[0].current.condition.icon}" alt="weather image" class="weather_condition">`
        data_hide.style.display = "block";
    }catch{
          mainoutput.innerText = `Please enter the city name properly...`;
          data_hide.style.display = "none";
    } 
}
}

special_search.addEventListener("click",getdata);