<<<<<<< HEAD
version https://git-lfs.github.com/spec/v1
oid sha256:8516e0f4a0817ea5dc98edfdbe734537d822d65e5ecf82576ec10d0fefd1a684
size 1157
=======
var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 9
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoiZmluaWFuZG9uZWlsbCIsImEiOiJjanAzZmRwMnQwaGZ2M2tvYm5nNGNqcmE4In0.XAVtWcAaSFjXYCZRxkA6iw"
}).addTo(myMap);

// var url = "../analyses/Outputs/hospital_list_bay_area_reformat.js";

// Read the file into a variable
// var contents = "static/js/hospital_list_bay_area_reformat.js";
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
>>>>>>> 164f442245f4a2a9c17f88f36ad7ad24aeaaf0ea
