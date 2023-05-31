import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../style.css";
import { Link, useNavigate } from 'react-router-dom';


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const PropertyCard = () => {
  const [properties, setProperty] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:8000/api/property/get");
      // console.log(response.data.data);
      let op = response.data.data;
      setProperty(() => [...properties, ...op]);
      console.log(properties);
    };
    fetchdata();
  }, []);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <>


<div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
          
        </div>
        <div className="">
          {
            properties.filter((property) => {
                if(searchTerm == ""){
                  return property;
                }else if(property.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return property;
                }
              })
        .map((property) => (
    <div class="row">
      <div class="column">
        <div class="card">
          <img
            className="card-img-top"
            src= {property.image}
            // {property.image} {`/uploads/${property.image}`}
            alt=" "
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h4 className="card-title">{property.name}</h4>
            <p className="card-text">{property.description}</p>
            <Link to={`/bookappo/${property._id}`} className="btn btn-primary">
              See Profile
            </Link>
          </div>
        </div>
      </div>
    </div>

  ))
  }
  </div>
      </div>

  </>
  )
};

export default PropertyCard;
