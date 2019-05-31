import React, { useState } from "react";
import "./Hotels.css";
import Rating from "../Rating";

function Hotels({ hotelDetails }) {
  const images = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2017/07/shakshuka-1-600x400.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2019/01/dreamy-flatwhite-coffee-with-perfect-latte-art-2-600x900.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2019/05/colorful-healthy-fresh-berries-in-a-cup-1-600x900.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2018/12/green-salad-600x900.jpg"
  ];

  return (
    <div className="hotelContainer">
      <div className="imageContainer">
        <img className="image" src={images[Math.floor(Math.random()*6)]} />
        <span className="hotelName">{hotelDetails.name}</span>
      </div>
      <div className="detailsArea">
        <div className="area">{hotelDetails.area}</div>
        <hr />
        <div className="city">{hotelDetails.city}</div>
        <hr />
        <div className="ratingArea">
          <Rating />
        </div>
      </div>
    </div>
  );
}

export default Hotels;
