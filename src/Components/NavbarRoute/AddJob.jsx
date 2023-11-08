import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvidors/AuthProvider";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddJob = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoURL = form.photoUrl.value;
        const jobTitle = form.title.value;
        const description = form.description.value;
        const salary = form.salary.value;
        const category = form.category.value;
        const userName = user.displayName;
        const jobPost = user.email;
        const formatStartDate = startDate.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' });
        const formatEndDate = endDate.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' });

        const data = {jobPost, userName, photoURL, jobTitle, description, salary, category, formatStartDate, formatEndDate }
        console.log(jobPost, userName, photoURL, jobTitle, description, salary, category, formatStartDate, formatEndDate)

        axios.post('https://assignment-11-server-pi-rouge.vercel.app/all_jobs', data, { withCredentials: true })
            .then(() => {
                toast.success('Job added successfully')
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>AddJob | JobSwift</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleAddJob} className="card-body">
                            <h1 className="text-3xl font-bold text-center">Add Job</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL</span>
                                    </label>
                                    <input type="text" name="photoUrl" placeholder="Picture URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Title</span>
                                    </label>
                                    <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" value={user.displayName} placeholder="User Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Salary range</span>
                                    </label>
                                    <input type="text" name="salary" placeholder="Salary range" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="Job Description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Posting Date</span>
                                    </label>
                                    <DatePicker
                                        className="input input-bordered"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        showTimeSelect={false}
                                        timeFormat=""
                                    />
                                </div>
                                <select className="select select-bordered w-full max-w-xs mt-8" name="category" defaultValue=''>
                                    <option value="" disabled hidden>
                                        Job Category
                                    </option>
                                    <option value="onSiteJob">On Site Jobs</option>
                                    <option value="remoteJob">Remote Jobs</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="partTimeJob">Part Time Jobs</option>
                                </select>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Application Deadline</span>
                                    </label>
                                    <DatePicker
                                        className="input input-bordered"
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        showTimeSelect={false}
                                        timeFormat=""
                                    />
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add New Job</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJob;