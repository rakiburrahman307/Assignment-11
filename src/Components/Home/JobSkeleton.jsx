import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const JobSkeleton = () => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between"
      style={{ minHeight: '450px' }}
    >
      <div>
        <figure className="px-5 pt-5 h-56">
          {/* Skeleton for Image */}
          <Skeleton height="100%" className="rounded-lg h-56" />
        </figure>
        <div className="p-5 flex-grow">
          {/* Skeleton for Job Title */}
          <h2 className="text-xl font-bold mb-2">
            <Skeleton width={150} />
          </h2>

          {/* Skeleton for Posted by */}
          <h3 className="text-md text-gray-600 mb-3">
            <Skeleton width={100} />
          </h3>

          {/* Skeleton for Salary */}
          <p className="text-lg font-semibold text-green-600">
            <Skeleton width={120} />
          </p>

          {/* Skeleton for Category, Applicants, and Dates */}
          <p className="text-sm text-gray-500 mb-1">
            <Skeleton width={80} />
          </p>
          <p className="text-sm text-gray-500">
            <Skeleton width={100} />
          </p>
          <p className="text-sm text-gray-500">
            <Skeleton width={100} />
          </p>
        </div>
      </div>

      {/* Skeleton for Details Button */}
      <div className="flex justify-end px-5 mb-2 mt-auto">
        <Skeleton width={80} height={36} />
      </div>
    </div>
  );
};

export default JobSkeleton;
