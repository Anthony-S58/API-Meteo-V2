// on insère la key API
const APIKEY = '' ;

// appel à l'appi openWeather avec ville en paramètre de fonction
let apiCall = function(city){


// on récupère l'url dans la documentation du site 
// units=metric correspond à la récupération de la température en celsius
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${APIKEY}`;


// on récupère les informations et on insère dans l'html
fetch(url).then( (response) => response.json().then((data) => 
    {console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp.toFixed(1) + ' °';
        document.querySelector('.humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
        document.querySelector('.wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + ' m/h';
        document.querySelector('.description').innerHTML = data.weather[0].description.toUpperCase();
        document.querySelector('.image').innerHTML = "<img src=http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png></img>";


        
    })
).catch(err => console.log('Erreur : ' + err));
};
// écouteur d'évènement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let ville = document.querySelector('#inputcity').value;

    apiCall(ville);
});

// appel par défaut au chargement de la page
apiCall('Nevers');