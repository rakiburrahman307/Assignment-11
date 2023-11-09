
// import { useContext } from 'react';
import { useContext, useEffect, useState } from 'react';
import FutureCard from './FutureCard';
import { AuthContext } from '../AuthProvidors/AuthProvider';

const FeaturedJobs = () => {
    const { darkMode } = useContext(AuthContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className={`py-16 ${darkMode ? 'text-gray-400' : 'text-black'}  ${darkMode ? 'bg-black' : 'bg-gray-300'}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-extrabold mb-8 text-center">Our <span className='text-teal-600'>Feature Jobs</span></h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto px-5">
                    {
                        data.map(data => <FutureCard key={data.id} data={data}></FutureCard>)
                    }
                </div>
            </div>
        </div>


    );
};

export default FeaturedJobs;
