import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const JobCard = ({ job }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      key={job?._id}
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between"
      style={{ minHeight: '450px' }}
    >
      <div className="px-5 pt-5 h-56">
        <img
          src={job?.photoURL}
          alt={job?.jobTitle}
          className={`rounded-t-lg w-full h-full object-cover transition-all duration-700 ease-in-out ${
            isLoaded ? 'blur-0' : 'blur-md'
          }`}
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </div>

      <div className="p-5 flex-grow">
        <h2 className="text-xl font-bold mb-2">{job?.jobTitle}</h2>
        <h3 className="text-md text-gray-600 mb-3">Posted by: {job?.jobPost}</h3>
        <p className="text-lg font-semibold text-green-600">Salary: ${job?.salary}</p>
        <p className="text-sm text-gray-500 mb-1">Category: {job?.category}</p>
        <p className="text-sm text-gray-500">Applicants: {job?.applicantsNumber}</p>
        <p className="text-sm text-gray-500">Post Date: {job?.formatStartDate}</p>
        <p className="text-sm text-gray-500">End Date: {job?.formatEndDate}</p>
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
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    _id: PropTypes.string,
    photoURL: PropTypes.string,
    jobTitle: PropTypes.string,
    jobPost: PropTypes.string,
    salary: PropTypes.number,
    category: PropTypes.string,
    applicantsNumber: PropTypes.number,
    formatStartDate: PropTypes.string,
    formatEndDate: PropTypes.string,
  }).isRequired,
};

export default JobCard;
