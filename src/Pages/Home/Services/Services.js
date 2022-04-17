import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <h1>Services {services.length}</h1>
            {
                services.map(service => <Service
                    key={Service._id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;