import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear(); 
    return (
        <footer>
         <div className='container'>
            <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <h5>Fitness Heroes</h5>
                        <h6>“Strength does not come from physical capacity. It comes from an indomitable will.”</h6>
                        
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">.col-6 .col-md-4</div>
            <div class="col-sm-12 col-md-4 col-lg-4">.col-6 .col-md-4</div>
            </div>
        </div>
            <p className='text-center'><small>Copyright © { year}</small></p>
        </footer>
    );
};

export default Footer