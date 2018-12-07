var myMap = L.map("map", {
  center: [37.5216, -122.2336],
  zoom: 9
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoiZmluaWFuZG9uZWlsbCIsImEiOiJjanAzZmRwMnQwaGZ2M2tvYm5nNGNqcmE4In0.XAVtWcAaSFjXYCZRxkA6iw"
}).addTo(myMap);

// Read the file into a variable
var contents = "/facilities_data";

// read in JSON

d3.json(contents, function(response) {

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = [response[i].lat, response[i].lng];

    if (location) {
      heatArray.push(location);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 25,
    blur: 35
  }).addTo(myMap);

});