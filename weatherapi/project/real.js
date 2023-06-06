const clickSearchBtn=document.getElementById("searchbtn")


const api_key="8190ca6a08e8dcf8a6de19dccda15f78";




const input_Element=document.getElementById("cityname")
 async function submitdata(){

let city_name;
city_name=input_Element.value;
console.log(city_name);
   
   try{
    const data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)

   const output= await data.json();

    console.log("data is ",output)

     input_Element.value = "";
   }
   catch(err){
    console.log('error occured',err);
   }
 

}


//  try{


// clickSearchBtn.addEventListener("click",async()=>{
//     const data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)

//     const output= await data.json();

//     console.log("data is "+output)

//     input_Element.value = "";
   






//  })

//  }
//  catch(err){
//      console.log(err);
//  }