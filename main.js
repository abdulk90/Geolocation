// main.js


$(document).on("ready", function() {

if ("geolocation" in navigator) {

	console.log("GEOLOCATION!!!");

	navigator.geolocation.getCurrentPosition(displayPosition, showPositionError);

}

else {
	alert("UPDATE YO BROWSER!")
}
});
function displayPosition (data) {
	console.log("got position!")
	$(".js-set-latitude").text( data.coords.latitude)
	$(".js-set-longitude").text( data.coords.longitude)
}

function showPositionError (error) {
}