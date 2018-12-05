//var unformattedJSON = require("./hospital_list_bay_area.js");
 // Declare variables
var fs = require('fs');
 // Read the file into a variable
var contents = fs.readFileSync('./hospital_list_bay_area.js');
 var unformattedJSON = JSON.parse(contents);
 var finalJSON = [];
 Object.entries(unformattedJSON["CITY_NAME"]).forEach(entry => {
	// pull out all of the current values;
	var currentKey = entry[0];
	var currentCity = entry[1];
	var currentFacilityName = unformattedJSON["FAC_NAME"][currentKey];
	var currentProviderNumber = unformattedJSON["PRVDR_NUM"][currentKey];
	var currentStateCode = unformattedJSON["STATE_CD"][currentKey];
	var currentStreetAddress = unformattedJSON["ST_ADR"][currentKey];
	var currentPhoneNumber = unformattedJSON["PHNE_NUM"][currentKey];
	var currentZipCode = unformattedJSON["ZIP_CD"][currentKey];
	var currentLatitude = unformattedJSON["lat"][currentKey];
	var currentLongitude = unformattedJSON["lng"][currentKey];
 	// create single object of all values in reformatted object then append to array;
	var currentObject = {
		"city": currentCity,
		"facilityName": currentFacilityName,
		"providerNumber": currentProviderNumber,
		"stateCode": currentStateCode,
		"streetAddress": currentStreetAddress,
		"phoneNumber": currentPhoneNumber,
		"zipCode": currentZipCode,
		"lat": currentLatitude,
		"lng": currentLongitude
	};
 	// push to array;
	finalJSON.push(currentObject);
 });
 // convert final JSON to string format;
var jsonString = JSON.stringify(finalJSON);
 // write that stringified JSON to file
fs.writeFile("./hospital_list_bay_area_reformat.js", jsonString, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
}); 