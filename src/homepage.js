import "./style.css";

import partlycloudyday from "./images/partly-cloudy-day.png";
import rain from "./images/rain.png";
import sunnyraincloudy from "./images/sunny-rain-cloudy.png";
import sun from "./images/sun.png";

import rainGif from "./images/rain.gif";
import sunnyGif from "./images/sunny.gif";
import partlycloudydaygif from "./images/partlycloudyday.gif";

import getLocationData from "./weather-api";

function createHomePage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHeader());
    main.appendChild(createPrimaryContent("Gorsenion"));
    main.appendChild(createFooter());
}

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    header.style.backgroundImage = "url(" + sunnyGif + ")";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundSize = "cover";
    header.style.backgroundPositionY = "50%";
    
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const logo = document.createElement("img");
    logo.src = partlycloudyday;
    const title = document.createElement("h1");
    title.textContent = "What's The Weather";

    titleContainer.appendChild(logo);
    titleContainer.appendChild(title);

    const searchBar = document.createElement("input");
    searchBar.type = "search";
    searchBar.placeholder = "location";

    searchBar.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            const main = document.getElementById("main");
            const oldMainContent = main.getElementsByClassName("primary-content-container");
            main.removeChild(oldMainContent[0]);
            main.appendChild(createPrimaryContent(searchBar.value));
            updateHeaderBackgroundImage();
        }
    }, false);

    header.appendChild(titleContainer);
    header.appendChild(searchBar);

    return header;
}

function createPrimaryContent(chosenWeatherLocation) {

    const locationData = getLocationData(chosenWeatherLocation);
    let secondaryContainer;

    locationData.then(function(data) {
        console.log(data);
        data.days.forEach(element => {
            const date = new Date(element.datetime);
            const dayName = date.toLocaleDateString('en-US', {weekday: 'long'});
            weatherDisplay.appendChild(createWeatherCard(element.icon, dayName, element.temp, element.description));
        });

        secondaryContainer = createSecondaryContent(data);
        //primaryContentContainer.appendChild(secondaryContainer);
    })
    const primaryContentContainer = document.createElement("div");
    primaryContentContainer.classList.add("primary-content-container");

    const weatherLocation = document.createElement("h1");
    weatherLocation.textContent = chosenWeatherLocation;

    const weatherDisplay = document.createElement("div");
    weatherDisplay.classList.add("weather-display");

    primaryContentContainer.appendChild(weatherLocation);
    primaryContentContainer.appendChild(weatherDisplay);

    updateHeaderBackgroundImage();

    return primaryContentContainer;
}

function createSecondaryContent(locationData) {
    const secondaryContentContainer = document.createElement("div");

    const paraTest = document.createElement("p");
    paraTest.textContent = locationData.days;
    return paraTest;
}

function createWeatherCard(weatherIcon, weatherDisplay, temperature, desc) {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");
    weatherCard.style.backgroundImage = "url(" + assignWeatherBackground(weatherIcon) + ")";
    weatherCard.style.backgroundPositionY = "50%";
    weatherCard.style.backgroundRepeat = "no-repeat";
    weatherCard.style.backgroundSize = "cover";

    const innerWeatherCard = document.createElement("div");
    innerWeatherCard.classList.add("inner-weather-card");

    const weatherIconDisplay = document.createElement("img");
    weatherIconDisplay.src = assignWeatherIcon(weatherIcon);

    const weatherDayDisplay = document.createElement("p");
    weatherDayDisplay.textContent = weatherDisplay;

    const temperatureDisplay = document.createElement("h1");
    temperatureDisplay.textContent = temperature + "°C";

    const weatherDescDisplay = document.createElement("p");
    weatherDescDisplay.textContent = desc;

    innerWeatherCard.appendChild(weatherIconDisplay);
    innerWeatherCard.appendChild(weatherDayDisplay);
    innerWeatherCard.appendChild(temperatureDisplay);
    innerWeatherCard.appendChild(weatherDescDisplay);

    weatherCard.appendChild(innerWeatherCard);

    return weatherCard;
}

function assignWeatherIcon(weatherDesc) {
    switch(weatherDesc) {
        case "partly-cloudy-day": return partlycloudyday;
        case "rain": return rain;
        default: return sunnyraincloudy;
    }
}

function assignWeatherBackground(weatherDesc) {
    switch(weatherDesc) {
        case "partly-cloudy-day": return partlycloudydaygif;
        case "rain": return rainGif;
        case "sunny": return sunnyGif;
        case "clear-day": return sunnyGif;
    }
}

function updateHeaderBackgroundImage() {
    const header = document.getElementsByClassName("header");
    const weatherCards = document.getElementsByClassName("weather-card");
    header[0].style.backgroundImage = weatherCards[0];
    console.log("Update Header");
}

function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.style.backgroundImage = "url(" + sunnyGif + ")";
    footer.style.backgroundRepeat = "no-repeat";
    footer.style.backgroundSize = "cover";
    footer.style.backgroundPositionY = "100%";

    const footerPara = document.createElement("p");
    footerPara.textContent = "© Samuel Davies 2024";

    footer.appendChild(footerPara);
    return footer;
}

export default createHomePage;