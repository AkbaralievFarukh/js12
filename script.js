const apiKey = 'cc0297641400496380760659230811'
const inputCity = document.querySelector('#inputCity')
const submit = document.querySelector('#submit')
const weatherInfo = document.querySelector('#weather-info')



submit.addEventListener('click', () => {
    const city = inputCity.value
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(response => response.json())
    .then(data => {
            weatherInfo.innerHTML += `
                <div class="card">
                    <h5 class="card-title">${data.location.name}</h5>
                    <p class="card-text">${data.current.temp_c}</p>
                </div>
            `
    })
})