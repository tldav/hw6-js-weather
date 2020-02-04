$cityName = $("#city-name");
$searchBtn = $("#search-button");
$searchInput = $("#search-input");


// API Variables
var apiKey = "&appId=a9ef19731f63676098dba0a6b2b8502e";
var nowUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?";
var queryCity = $searchInput.val()

console.log(queryCity;

var date = new Date().toLocaleDateString("en-US");


$.ajax({
	url: nowUrl + queryCity + apiKey,
	method: "GET"
}).then(function(response) {
	var longitude = response.coord.lon;
	console.log(longitude);
	var latitude = response.coord.lat;
	console.log(latitude);

	$.ajax({
		url: uvUrl + "lat=" + latitude + "&lon=" + longitude + apiKey,
		method: "GET"
	}).then(function(uvResponse) {
		var uvIndex = uvResponse.value;
		console.log(uvIndex);
	});

	console.log(response);

	var cityName = response.name;
	var temperature = (response.main.temp - 273.15) * 1.8 + 32;
	var humidity = response.main.humidity;
	var windSpeed = response.wind.speed;
	var icon = response.weather[0].icon;

	console.log(cityName);
	console.log(temperature);
	console.log(humidity);
	console.log(windSpeed);
	console.log(icon);
	console.log(nowUrl + queryCity + apiKey);

	$cityName.text(icon);
});

$.ajax({
	url: forecastUrl + queryCity + apiKey,
	method: "GET"
}).then(function(response) {
	console.log(response);

	console.log(forecastUrl + queryCity + apiKey);
});
