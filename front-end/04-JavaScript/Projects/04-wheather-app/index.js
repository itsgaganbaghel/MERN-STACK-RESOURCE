const userTab = document.querySelector("[data-userWeather]") ;
const searchTab = document.querySelector("[data-searchWeather]") ;
const userContainer = document.querySelector("#weatherContainer");
const grantAccessContainer = document.querySelector("grantWeatherContainer");
const searchForm = document.querySelector(".formContainer") ;
const loadingScreen = document.querySelector("#loadingContainer");
const userInforContainer = document.querySelector("#mainWeatherDataContainer");

// intial values requirement 
let currentTab = userTab ;
const APIKEY ="316f8779396cadb988467e22415a0b5b"  ;
currentTab.classList.add("current-tab");

// ek kam or pending hai 


userTab.addEventListener('click' , () => {
    //pass clicked tab as input parameter 
    switchTab(userTab);
});
searchTab.addEventListener('click' , () => {
    //pass clicked tab as input parameter 
    switchTab(searchTab);
});

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab ;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            // kya pehle search wala container is invisible , if yes then make it visible.
            userInforContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");

            searchForm.classList.add("active");
        }else{
            // main pahle search wale tab pr tha , ab weather tab visible karna hai 
            searchForm.classList.remove("active");
            userInforContainer.classList.remove("active");
            // ab main your weather tab me aagya hu , toh weather bhi display karna padega, so lets check the local storage first 
            // for coordinates , if we haved saved them there
            getfromsessionstorage();
        }

        // check if cordinates are already present inn session strage 
        function getfromsessionstorage(){
            const localCoordinates = sessionStorage.getItem("user-cordinates");
            if(!localCoordinates){
                // agar local coordinate nahi mile then ,
                grantAccessContainer.classList.add("active");
            }else{
                const coordinates = JSON.parse(localCoordinates);
                fetchUserWeatherInfo(coordinates);
            }
        }

        async function fetchUserWeatherInfo(coordinate){
            const {lat , lon} = coordinate ;
            grantAccessContainer.classList.remove("active");

            // visible the loading screen while the api fetcht the data 
            loadingScreen.classList.add("active");

            try{
                const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`);
                const data = await response.json();

                loadingScreen.classList.remove("active");
                userInforContainer.classList.add("active");
                
                // now we render or display the value that we get / fetch from the api call 
                renderweatherInfo(data);
            }
            catch(err){
                loadingScreen.classList.remove("active");
                // hw
            }
        }




        function renderweatherInfo(weatherInfo){

            // firstly, we have to fetch the elements 
            const cityName = document.querySelector("[data-cityName]");
            const countryIcon = document.querySelector("[data-countryIcon]");
            const desc = document.querySelector("#weatherDescription");
            const temp = document.querySelector("#weatherConditonData");
            const weatherIcon = document.querySelector("#weatherConditonIcon");
            const humidity = document.querySelector("#humidityData");
            const windSpeed = document.querySelector("#windSpeedData");
            const cloudiness = document.querySelector("#cloudsData");

            // fetch values from weather data onject in the ui 
            cityName.innerText = weatherInfo?.name ;
            countryIcon.src = 'https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png';
            desc.innerText = weatherInfo?.weather?.[0]?.decription;
            weatherIcon.innerText = 'http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png';
            temp.innerText = weatherInfo?.main?.temp;
            windSpeed.innerText = weatherInfo?.wind?.speed;
            humidity.innerText= weatherInfo?.main?.humidity;
            cloudiness.innerText = weatherInfo?.clounds?.all;

        }

        function getLocation() {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition);
            }else{
                // h.w - show an alert for request 
            }
        }
        function showPosition(){
            const userCoordinates = {
                lat: showPosition.coordinates
            }
        }

        
        const grantAcessButton = document.querySelector("[data-grantAccess]");
        grantAcessButton.addEventListener("click", getLocation);
    }

}