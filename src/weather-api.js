async function getLocationData(locationName) {
    const currentDate = new Date();

    const fullDate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();
    const locationResponse = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locationName + "?unitGroup=uk&key=UJVP6Z9DLEQQ25GKMYZWUYW2T", {mode: "cors"});
    return locationResponse.json();
}

export default getLocationData;