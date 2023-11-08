import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeTab = () => {
  const [type, setType] = useState([]);
  const [filterData, setFilterData] = useState([]);
  console.log(filterData);

  useEffect(() => {
    fetch('/type.json')
      .then((res) => res.json())
      .then((data) => setType(data));
  }, []);

  const handleFilter = (category) => {
    axios.get(`http://localhost:5000/all_jobs`, { withCredentials: true })
      .then(res => {
        const filter = res?.data?.filter(jobs => jobs.category.toLowerCase() === category.toLowerCase());
        setFilterData(filter);
      })
      .catch(err => {
        console.log(err);
      })
  };
  return (
    <div>
      <h2 className='text-5xl font-extrabold my-8 text-center'>Available Our <span className='text-teal-500'>Jobs</span></h2>
      <Tabs>
        <TabList>
          {type.map((tab) => (
            <Tab key={tab.id}>
              <div onClick={() => handleFilter(tab.type)}>{tab.type}</div>
            </Tab>
          ))}
        </TabList>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filterData.map((job) => (
            <div key={job._id} className="card w-auto bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={job.photoURL} alt={job.jobTitle} className="rounded-xl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Title: {job.jobTitle}</h2>
                <h3 className="text-lx font-semibold">Email: {job.jobPost}</h3>
                <p className='font-semibold'>salary: ${job.salary}</p>
                <p className='font-semibold'>Category: {job.category}</p>
                <p className='font-semibold'>Applicants: {job.applicantsNumber}</p>
                <p className='font-semibold'> Post Date: {job.formatStartDate}</p>
                <p className='font-semibold'>EndDate: {job.formatEndDate}</p>
                <div className="card-actions flex justify-end mt-2">
                  <Link to={`/all_job/${job._id}`} className="btn btn-outline btn-md btn-info hover:text-white">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeTab;
