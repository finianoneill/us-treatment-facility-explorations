// create map object
var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 9
  // layers: [streetMap, heatmapLayer, censusLayer]
});


// create streetmap tile layer
var streetMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoiZmluaWFuZG9uZWlsbCIsImEiOiJjanAzZmRwMnQwaGZ2M2tvYm5nNGNqcmE4In0.XAVtWcAaSFjXYCZRxkA6iw"
}).addTo(myMap);

// Read the file into a variable
var treatmentContent = "/facilities_data";
var censusContent = "/census_data";

// read in treatment facility JSON
d3.json(treatmentContent, function(response) {
  var heatArray = [];
  for (var i = 0; i < response.length; i++) {
    var location = [response[i].lat, response[i].lng];

    if (location) {
      heatArray.push(location);
    }
  }

  var heatmapLayer = L.heatLayer(heatArray, {
    radius: 25,
    blur: 35
  }).addTo(myMap);

});

// read in the census data JSON
d3.json(censusContent, function(response) {

  var cityMarkers = [];
  // Loop through citys and create location markers
  for (var i = 0; i < response.length; i++) {

    var currentCoordinatesString = response[i].Location;
    var currentFirstCoord = Number(currentCoordinatesString.substring(1, currentCoordinatesString.indexOf(",")));
    var currentSecondCoord = Number(currentCoordinatesString.substring(currentCoordinatesString.indexOf(",")).substring(2).slice(0, -1));
    var currentCoordinates = [currentFirstCoord, currentSecondCoord];
    // Setting the marker radius for the state by passing population into the markerSize function
    cityMarkers.push(
      L.circle(currentCoordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "red",
        fillColor: "red",
        radius: 100
      })
    );
  }  

  var censusLayer = L.layerGroup(cityMarkers).addTo(myMap);

});

// // Create a baseMaps object
// var baseMaps = {
//   "Street Map": streetMap
// };

// Create an overlay object
// var overlayMaps = {
//   "Treatment Facilities": heatmapLayer,
//   "Census Information": censusLayer
// };

// // Pass our map layers into our layer control
// // Add the layer control to the map
// L.control.layers(baseMaps, overlayMaps, {
//   collapsed: false
// }).addTo(myMap);