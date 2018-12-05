var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 9
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var url = "../analyses/Outputs/hospital_list_bay_area_reformat.js";

// Read the file into a variable
var contents = "static/js/hospital_list_bay_area_reformat.js";

// read in JSON
// var treatmentCenterJSON = JSON.parse(contents);

d3.json(contents, function(response) {

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

	};
});