console.log("himanshu")

// const API_key="8190ca6a08e8dcf8a6de19dccda15f78"


// // one code wait but other are runnig seamlessly
// async function showWeather(){
//     let lat=15.3333;
//     let lon=74.0833;
// // await keyword kyu lagaya hai kyuki samjo aapne network call lagaya hai ,aur samjho thodi der hogayi response aane mein to data mein error store hoga 
//     try{
//     const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}`);
//     const data= await response.json()
//     console.log('weather data is '+ data);
//     }
//     catch(error){
//         console.log('error'+error);
//     }




// }
// showWeather();




function renderWeatherInfo(data)
{
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)}°C`
    document.body.appendChild(newPara)
}

const apiKey = "8190ca6a08e8dcf8a6de19dccda15f78";

// Make sure to include the actual values for lat and lon
const lat = 19.9975;
const lon = 73.7898;

async function showWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    
    const data = await response.json();
    console.log("Weather data:", data);
   

 


//   UI par render karne keliye
   renderWeatherInfo(data);
  }

  catch (error) {
    console.log("Error fetching weather data:", error);
  }
}

showWeather();
