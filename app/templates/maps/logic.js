// Function to determine marker size based on population
function markerSize(population) {
  return population / 90;
}

// An array containing all of the information needed to create city and state markers
var locations = [
  {
    "": 0,
    "City": "ALAMEDA",
    "Median Age": 39.4,
    "Average Income": 69076,
    "Per Capita Income": 38185,
    "Number of facilities": 1,
    "Total Population": 61639,
    "Poverty Count": 7125,
    "Location": [37.77, -122.24]
  },
  {
    "": 1,
    "City": "ANTIOCH",
    "Median Age": 33.75,
    "Average Income": 70940,
    "Per Capita Income": 25201.5,
    "Number of facilities": 7,
    "Total Population": 104351,
    "Poverty Count": 15344,
    "Location": [38, -121.8]
  },
  {
    "": 2,
    "City": "BERKELEY",
    "Median Age": 33.9,
    "Average Income": 58603.83333,
    "Per Capita Income": 37430.16667,
    "Number of facilities": 8,
    "Total Population": 122448,
    "Poverty Count": 10876,
    "Location": [37.87, -122.27]
  },
  {
    "": 3,
    "City": "BURLINGAME",
    "Median Age": 41.9,
    "Average Income": 109775,
    "Per Capita Income": 74474,
    "Number of facilities": 13,
    "Total Population": 41480,
    "Poverty Count": 2485,
    "Location": [37.57, -122.34]
  },
  {
    "": 4,
    "City": "CAMPBELL",
    "Median Age": 37.3,
    "Average Income": 87204,
    "Per Capita Income": 44023,
    "Number of facilities": 4,
    "Total Population": 45187,
    "Poverty Count": 3342,
    "Location": [37.28, -121.95]
  },
  {
    "": 5,
    "City": "CONCORD",
    "Median Age": 31.5,
    "Average Income": 47313,
    "Per Capita Income": 21096,
    "Number of facilities": 12,
    "Total Population": 37489,
    "Poverty Count": 7461,
    "Location": [37.97, -122.03]
  },
  {
    "": 6,
    "City": "DALY CITY",
    "Median Age": 39.6,
    "Average Income": 76978,
    "Per Capita Income": 30658,
    "Number of facilities": 3,
    "Total Population": 61591,
    "Poverty Count": 4898,
    "Location": [37.68, -122.47]
  },
  {
    "": 7,
    "City": "DUBLIN",
    "Median Age": 36.1,
    "Average Income": 114812,
    "Per Capita Income": 42534,
    "Number of facilities": 1,
    "Total Population": 47384,
    "Poverty Count": 1634,
    "Location": [37.7, -121.93]
  },
  {
    "": 8,
    "City": "EMERYVILLE",
    "Median Age": 36.4,
    "Average Income": 52787,
    "Per Capita Income": 36714,
    "Number of facilities": 2,
    "Total Population": 26288,
    "Poverty Count": 4307,
    "Location": [37.83, -122.28]
  },
  {
    "": 9,
    "City": "FAIRFIELD",
    "Median Age": 36.3,
    "Average Income": 74044.5,
    "Per Capita Income": 30579,
    "Number of facilities": 4,
    "Total Population": 105627,
    "Poverty Count": 14061,
    "Location": [38.24, -122.04]
  },
  {
    "": 10,
    "City": "FREMONT",
    "Median Age": 35.95,
    "Average Income": 86473,
    "Per Capita Income": 35638,
    "Number of facilities": 33,
    "Total Population": 231705,
    "Poverty Count": 93050,
    "Location": [37.54, -121.98]
  },
  {
    "": 11,
    "City": "GILROY",
    "Median Age": 33.4,
    "Average Income": 81037,
    "Per Capita Income": 29889,
    "Number of facilities": 3,
    "Total Population": 58246,
    "Poverty Count": 8371,
    "Location": [37, -121.56]
  },
  {
    "": 12,
    "City": "HAYWARD",
    "Median Age": 35,
    "Average Income": 62197.33333,
    "Per Capita Income": 25071,
    "Number of facilities": 9,
    "Total Population": 167936,
    "Poverty Count": 24707,
    "Location": [37.66, -122.08]
  },
  {
    "": 13,
    "City": "HERCULES",
    "Median Age": 37.4,
    "Average Income": 97269,
    "Per Capita Income": 36802,
    "Number of facilities": 1,
    "Total Population": 24454,
    "Poverty Count": 1434,
    "Location": [38.01, -122.28]
  },
  {
    "": 14,
    "City": "LARKSPUR",
    "Median Age": 46.5,
    "Average Income": 97723,
    "Per Capita Income": 78588,
    "Number of facilities": 2,
    "Total Population": 6887,
    "Poverty Count": 212,
    "Location": [37.93, -122.53]
  },
  {
    "": 15,
    "City": "LOS ALTOS",
    "Median Age": 46.1,
    "Average Income": 167384,
    "Per Capita Income": 85227,
    "Number of facilities": 2,
    "Total Population": 22349,
    "Poverty Count": 489,
    "Location": [37.38, -122.11]
  },
  {
    "": 16,
    "City": "LOS GATOS",
    "Median Age": 45.6,
    "Average Income": 136850.5,
    "Per Capita Income": 75070,
    "Number of facilities": 14,
    "Total Population": 39455,
    "Poverty Count": 1559,
    "Location": [37.23, -121.96]
  },
  {
    "": 17,
    "City": "MARTINEZ",
    "Median Age": 42.5,
    "Average Income": 75672,
    "Per Capita Income": 36343,
    "Number of facilities": 5,
    "Total Population": 48018,
    "Poverty Count": 4149,
    "Location": [38.01, -122.13]
  },
  {
    "": 18,
    "City": "MENLO PARK",
    "Median Age": 39.2,
    "Average Income": 115444,
    "Per Capita Income": 69074,
    "Number of facilities": 3,
    "Total Population": 40372,
    "Poverty Count": 2612,
    "Location": [37.45, -122.18]
  },
  {
    "": 19,
    "City": "MILLBRAE",
    "Median Age": 45.4,
    "Average Income": 88451,
    "Per Capita Income": 42042,
    "Number of facilities": 1,
    "Total Population": 21867,
    "Poverty Count": 1234,
    "Location": [37.59, -122.38]
  },
  {
    "": 20,
    "City": "MOUNTAIN VIEW",
    "Median Age": 35.95,
    "Average Income": 95750,
    "Per Capita Income": 56976,
    "Number of facilities": 35,
    "Total Population": 81071,
    "Poverty Count": 4255,
    "Location": [37.38, -122.08]
  },
  {
    "": 21,
    "City": "NAPA",
    "Median Age": 40.6,
    "Average Income": 72286,
    "Per Capita Income": 35746,
    "Number of facilities": 6,
    "Total Population": 66824,
    "Poverty Count": 7000,
    "Location": [38.29, -122.28]
  },
  {
    "": 22,
    "City": "NEWARK",
    "Median Age": 37.3,
    "Average Income": 85847,
    "Per Capita Income": 31056,
    "Number of facilities": 1,
    "Total Population": 43139,
    "Poverty Count": 3310,
    "Location": [37.53, -122.04]
  },
  {
    "": 23,
    "City": "NOVATO",
    "Median Age": 44.4,
    "Average Income": 83026,
    "Per Capita Income": 44454,
    "Number of facilities": 6,
    "Total Population": 18107,
    "Poverty Count": 1009,
    "Location": [38.1, -122.56]
  },
  {
    "": 24,
    "City": "OAKLAND",
    "Median Age": 37.56666667,
    "Average Income": 54454.44444,
    "Per Capita Income": 36954.77778,
    "Number of facilities": 46,
    "Total Population": 467121,
    "Poverty Count": 93424,
    "Location": [37.8, -122.27]
  },
  {
    "": 25,
    "City": "PALO ALTO",
    "Median Age": 39.95,
    "Average Income": 113222,
    "Per Capita Income": 89137.5,
    "Number of facilities": 18,
    "Total Population": 20217,
    "Poverty Count": 1215,
    "Location": [37.44, -122.14]
  },
  {
    "": 26,
    "City": "PETALUMA",
    "Median Age": 40.7,
    "Average Income": 80645,
    "Per Capita Income": 33411,
    "Number of facilities": 1,
    "Total Population": 36785,
    "Poverty Count": 3037,
    "Location": [38.23, -122.63]
  },
  {
    "": 27,
    "City": "PIEDMONT",
    "Median Age": 38.8,
    "Average Income": 72848,
    "Per Capita Income": 57078,
    "Number of facilities": 1,
    "Total Population": 29978,
    "Poverty Count": 2369,
    "Location": [37.82, -122.23]
  },
  {
    "": 28,
    "City": "PINOLE",
    "Median Age": 42.8,
    "Average Income": 76960,
    "Per Capita Income": 34647,
    "Number of facilities": 1,
    "Total Population": 18612,
    "Poverty Count": 1738,
    "Location": [38, -122.29]
  },
  {
    "": 29,
    "City": "PLEASANT HILL",
    "Median Age": 42.3,
    "Average Income": 77485,
    "Per Capita Income": 43827,
    "Number of facilities": 1,
    "Total Population": 33923,
    "Poverty Count": 3051,
    "Location": [37.94, -122.06]
  },
  {
    "": 30,
    "City": "PLEASANTON",
    "Median Age": 38.5,
    "Average Income": 119849,
    "Per Capita Income": 49641,
    "Number of facilities": 1,
    "Total Population": 30949,
    "Poverty Count": 1559,
    "Location": [37.66, -121.87]
  },
  {
    "": 31,
    "City": "REDWOOD CITY",
    "Median Age": 37.3,
    "Average Income": 85903.66667,
    "Per Capita Income": 43988.33333,
    "Number of facilities": 22,
    "Total Population": 95815,
    "Poverty Count": 10514,
    "Location": [37.48, -122.23]
  },
  {
    "": 32,
    "City": "RICHMOND",
    "Median Age": 32.85,
    "Average Income": 44645.5,
    "Per Capita Income": 21476.5,
    "Number of facilities": 5,
    "Total Population": 99820,
    "Poverty Count": 15728,
    "Location": [37.93, -122.34]
  },
  {
    "": 33,
    "City": "SAINT HELENA",
    "Median Age": 47.3,
    "Average Income": 83551,
    "Per Capita Income": 53798,
    "Number of facilities": 3,
    "Total Population": 9538,
    "Poverty Count": 556,
    "Location": [38.5, -122.47]
  },
  {
    "": 34,
    "City": "SAN FRANCISCO",
    "Median Age": 39.81578947,
    "Average Income": 79024.05263,
    "Per Capita Income": 62400.26316,
    "Number of facilities": 168,
    "Total Population": 615187,
    "Poverty Count": 81117,
    "Location": [37.77, -122.41]
  },
  {
    "": 35,
    "City": "SAN JOSE",
    "Median Age": 36.16666667,
    "Average Income": 80936,
    "Per Capita Income": 40913.33333,
    "Number of facilities": 30,
    "Total Population": 1170550,
    "Poverty Count": 136270,
    "Location": [37.33, -121.88]
  },
  {
    "": 36,
    "City": "SAN LEANDRO",
    "Median Age": 34,
    "Average Income": 51518,
    "Per Capita Income": 23200,
    "Number of facilities": 5,
    "Total Population": 90225,
    "Poverty Count": 6553,
    "Location": [37.72, -122.15]
  },
  {
    "": 37,
    "City": "SAN MATEO",
    "Median Age": 39.63333333,
    "Average Income": 89240,
    "Per Capita Income": 47090.33333,
    "Number of facilities": 10,
    "Total Population": 99700,
    "Poverty Count": 6960,
    "Location": [37.56, -122.32]
  },
  {
    "": 38,
    "City": "SAN PABLO",
    "Median Age": 33.7,
    "Average Income": 52976,
    "Per Capita Income": 22112,
    "Number of facilities": 1,
    "Total Population": 59720,
    "Poverty Count": 10159,
    "Location": [37.96, -122.34]
  },
  {
    "": 39,
    "City": "SAN RAFAEL",
    "Median Age": 46.4,
    "Average Income": 88646,
    "Per Capita Income": 48387,
    "Number of facilities": 11,
    "Total Population": 30411,
    "Poverty Count": 1931,
    "Location": [37.97, -122.53]
  },
  {
    "": 40,
    "City": "SAN RAMON",
    "Median Age": 39.6,
    "Average Income": 119623,
    "Per Capita Income": 49034,
    "Number of facilities": 10,
    "Total Population": 34937,
    "Poverty Count": 961,
    "Location": [37.77, -121.97]
  },
  {
    "": 41,
    "City": "SANTA CLARA",
    "Median Age": 35.15,
    "Average Income": 84067,
    "Per Capita Income": 39004.5,
    "Number of facilities": 8,
    "Total Population": 127209,
    "Poverty Count": 8237,
    "Location": [37.35, -121.95]
  },
  {
    "": 42,
    "City": "SANTA ROSA",
    "Median Age": 39.2,
    "Average Income": 62688.25,
    "Per Capita Income": 32271.5,
    "Number of facilities": 22,
    "Total Population": 142716,
    "Poverty Count": 17342,
    "Location": [38.44, -122.71]
  },
  {
    "": 43,
    "City": "SEBASTOPOL",
    "Median Age": 50.3,
    "Average Income": 68223,
    "Per Capita Income": 40149,
    "Number of facilities": 1,
    "Total Population": 29381,
    "Poverty Count": 2675,
    "Location": [38.4, -122.82]
  },
  {
    "": 44,
    "City": "SONOMA",
    "Median Age": 44.9,
    "Average Income": 58785,
    "Per Capita Income": 40040,
    "Number of facilities": 5,
    "Total Population": 38800,
    "Poverty Count": 4702,
    "Location": [38.29, -122.45]
  },
  {
    "": 45,
    "City": "SOUTH SAN FRANCISCO",
    "Median Age": 37.8,
    "Average Income": 77058,
    "Per Capita Income": 31603,
    "Number of facilities": 2,
    "Total Population": 65200,
    "Poverty Count": 4563,
    "Location": [37.65, -122.4]
  },
  {
    "": 46,
    "City": "UNION CITY",
    "Median Age": 36.5,
    "Average Income": 82083,
    "Per Capita Income": 29685,
    "Number of facilities": 4,
    "Total Population": 70687,
    "Poverty Count": 5905,
    "Location": [37.59, -122.04]
  },
  {
    "": 47,
    "City": "VACAVILLE",
    "Median Age": 38.2,
    "Average Income": 76517.5,
    "Per Capita Income": 31948,
    "Number of facilities": 11,
    "Total Population": 100728,
    "Poverty Count": 8724,
    "Location": [38.35, -121.98]
  },
  {
    "": 48,
    "City": "VALLEJO",
    "Median Age": 37.1,
    "Average Income": 48943.5,
    "Per Capita Income": 21852.5,
    "Number of facilities": 8,
    "Total Population": 65627,
    "Poverty Count": 13994,
    "Location": [38.1, -122.25]
  },
  {
    "": 49,
    "City": "WALNUT CREEK",
    "Median Age": 47.95,
    "Average Income": 85552.75,
    "Per Capita Income": 51345,
    "Number of facilities": 24,
    "Total Population": 83497,
    "Poverty Count": 4501,
    "Location": [37.91, -122.06]
  }
]






  // Define arrays to hold created city and state markers
var cityMarkers = [];
var populationMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  populationMarkers.push(
    L.circle(locations[i]["Location"], {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize(locations[i]["Total Population"])
    })
  );

  // Setting the marker radius for the city by passing population into the markerSize function
  cityMarkers.push(
    L.circle(locations[i]["Location"], {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSize(locations[i]["Poverty Count"])
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

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create two separate layer groups: one for cities and one for states
var population = L.layerGroup(populationMarkers);
var cities = L.layerGroup(cityMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "Population": population,
  "Poverty Count": cities
};

// Define a map object
var myMap = L.map("map", {
  center: [37.54, -121.98],
  zoom: 9.5,
  layers: [streetmap, population, cities]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
