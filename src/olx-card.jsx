import React from "react";
import "./index.css"; 
import Navbar from "./navbar";

const Card = ({img , price , name , button}) => {
  return (
   
    <>


    <div className="card">
       
      <img
        src= {img}
        alt="Product"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-price">{price}</p>
        <p className="card-description">
          This is a description of the product. It gives an overview of what the
          product is all about.
        </p>
        <button style={{
            backgroundColor : button
        }}>Add To Card</button>
      </div>
      </div>
      </>
  );
};

export default Card;
