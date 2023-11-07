import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvidors/AuthProvider";
import AllMyJobsRow from "../Pages/AllMyJobsRow";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";


const MyJob = () => {
    const { user } = useContext(AuthContext);
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
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/all_jobs/${id}`, {withCredentials: true})
                .then(() => {  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  })
                const remaining = filterData.filter(data => data._id !== id);
                setData(remaining);
                })
                .catch((error) => {
                    toast.error(error.message);
                })
            
            }
          });
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
                            <th><input onChange={handleSearch} type="text" placeholder="Search here" className="input input-bordered input-sm w-32" /></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filterData?.map(job => <AllMyJobsRow key={job._id} job={job} handleDelete={handleDelete}></AllMyJobsRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyJob;