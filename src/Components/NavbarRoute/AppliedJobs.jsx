import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvidors/AuthProvider";
import AppliedJobsRow from "../Pages/appliedJobsRow";
import { usePDF } from "react-to-pdf";
import axios from "axios";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  const url = `https://assignment-11-server-pi-rouge.vercel.app/applied_job?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true })
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [url]);

  const handleSearch = (e) => {
    const searchItem = e.target.value.toLowerCase();
    const searchResult = data.filter((job) =>
      job.category.toLowerCase().includes(searchItem)
    );
    setData(searchResult);
  };
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Applied Jobs | JobSwift</title>
      </Helmet>
      <div className="overflow-x-auto">
        <div className="flex justify-between m-2">
          <h2 className="text-3xl font-bold">Applied <span className="text-teal-500">Jobs</span></h2>
          <button className="btn btn-outline btn-sm btn-info hover:text-white" onClick={() => toPDF()}>Download PDF</button>

        </div>
        <div ref={targetRef}>
          <table className="table mb-80 table-pin-rows">
            {/* head */}
            <thead>
              <tr>

                <th>Job Title</th>
                <th>Category</th>
                <th>Applied Email</th>
                <th>Salary</th>
                <th>End Date</th>
                <th>Cv Link</th>
                <th><input onChange={handleSearch} type="text" placeholder="Search by category" className="input input-bordered input-sm w-32" /></th>
                <th></th>

              </tr>
            </thead>
            <tbody>

              {/* row 2 */}
              {
                data?.map(job => <AppliedJobsRow key={job._id} job={job}></AppliedJobsRow>)
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AppliedJobs;