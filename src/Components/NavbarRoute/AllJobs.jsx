import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import AllJobsTableRow from "../Pages/AllJobsTableRow";
import { useState } from "react";

const AllJobs = () => {

    const jobs = useLoaderData();
    const [data, setData]= useState(jobs);
    const handleSearch = (e) => {
        const searchItem = e.target.value.toLowerCase();
        const searchResult = jobs.filter((job) =>
          job.jobTitle.toLowerCase().includes(searchItem)
        );
        setData(searchResult);
      };
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>All Jobs | JobSwift</title>
            </Helmet>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name who posted the job</th>
        <th>Job Title</th>
        <th>Salary</th>
        <th>Job Posting Date</th>
        <th>Application Deadline</th>
        <th><input onChange={handleSearch} type="text" placeholder="Search here" className="input input-bordered input-sm w-32"/></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* All row */}
      {
            data.map(row => <AllJobsTableRow key={row._id} row={row}></AllJobsTableRow>)
      }
    </tbody>

  </table>
</div>
        </div>
    );
};

export default AllJobs;