import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#################################################
# Database Setup
#################################################

# heroku_db "DATABASE_URI" = "postgres://usnbccbnslvlhm:81b54396ff068dcde017e327110f600d4d004a63c3e21b43215afbbe23bbe8f0@ec2-54-197-234-33.compute-1.amazonaws.com:5432/d4prqn1vr17kt"

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/treatment_facilities.sqlite"

db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
print(Base.classes)
Treatment_Facilities = Base.classes.treatment_facilities
Census_Data = Base.classes.census_data

@app.before_first_request
def setup():
    # Recreate database each time for demo
    db.drop_all()
    db.create_all()

@app.route("/p3navbar")
def navbar():
    """Hosts the Navbar html the script is universal"""
    return render_template("p3navbar.html")

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/about")
def about():
    """Return the about page"""
    return render_template("about.html")

@app.route("/maps")
def maps():
    """Return the maps."""
    return render_template("maps.html")

@app.route("/charts")
def charts():
    """Return the charts."""
    return render_template("charts.html")

@app.route("/facilities_data")
def facilities():
    """Return all of the facilities data."""

    # Perform sql query to pull all treatment facility data
    results = db.session.query(Treatment_Facilities).all()

    json_list = []
    for row in results:
        current_row = {}
        current_row["id"] = row.id
        current_row["city"] = row.city
        current_row["facilityName"] = row.facilityName
        current_row["providerNumber"] = row.providerNumber
        current_row["stateCode"] = row.stateCode
        current_row["streetAddress"] = row.streetAddress
        current_row["phoneNumber"] = row.phoneNumber
        current_row["zipCode"] = row.zipCode
        current_row["lat"] = row.lat
        current_row["lng"] = row.lng

        json_list.append(current_row)
    
    # Return all of the data from the dataframe
    return jsonify(json_list)

@app.route("/census_data")
def census():
    """Return all of the facilities data."""

    # Perform sql query to pull all treatment facility data
    results = db.session.query(Census_Data).all()

    json_list = []
    for row in results:
        current_row = {}
        current_row["id"] = row.id
        current_row["City"] = row.City
        current_row["Median_Age"] = row.Median_Age
        current_row["Average_Income"] = row.Average_Income
        current_row["Per_Capita_Income"] = row.Per_Capita_Income
        current_row["Number_of_facilities"] = row.Number_of_facilities
        current_row["Total_Population"] = row.Total_Population
        current_row["Poverty_Count"] = row.Poverty_Count
        current_row["Location"] = row.Location

        json_list.append(current_row)
    
    # Return all of the data from the dataframe
    return jsonify(json_list)


@app.route("/treatment_facilities/<facility_id>")
def treatment_facility(facility_id):
    """Return the data for a given facility."""
    sel = [
        Treatment_Facilities.id,
        Treatment_Facilities.city,
        Treatment_Facilities.facilityName,
        Treatment_Facilities.providerNumber,
        Treatment_Facilities.stateCode,
        Treatment_Facilities.streetAddress,
        Treatment_Facilities.phoneNumber,
        Treatment_Facilities.zipCode,
        Treatment_Facilities.lat,
        Treatment_Facilities.lng,
    ]

    results = db.session.query(*sel).filter(Treatment_Facilities.id == facility_id).all()

    # Create a dictionary entry for each row of metadata information
    treatment_facility = {}
    for result in results:
        treatment_facility["id"] = result[0]
        treatment_facility["city"] = result[1]
        treatment_facility["facilityName"] = result[2]
        treatment_facility["providerNumber"] = result[3]
        treatment_facility["stateCode"] = result[4]
        treatment_facility["streetAddress"] = result[5]
        treatment_facility["phoneNumber"] = result[6]
        treatment_facility["zipCode"] = result[7]
        treatment_facility["lat"] = result[8]
        treatment_facility["lng"] = result[9]

    print(treatment_facility)
    return jsonify(treatment_facility)


if __name__ == "__main__":
    app.run()