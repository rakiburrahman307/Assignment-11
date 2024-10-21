
import JobCard from './JobCard';
import JobSkeleton from './JobSkeleton';
import PropTypes from 'prop-types';

const JobList = ({ jobs, loading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 min-h-[500px]">
      {loading ? (
        Array.from({ length: 8 }).map((_, idx) => <JobSkeleton key={idx} />)
      ) : jobs.length === 0 ? (
        <p className="col-span-full text-center">No jobs found in this category.</p>
      ) : (
        jobs.map((job) => <JobCard key={job?._id} job={job} />)
      )}
    </div>
  );
};

JobList.propTypes = {
  jobs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default JobList;
