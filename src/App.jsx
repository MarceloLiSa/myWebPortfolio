import { useState } from 'react'
import './App.css'
import clearSky from "../public/weather-icons/clearSky.png";
import fewClouds from "../public/weather-icons/fewClouds.png";
import brokenClouds from "../public/weather-icons/brokenClouds.png";
import rain from "../public/weather-icons/rain.png";
import scatteredClouds from "../public/weather-icons/scatteredClouds.png";
import showerRain from "../public/weather-icons/showeRain.png";






function App() {

//creating a full date

const dateBuilder = ()=>{
  let dateToday = String(new window.Date());
  dateToday = dateToday.slice(3,15)

  return dateToday

}

{/*WEATHER SECTION */}

const weatherKey = "6b4cf060bbd0b2a581a171e7857c209a"
const [weatherIcon, setWeatherIcon] = useState(fewClouds) 

const search = async()=>{
  const info = document.getElementsByClassName("locationInput")
  if(info[0].value ===""){
    console.log("null");

    alert("invalid location");
    return 0;
  }

  let url = "https://api.openweathermap.org/data/2.5/weather?q="+(info[0].value)+"&units=metric&appid="+weatherKey+""
  let response = await fetch(url);
  let data = await response.json();

  const location_Name = document.getElementsByClassName("weather-location");
  const condition= document.getElementsByClassName("weather-condition");
  const temperature = document.getElementsByClassName("weather-temp");
  const temperature_Description = document.getElementsByClassName("weather-humidity");
  const location_Country = document.getElementsByClassName("weather-country");

  
  
  
  location_Country[0].innerHTML = data.sys.country;
  condition[0].innerHTML = data.weather[0].main;
  location_Name[0].innerHTML = data.name;
  temperature[0].innerHTML = Math.floor(data.main.temp)+" °c";
  temperature_Description[0].innerHTML = data.main.humidity+" %";

  
  if(data.weather[0].icon === data.weather[0].icon === "01d"||data.weather[0].icon === "01n"){
setWeatherIcon(clearSky)
  }else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
    setWeatherIcon(fewClouds)
  }else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
    setWeatherIcon(scatteredClouds)
  }else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n" ){
    setWeatherIcon(brokenClouds)
  }else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
    setWeatherIcon(showerRain)
  }else
  setWeatherIcon(rain)

  

}


{/* END OF WEATHER SECTION FUNCTION */}





{/* POP UP RESUME FUNCTION */}

function openResume(){
 
  document.body.classList.add("active-popup");

}
 function closeResume(){
  document.querySelector(".popup .closeResume")
    document.body.classList.remove("active-popup");
 
 }
{/*END POP UP RESUME FUCTION */}



  return(
<>

    

{/*NAV BAR START*/}
<h1 className='welcome'>WELCOME TO MY PORTFOLIO</h1>
<nav className='p-10 flex justify-between items-center'>

    <h1 className="nameHeader"> Marcelo Lizana</h1>
    <ul className='flex gap-10'>
      <a href="" id='homeTop'>Home</a>
      <a href="" id='aboutTop'>About</a> 
      

    </ul>

</nav>
{/*NAV BAR END*/ }

{/* col-1 HEADER CONTENT START*/}
<div className="main">
  <div className='content'>
    <header className='grid grid-row-2' id='myInfo'>



    <div className='border p-10 flex justify-center items-center' id='mainContent' >


    <div className='border p-10 flex justify-center items-center flex-col' id='userData'>
    <div className="dateTime p-10 text-2xl  flex-col" >{dateBuilder(new Date())}</div>

    <div className="text-2xl font-bold text-gray-500"> Hello I'm</div>
    <div className="text-5xl font-bold text-black"> Marcelo Lizana</div>
    <div className="text-2xl font-bold text-gray-600"> Junior Front End Developer</div>
    <div className="flex gap-5 pt-10">
      <button className='border p-3 rounded-full px-6' id='openResumeBtn' onClick={openResume} >Resume</button>
      
        </div>
          <img src="/marce-portrait1.JPG" className="img-portrait1"  alt="" />
        </div>

    {/* col-2 weather content div*/}

  

  

    <div className="weatherDataContent">
    <h1 className='question'>FROM WHICH CITY ARE YOU WATCHING THIS?...</h1>

      <div className='weatherData'>

        <img className='weather-icon' src={weatherIcon} alt="" />

        <h3  className='weather-location'> </h3>  <h3 className='weather-country'> </h3>
        <h3 className='weather-temp'> </h3>
        <p className='conditionW' >Condition </p><p className='weather-condition' ></p> 
        <p className='humidityW' >Humidity</p> <p className='weather-humidity' > </p>
        
        <div className="inputWeather" >
          <input className= "locationInput" type="text" placeholder='search location...' /> 
          <button className='weatherSearchBtn' onClick={search}> </button>
         </div>

      </div>
    </div>


    </div>

  </header>
</div>
{/* HEADER CONTENT END */}







<div className="aboutMeContainer">



<div className="left-container-Abtme"> 
<h2 className='aboutSubtitle'> ABOUT ME...</h2>
<p className='myDescription'> Highly motivated and detail-oriented junior web developer with one year of practical experience in building and maintaining web applications. Proficient in front-end and back-end languages, including HTML, CSS, JavaScript, C#, PHP, and MySQL. Skilled in using Node, React, and Git for efficient web development. Experienced in wireframes creation using Adobe XD and adept in designing intuitive user interfaces (UI/UX). Possess familiarity with WordPress and Visual Studio. Advanced level of English and Spanish communication. Certified as an Analyst Programmer. </p>


</div>

    
      <div className="right-container-Abtme">
        <img className='html-logo' src="/language-images/HTML.png" alt="" />
        <img className="css-logo" src="/language-images/css.png" alt="" />
        <img className="JS-logo" src="/language-images/JavaScript.png" alt="" />
        <img className="SQL-logo" src="/language-images/MySQL.png" alt="" />
        <img className="React-logo" src="/language-images/React.png" alt="" />
        <img className="git-logo" src="/language-images/git.png" alt="" />
      </div>



     



     
    
</div>

</div>
    <div className='popup'> 
      <button className='closeResume' onClick={closeResume} >&times;</button>
      <img src="/resume-img/resume.png" alt="" />
    </div>
 

</>

  )
}

export default App
