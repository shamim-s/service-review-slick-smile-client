import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-10 mb-10'>
            <h1 className='text-center text-3xl font-bold mb-2'>Services</h1>
            <hr />
            <div className='mx-auto mt-10 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-20 md:gap-10 gap-8'>
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <p className='text-center mt-8'><Link to={'/services'} className='btn '>SEE MORE</Link></p>
        </div>
    );
};

export default Services;