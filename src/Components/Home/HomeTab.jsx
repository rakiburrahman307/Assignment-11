import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const HomeTab = () => {
  const [type, setType] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageIsLoaded, setImageIsLoaded] = useState(true);

  useEffect(() => {
    // Fetch type data when component mounts
    fetch('/type.json')
      .then((res) => res.json())
      .then((data) => setType(data))
      .catch((err) => console.error(err));

    // Fetch all jobs data once when component loads
    axios.get(`https://assignment-11-server-pi-rouge.vercel.app/all_jobs`, { withCredentials: true })
      .then(res => setFilterData(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)); // Set loading to false after fetching data
  }, []);

  const handleFilter = (category) => {
    // Fetch filtered jobs based on the selected category
    axios.get(`https://assignment-11-server-pi-rouge.vercel.app/all_jobs`, { withCredentials: true })
      .then(res => {
        const filter = res?.data?.filter(jobs => jobs?.category?.toLowerCase() === category?.toLowerCase());
        setFilterData(filter);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='mb-10'>
      <h2 className='text-5xl font-extrabold my-8 text-center'>
        Available Our <span className='text-teal-500'>Jobs</span>
      </h2>
      <div>
        <Marquee className='mb-5'>
          <h2 className='text-red-500'>Using the react tab component, click a category to load related jobs</h2>
        </Marquee>
      </div>
      <Tabs>
        <TabList className="flex gap-2 justify-center border-b-2 pb-4">
          {type?.map((tab) => (
            <Tab
              key={tab.id}
              className="px-4 py-2 bg-teal-100 rounded-lg cursor-pointer hover:bg-teal-200 active:bg-teal-300 transition-all"
              onClick={() => handleFilter(tab?.type)}
            >
              {tab?.type}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {filterData?.map((job) => (
              <div
                key={job?._id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between"
                style={{ minHeight: '450px' }}
              >
                <div>
                  <figure className="px-5 pt-5 h-56">
                    <img
                      src={job?.photoURL}
                      alt={job?.jobTitle}
                      className={`rounded-lg h-56 transition-all duration-300 ease-in-out ${imageIsLoaded ? 'blur-sm' : 'blur-0'}`}
                      loading="lazy"
                      onLoad={() => setImageIsLoaded(false)}
                    />
                  </figure>
                  <div className="p-5 flex-grow">
                    <h2 className="text-xl font-bold mb-2">{job?.jobTitle}</h2>
                    <h3 className="text-md text-gray-600 mb-3">Posted by: {job?.jobPost}</h3>
                    <p className="text-lg font-semibold text-green-600">Salary: ${job?.salary}</p>
                    <p className="text-sm text-gray-500 mb-1">Category: {job?.category}</p>
                    <p className="text-sm text-gray-500">Applicants: {job?.applicantsNumber}</p>
                    <p className="text-sm text-gray-500">Post Date: {job?.formatStartDate}</p>
                    <p className="text-sm text-gray-500">End Date: {job?.formatEndDate}</p>
                  </div>
                </div>
                <div className="flex justify-end px-5 mb-2 mt-auto">
                  <Link
                    to={`/all_job/${job?._id}`}
                    className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-200"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomeTab;
