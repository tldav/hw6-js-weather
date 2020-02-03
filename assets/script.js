var apiKey = "a9ef19731f63676098dba0a6b2b8502e";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var queryCity = "Dallas";

var date = Date();
console.log(date);

$.ajax({
	url: queryURL + queryCity + "&appId=" + apiKey,
	method: "GET"
}).then(function(results) {
	console.log(results);
});
