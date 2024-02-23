const APIKEY ="316f8779396cadb988467e22415a0b5b"  ;
// const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=goa";

function displayData(data) {
    let newpara = document.createElement('h2');
    newpara.textContent = `${data?.main?.temp.toFixed(2)}`

    document.body.appendChild(newpara) ;
}
async function fetchWeatherDetails(){
    try{
        let city = "gao";

    // const response = await  fetch(url + `&appid=${APIKEY}`);
    const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`);
    const data = await response.json();

    displayData(data);

    console.log("wether data of " + city + " is " , data);

    //print / show in the ui 

    
    }
    catch{
        alert("city not found");
    }
}

fetchWeatherDetails();

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLoacation)
    }else{
        console.log("geolocation is not available in your device ");
    }
}

function showLoacation(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    console.log(lat);
    console.log(lon);


}