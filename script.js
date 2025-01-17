const apiKey="e844f2abd8b2395af187001ceb497a67";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response=await fetch(apiUrl + city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"^c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="OIP.jpeg";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="R.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain-vector-icon (1).jpg";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="R.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="R.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="R.png";
    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
  
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});