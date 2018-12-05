// Function to determine marker size based on population
function markerSize(population) {
    return population / 40;
  }
  
  // Define arrays to hold created city and state markers
  var hospitalMarkers = [];
  var hospitalHeatmap = [];
  
  // Loop through locations and create hospital markers and heatmap
  for (var i = 0; i < locations.length; i++) {
    // Setting the marker radius for the state by passing population into the markerSize function
    hospitalMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "white",
        fillColor: "white",
        radius: markerSize(locations[i].state.population)
      })
    );
  
    // Setting the marker radius for the city by passing population into the markerSize function
    hospitalHeatmap.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "purple",
        fillColor: "purple",
        radius: markerSize(locations[i].city.population)
      })
    );
  }
  
  // Define variables for our base layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });
  
  
  // Create two separate layer groups: one for cities and one for states
  var markers = L.layerGroup(hospitalMarkers);
  var heatmap = L.layerGroup(hospitalHeatmap);
  
  // Create a baseMaps object
  var baseMaps = {
    "Street Map": streetmap
  };
  
  // Create an overlay object
  var overlayMaps = {
    "Markers": markers,
    "Heatmap": heatmap
  };
  
  // Define a map object
  var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 9,
    layers: [streetmap, markers, heatmap]
  });
  
  // Pass our map layers into our layer control
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  