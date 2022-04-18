import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { _id, name, about, picture, price } = props.service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
    <div className='col-sm-12 col-md-6 col-lg-4 gx-5 gy-3'>
            <div class="card" style={{width: '18rem'}}>
        <img src={picture} class="card-img-top" alt="..."/>
            <div class="card-body">
                    <h5 class="card-text">{ name}</h5>
              <h4> Price: ${price}</h4>
              <p class="card-text">{about}</p>
                    <button onClick={()=>navigateToServiceDetail(_id)} className='btn btn-info'>Book Now: {name}</button>
           </div>
       </div> 
    </div> 
           
    );
};

export default Service;