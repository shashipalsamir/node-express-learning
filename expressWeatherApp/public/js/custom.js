const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const cityOutput = document.getElementById('cityOutput');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const datahide = document.querySelector('.middle-layer');

const getInfo = async(e) => {
    e.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ''){
        cityOutput.innerText = "Please enter search text";
        datahide.classList.add('data_hide');
    }else{        
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=cc0d9ce0fda1c81020f99c75f7b97e2d`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            temp.innerText = tempCelsius(arrData[0].main.temp);
            cityOutput.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_status.innerText = arrData[0].weather[0].main;

            datahide.classList.remove('data_hide');
        }catch{
            cityOutput.innerText = "Please enter the city name properly";
            datahide.classList.add('data_hide');
        }   
    }
}

const tempCelsius = (temp) => {
    let tempcal = (temp - 273.15).toFixed(2);
    return tempcal;
}

submitBtn.addEventListener('click', getInfo);