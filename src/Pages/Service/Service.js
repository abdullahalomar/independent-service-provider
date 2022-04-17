import React from 'react';

const Service = (props) => {
    const { name, about, picture, price } = props.service;
    return (
    <div className='col-sm-12 col-md-6 col-lg-4 gx-5 gy-3'>
            <div class="card" style={{width: '18rem'}}>
        <img src={picture} class="card-img-top" alt="..."/>
            <div class="card-body">
                    <h5 class="card-text">{ name}</h5>
              <h4> Price: ${price}</h4>
              <p class="card-text">{about}</p>
              <button className='btn btn-info'>Proceed Checkout</button>
           </div>
       </div> 
    </div> 
           
    );
};

export default Service;