const cityName = document.getElementById('cityName');
const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const temp_status = document.getElementById('temp_status');
const temp_real_value = document.getElementById('temp_real_value');
const datahide = document.querySelector('middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal == "") {
        cityname.innerText = `Please write the name before search`;
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7d109e05ec27aebd63a082801781553e`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]

            cityname.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

            temp_real_value.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun'  style = 'color:yellow;'></i>";
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style = 'color:#fff;'></i>";
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain'  style = 'color:#a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style = 'color:#fff;'></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch {
            // cityname.innerText = 'Write the name properly!';
            datahide.classList.add('data_hide');
        }
    }

}

submitbtn.addEventListener('click', getInfo);