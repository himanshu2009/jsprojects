function getLocation(){
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPostion);

    }
    else{
        x.innerHTML="Geolocation is not support";
    }
}

function showPostion(position){
    console.log('latitude'+position.coords.latitude);
    console.log('longitude'+position.coords.longitude);

}


getLocation();