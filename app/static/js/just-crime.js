var bayAreaCoords = [37.7749, -122.4194];

var myMap = L.map("map", {
  center: bayAreaCoords,
  zoom: 9
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var newtry = "../analyses/Outputs/hospital_list_bay_area_reformat.js";

d3.json(newtry, function(response) {

  console.log(response);

  for (var i = 0; i < response.length; i++) {
    var location = [response[i].lat, response[i].lng];

    if (location) {
      console.log("location added")
      L.marker(location).addTo(myMap);
    }
  }

});
