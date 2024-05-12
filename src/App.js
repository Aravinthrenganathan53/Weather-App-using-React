import { useEffect, useState } from 'react';
import search from './images/search.png'
import Weather from './weather';
import fullsun from './images/fullsun.png'
import sun from './images/sun.png'
import cloud from './images/weather6.jpg'
import brokencloud from './images/weather1.png'
import rain from './images/weather7.jpg'
import thunder from './images/weather2.png'
import snow from './images/wea10.png'
import suncloud from './images/weather3.png'

const Icon={
  "01d": fullsun,
  "01n": fullsun,
  "02d": sun,
  "02n": sun,
  "03d": cloud,
  "03n": cloud,
  "04d": brokencloud,
  "04n": brokencloud,
  "09d": rain,
  "09n": rain,
  "10d": thunder,
  "10n": thunder,
  "13d": snow,
  "13n": snow,
  "50n": suncloud,
  "50d": suncloud,

}

function App() {
const[input,setInput]=useState('Madurai')
const[citynotfound,setCityNotFound]=useState(false)
const[icons,setIcons]=useState(fullsun)
const[temp,setTemp] = useState("0")
const[location,setLocation] = useState("")
const[country,setCountry] = useState("IN")
const[latitude,setLatitude] = useState("0")
const[longitude,setLongitude] = useState("0")
const[Humidity,setHumidity] = useState("0")
const[Wind,setWind] = useState("0")



useEffect(() => {
      Searchcity()
},[])

async function Searchcity(){
  const url= `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6126a74b7b2667a618629d8838e4bafb&units=Metric`;
  try{
    const response= await fetch(url)
  const data= await response.json()
  console.log(data)
  if(data.cod === '404'){
    setCityNotFound(true)
  }else{
    setTemp(data.main.temp)
    setLocation(data.name)
    setCountry(data.sys.country)
    setLatitude(data.coord.lat)
    setLongitude(data.coord.lon)
    setHumidity(data.main.humidity)   
    setWind(data.wind.speed)
    setIcons(Icon[data.weather[0].icon] || sun)
    setCityNotFound(false)
  }
  }
  catch(e){
    console.error("name:",e.name,"message:",e.message)
  }
}

function Handleinput(e){
  if(e.key ==='Enter'){
    Searchcity()
  }
}
function Handlesearch(){
  Searchcity()
}
  return (
    <>
    <p id="heading">Weather App</p>
    <div className='box'>
     <div className='inputbox'>
         <input type="text" className='input' placeholder="Enter City Name"  onChange={(e)=>{setInput(e.target.value)}} onKeyDown={Handleinput}/>
         <img src={search} alt="no image" id="search" onClick={Handlesearch}/>
     </div>
     {citynotfound && <h1 id="city">City Not Found</h1> }
     {!citynotfound && <Weather temp={temp} location={location} country={country} latitude={latitude} longitude={longitude} Humidity={Humidity} Wind={Wind} icons={icons}/>}
  
     <p id="footer">Designed By Aravinth</p>
  
   </div>
       </>
    
  );
}

export default App;
