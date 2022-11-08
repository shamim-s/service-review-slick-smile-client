import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services/all')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])
    return (
        <div className='mt-10 mb-10'>
            <h1 className='text-center text-3xl font-bold mb-4'>All Services</h1>
            <hr className='mb-6'/>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-20'>
                {
                    allServices.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;