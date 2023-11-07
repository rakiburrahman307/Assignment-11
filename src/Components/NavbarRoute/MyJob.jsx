import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvidors/AuthProvider";
import AllMyJobsRow from "../Pages/AllMyJobsRow";


const MyJob = () => {
    const {user} = useContext(AuthContext);
    const myJobsData = useLoaderData();
    const [data, setData] = useState(myJobsData);

    const filterData = data?.filter(job => job?.jobPost === user?.email);

    const handleSearch = (e) => {
        const searchItem = e.target.value.toLowerCase();
        const searchResult = filterData.filter((job) =>
          job?.jobTitle.toLowerCase().includes(searchItem)
        );
        setData(searchResult);
      };

    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>My Job | JobSwift</title>
            </Helmet>
        
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name who posted the job</th>
        <th>Job Title</th>
        <th>Salary</th>
        <th>Applicants Number</th>
        <th>Job Posting Date</th>
        <th>Application Deadline</th>
        <th><input onChange={handleSearch} type="text" placeholder="Search here" className="input input-bordered input-sm w-32"/></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
    {
            filterData?.map(job => <AllMyJobsRow key={job._id} job={job}></AllMyJobsRow>)
      }
      
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default MyJob;