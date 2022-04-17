import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div className='container'>
            <h1 className='text-info text-center'>Services {services.length}</h1>
            <div className='row'>
            {
                services.map(service => <Service
                    key={Service._id}
                    service={service}
                ></Service>)
            }
         </div>
        </div>
    );
};

export default Services;