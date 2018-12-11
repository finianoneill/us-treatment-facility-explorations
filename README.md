

# A Visualization of Healthcare Facilities across Bay Area

## Background

The main objective of the project was to find the distribution of treatment facilities/hospitals across the Bay Area. The total population of Bay Area is approximately 7 million and through this project we wanted to look at the distribution of hospitals relative to the population. Our specific objectives were as follows:
1.     Quantify healthcare facilities/hospital densities within different cities in the Bay.
2.     Compare hospital densities across different cities.
3.     Compare the population characteristics of different regions (total population, poverty count, median income, median            age).
 
## Tools used 
 
1.     Reverse geocoding
2.     Yelp API
3.     Census API
4.     Jupyter Notebook
5.     Flask API
6.     SQLite database
7.     Javascript Libraries
    a.     Leaflet
    b.     C3.js
    c.     Bootstrap
 
## Extracting, Sorting and Loading Data
 
We downloaded a CSV file from  https://www.cms.gov/ which gave us information about all Medicare, Medicaid, or private insurer accredited health institutions across the US. We narrowed down this list of healthcare facilities to just Bay Area Cities. We further used Yelp API business search feature to find ratings for businesses listed as Hospitals. With the help of reverse geocoding, we were able to find the latitude and longitude for different facilities from the zip code. Finally, by querying census API key we were able to get demographic information such as total population, household income, poverty count, median age by zip code.
 
## Visualizing Data using HTML/CSS/Javascript
 
We used Javascript to create a function that would allow us to iterate through the data in our SQLite server and thus visualize the data. We created Flask API to serve the HTML page. To make the website accessible without local dependencies we deployed the Flask to Heroku.

## App Deployed to Heroku

https://us-treatment-facility-explore.herokuapp.com/
 
