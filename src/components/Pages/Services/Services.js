import React, { useEffect, useState } from 'react';
import Hero from './Hero';
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
            {/* services hero section  */}
            <section className=''>
                <Hero></Hero>
            </section>

            <h1 className='text-center text-3xl font-bold mb-4'>All Services</h1>
            <hr className='mb-6'/>

            {/* services section  */}
            <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-20'>
                {
                    allServices.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </section>
        </div>
    );
};

export default Services;