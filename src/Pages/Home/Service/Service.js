import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{ name, types, img, description } = service;
    return (
        <div className="service">
           <img src={img} alt=""/>
           <h3>{name}</h3>
           <h5>{types}</h5>
           <p className="px-3">{description}</p>
        </div>
    );
};

export default Service;