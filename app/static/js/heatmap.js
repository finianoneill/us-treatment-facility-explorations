var myMap = L.map("map", {
  center: [37.7, -122.15],
  zoom: 10
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// require file library
// var fs = require('fs');

// Read the file into a variable
//var contents = fs.readFileSync('./../../../analyses/Outputs/hospital_list_bay_area_reformat.js');
var contents = "static/js/hospital_list_bay_area_reformat.js";

// read in JSON
// var treatmentCenterJSON = JSON.parse(contents);

d3.json(contents, function(response) {

	console.log(response);
	var treatmentCenterArray = [];

	for (var i = 0; i < response.length; i++) {
		var lat = response[i].lat;
		var lng = response[i].lng;
		var facilityName = response[i].facilityName;

		if (lat) {
			treatmentCenterArray.push([lat, lng]);
			var treatmentCenterMarker = L.marker([lat, lng], {
				draggable: true,
				title: facilityName
			}).addTo(myMap);
		};

	};
});