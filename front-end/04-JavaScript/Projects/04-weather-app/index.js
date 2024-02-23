const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// initial  values requirement 
let currentTab = userTab ;
const API_KEY ="316f8779396cadb988467e22415a0b5b"  ;
currentTab.classList.add("current-tab");
getFromSessionStorage();

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
            searchForm.classList.add("active");
            grantAccessContainer.classList.remove("active");
            userInfoContainer.classList.remove("active");
        }
        else{
            // main pahle search wale tab pr tha , ab weather tab visible karna hai 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            // ab main your weather tab me agya hu , toh weather bhi display karna padega, so lets check the local storage first 
            // for coordinates , if we haved saved them there
            getFromSessionStorage();
        }
    }
}



        // check if cordinates are already present in session strage 
        function getFromSessionStorage() {
            const localCoordinates = sessionStorage.getItem("user-coordinates");
            if(!localCoordinates) {
                //agar local coordinates nahi mile
                grantAccessContainer.classList.add("active");
            }
            else {
                const coordinates = JSON.parse(localCoordinates);
                fetchUserWeatherInfo(coordinates);
            }
        
        }

        async function fetchUserWeatherInfo(coordinates){
            const { lat , lon }= coordinates ;
            // make grantcontainer invisible 
            grantAccessContainer.classList.remove("active");
            // make loader visoible 
            loadingScreen.classList.add("active");

            // api call 
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
                  );
                const  data = await response.json();
        
                loadingScreen.classList.remove("active");
                userInfoContainer.classList.add("active");
                renderWeatherInfo(data);
            }
            catch(err) {
                loadingScreen.classList.remove("active");
                //HW
        
            }
        }

    

    function renderWeatherInfo(weatherInfo){
        // we have to fetch the element from the html code 
        const cityName = document.querySelector("[data-cityName]");
        const countryIcon = document.querySelector("[data-countryIcon]");
        const desc = document.querySelector("[data-weatherDesc]");
        const weatherIcon = document.querySelector("[data-weatherIcon]");
        const temp = document.querySelector("[data-temp]");
        const windSpeed = document.querySelector("[data-windSpeed]");
        const humidity = document.querySelector("[data-humidity]");
        const cloudiness = document.querySelector("[data-cloudiness]");

        // fetch values for the weatherInfo object and put if ui elements
        cityName.innerText = weatherInfo?.name;
        countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
        desc.innerText = weatherInfo?.weather?.[0]?.description;
        weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
        temp.innerText = `${weatherInfo?.main?.temp} °C`;
        windSpeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
        humidity.innerText = `${weatherInfo?.main?.humidity}%`;
        cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
    }

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation) ; 


    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showLocation)
        }else{
            // request alert for the location
        }
    }
    
    function showLocation(position){
        const userCoordinates = { 
             lat : position.coords.latitude,
             lon : position.coords.longitude,
        }

        sessionStorage.setItem("user-coordinates" , JSON.stringify(userCoordinates));
        fetchUserWeatherInfo(userCoordinates);
    }


const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    let cityName = searchInput.value ;

    if(cityName === "") return ;
    else fetchSearchWeatherInfo(cityName);
});

async function fetchSearchWeatherInfo (city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}