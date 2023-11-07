import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvidors/AuthProvider";
import AppliedJobsRow from "../Pages/appliedJobsRow";

const AppliedJobs = () => {
    const {user} = useContext(AuthContext);
    const appliedData = useLoaderData();

    const userAppliedJobs = appliedData.filter(data => data.applyUserEmail === user.email);
    console.log(userAppliedJobs);
    return (
        <div className="overflow-x-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Applied Jobs | JobSwift</title>
            </Helmet>
            <div className="overflow-x-auto">
  <table className="table mb-80 table-pin-rows">
    {/* head */}
    <thead>
      <tr>

        <th>Job Title</th>
        <th>Salary</th>
        <th>End Date</th>
        <th>Cv Link</th>
      </tr>
    </thead>
    <tbody>
     
      {/* row 2 */}
      {
        userAppliedJobs?.map(job=><AppliedJobsRow key={job._id} job={job}></AppliedJobsRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AppliedJobs;