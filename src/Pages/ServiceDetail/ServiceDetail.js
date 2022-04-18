import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    
    return (
        <div>
            <div className='border border-3 mt-3'>
            <h2 className='text-center my-5'>Welcome to Service detail: {serviceId}</h2>
            </div>
    
            <div className='text-center'>
            <Link to='/checkout'>
                <button className='btn btn-info my-5 col-6 mx-auto'>Proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;