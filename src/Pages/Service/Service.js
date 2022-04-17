import React from 'react';

const Service = (props) => {
    const { name, about, picture, price } = props.service;
    return (
        <div>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <p>{about }</p>
        </div>
    );
};

export default Service;