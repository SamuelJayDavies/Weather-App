import "./style.css";
import logoImg from "./images/cloudy.png";

import getLocationData from "./weather-api";

function createHomePage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHeader());
    main.appendChild(createPrimaryContent());
}

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const logo = document.createElement("img");
    logo.src = logoImg;
    const title = document.createElement("h1");
    title.textContent = "What's The Weather";

    titleContainer.appendChild(logo);
    titleContainer.appendChild(title);

    const searchBar = document.createElement("input");
    searchBar.type = "search";
    searchBar.placeholder = "location";

    header.appendChild(titleContainer);
    header.appendChild(searchBar);

    return header;
}

function createPrimaryContent() {
    const locationData = getLocationData("Gorsenion");

    locationData.then(function(data) {
        console.log(data);
        data.days.forEach(element => {
            weatherDisplay.appendChild(createWeatherCard(element.icon, element.temp));
        });
    })
    console.log(locationData);
    const primaryContentContainer = document.createElement("div");
    primaryContentContainer.classList.add("primary-content-container");

    const weatherLocation = document.createElement("h1");
    weatherLocation.textContent = "Gorsenion";

    const weatherDisplay = document.createElement("div");
    weatherDisplay.classList.add("weather-display");

    primaryContentContainer.appendChild(weatherLocation);
    primaryContentContainer.appendChild(weatherDisplay);

    return primaryContentContainer;
}

function createWeatherCard(weatherDesc, temperature) {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    const weatherDisplayDesc = document.createElement("p");
    weatherDisplayDesc.textContent = weatherDesc;

    const temperatureDisplay = document.createElement("p");
    temperatureDisplay.textContent = temperature;

    weatherCard.appendChild(weatherDisplayDesc);
    weatherCard.appendChild(temperatureDisplay);

    return weatherCard;
}

export default createHomePage;