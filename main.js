const leftInfoDeg = document.querySelector(".left-info__deg")
const InfoIcon = document.querySelector(".info-icon")
const windSpeed = document.querySelector(".right-card__fast")
const windDeg = document.querySelector(".right-card__deg")
const formButton = document.querySelector(".container-form__button")
const cancelButton = document.querySelector(".container-form__cancel-button")


cancelButton.addEventListener("click", () => {
    const formInput = document.querySelector(".container-form__input")
    formInput.value = "";
})


formButton.addEventListener("click", item => {
    const formInputValue = document.querySelector(".container-form__input").value
    OpenWeatherApi(formInputValue)
})

function OpenWeatherApi(town) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=0ac701dd51b298cf3a0b96a164925969&units=metric`)
        .then(response => response.json())
        .then(data => {
            leftInfoDeg.textContent = data.main.temp > 0 ? `+${data.main.temp}°` : `-${data.main.temp}°`
            windSpeed.textContent = `${data.wind.speed} m/s`;
            windDeg.textContent = `${data.wind.deg} %`;
            console.log(data)
        })
        .catch(error => console.error('Xato yuz berdi:', error));
}