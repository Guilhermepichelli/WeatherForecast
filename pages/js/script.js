let key = "969c4a5f85b4307b42b2ddcb630eda9d"

function viewScreen(serverData){
    document.querySelector(".city").innerHTML = serverData.name + " in weather"
    document.querySelector(".temperature").innerHTML = Math.floor(serverData.main.temp) + "°C"
    document.querySelector('.description').childNodes.forEach((element) => {
        if(element.nodeType == Node.TEXT_NODE)
            element.nodeValue = serverData.weather[0].description;
    });
    document.querySelector(".icon-glass").src = `https://openweathermap.org/img/wn/${serverData.weather[0].icon}.png`;
    document.querySelector(".humidity").innerHTML = `Humidity: ${serverData.main.humidity}%`;
}

async function searchCity(city){
    let requisition = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${key}&lang=en&units=metric`);
    viewScreen(await requisition.json());
}

function clickButton(){
    searchCity(document.querySelector(".input-city").value)
}
