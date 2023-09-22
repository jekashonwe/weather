let API_KEY ="6735299091204b37b87103943230802";

getWeatherData=(city) =>{
    //const city= document.getElementById("city-input").value;
    const URL ='https://api.weatherapi.com/v1/current.json';
    
    const Full_Url = `${URL}?key=${API_KEY}&q=${city}&aqi=no`;
    const weatherPromise =fetch(Full_Url);
    return weatherPromise.then((response) =>{
        return response.json()
    })


}

function searchCity(){
    const city= document.getElementById("city-input1").value;
    getWeatherData(city)
    .then((response)=>{
        showWeatherData(response)
        console.log(response)

    })
    .catch((err)=>{
        console.log(err)
    })
}

showWeatherData=(weatherData) =>{
    var city= document.getElementById("city-input1").value;
    city=city.charAt(0).toUpperCase() + city.slice(1);
    // if london is input then it takes l as L and to take "ondon" L is sliced from london and both string is added
    if(city){
        document.getElementById('city-name').innerText = city;
        document.getElementById('temp').innerText = `${weatherData.current.temp_c}°`;
        document.getElementById('t').innerText = weatherData.current.last_updated;
        document.getElementById('condition').innerText = weatherData.current.condition.text;
        document.getElementById('icon').innerHTML = weatherData.current.condition.icon;
        document.getElementById('cl').innerText = `${weatherData.current.cloud}%`;
        document.getElementById('hum').innerText = `${weatherData.current.humidity}%`;
        document.getElementById('ws').innerText = `${weatherData.current.wind_kph}Kph`;
        document.getElementById('vis').innerText = `${weatherData.current.vis_km}`;
    }
}