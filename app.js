const api = 'c395ce7cc29a0963abcce76f09fbd204';

const load = () => {
    navigator.geolocation.getCurrentPosition(fetchData)
    getDate()
}

const fetchData = (position) => {
   const {latitude, longitude} = position.coords;
   fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${api}`)   
   .then(response => response.json() )
   .then(data => setWeatherData(data))
}

const setWeatherData = data => {

    const weatherData = {
        country: data.sys.country,
        cloud: data.clouds.all,
        location: data.name,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temp: data.main.temp,
        weather: data.weather[0].main,
    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];
    });
    console.log(weatherData);
}

const getDate = () => {
    let date = new Date();
    let fecha = date.getDate();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let newMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    month = newMonth[month]

    let newDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day = newDay[day];

    const theDate = `${day}, ${fecha} ${month} ${year} `
    document.querySelector(".time").textContent = theDate;
}