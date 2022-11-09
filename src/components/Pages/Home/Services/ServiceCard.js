import React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import Photoview from "./Photoview";

const ServiceCard = ({ service }) => {
  const { img, name, price, details, rating, _id } = service;
  return (
    <div className="mx-auto">
      <div className="card card-compact max-w-96 h-96 bg-base-100 shadow-xl rounded-none">
        <figure>
          <Photoview image={service.img}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details.slice(0, 100) + '...'}</p>
          <div className="card-actions justify-between items-center">
            <span className="text-2xl font font-semibold">${price}</span>
            <Link to={`/services/all/${_id}`} className=" pt-1 pb-1 pl-2 pr-2 text-blue-600 font-bold text-base hover:bg-slate-200 transition">DETAILS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
