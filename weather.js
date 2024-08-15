let APIkey="14302c94d9af822048c28dbe4ea9f378";
let url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let box=document.querySelector(".box");
let weatherBox=document.querySelector(".weather_box");
let weatherDetails=document.querySelector(".weather_details");
let place=document.querySelector(".des");
let temp=document.querySelector(".temp");
let humidity=document.querySelector(".humidity span");
let wind=document.querySelector(".wind span");
let search=document.querySelector("input");
let btn=document.querySelector("button");
let img=document.getElementById("image");
let error404=document.querySelector(".not_found");
  
btn.addEventListener("click",()=>{
    checkWeather(search.value)
})

async function checkWeather(city){
    let response=await fetch(url+city+`&appid=${APIkey}`);
    let data=await response.json();
    console.log(data);
   /* to hide and show information */
    if(data.cod=="404"){
        box.style.height="400px"
        weatherBox.classList.remove('active')
        weatherDetails.classList.remove('active')
        error404.classList.add('active')
        return;
        console.log("City not Found")
    }  
    box.style.height="550px"
        weatherBox.classList.add('active')
        weatherDetails.classList.add('active')
        error404.classList.remove('active')
    // Assigning values
    place.innerText=data.name;
    temp.innerText=Math.round(data.main.temp)+"˚C";
    humidity.innerText=data.main.humidity
    wind.innerText=data.wind.speed;

    if(data.weather[0].main=="Clear"){
        img.src="images/clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        img.src="images/cloud.png";
    }
    if(data.weather[0].main=="Rain"){
        img.src="images/rain.png";
    }
    if(data.weather[0].main=="Drizzle"){
        img.src="images/snow.png";
    }
    if(data.weather[0].main=="Mist"){
        img.src="images/mist.png";
    }
}