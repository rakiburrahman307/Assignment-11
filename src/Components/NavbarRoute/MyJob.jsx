import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvidors/AuthProvider";
import AllMyJobsRow from "../Pages/AllMyJobsRow";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";


const MyJob = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const url = `http://localhost:5000/my_jobs?email=${user?.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, [url]);


    const handleSearch = (e) => {
        const searchItem = e.target.value.toLowerCase();
        const searchResult = data.filter((job) =>
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

                axios.delete(`http://localhost:5000/all_jobs/${id}`, { withCredentials: true })
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        })
                        const remaining = data.filter(data => data._id !== id);
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
            <h2 className="text-3xl font-bold text-center py-2">My <span className="text-teal-500">Jobs</span></h2>
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
                            <th><input onChange={handleSearch} type="text" placeholder="Search by title" className="input input-bordered input-sm w-32" /></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.map(job => <AllMyJobsRow key={job._id} job={job} handleDelete={handleDelete}></AllMyJobsRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyJob;