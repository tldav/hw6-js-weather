var apiKey = "&appId=a9ef19731f63676098dba0a6b2b8502e";
var nowUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var queryCity = "Dallas";

var date = Date();
console.log(date);

$.ajax({
	url: nowUrl + queryCity + apiKey,
	method: "GET"
}).then(function(response) {
	console.log(response);

	console.log(nowUrl + queryCity + apiKey);
});

$.ajax({
	url: forecastUrl + queryCity + apiKey,
	method: "GET"
}).then(function(response) {
	console.log(response);

	console.log(forecastUrl + queryCity + apiKey);
});
