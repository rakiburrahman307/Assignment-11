import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UpdatePage = () => {
    const updateData = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const { _id, photoURL, jobTitle, salary, } = updateData;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoURL = form.photoUrl.value;
        const jobTitle = form.title.value;
        const salary = form.salary.value;
        const formatStartDate = startDate.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' });
        const formatEndDate = endDate.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' });

        const data = { photoURL, jobTitle, salary, formatStartDate, formatEndDate }
        console.log(photoURL, jobTitle, salary, formatStartDate, formatEndDate)

        axios.patch(`https://assignment-11-server-pi-rouge.vercel.app/all_jobs/${_id}`, data, { withCredentials: true })
            .then(() => {
                toast.success('Update successfully')
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update | JobSwift</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdate} className="card-body">
                            <h1 className="text-3xl font-bold text-center">Update <span className="text-teal-500">Job</span></h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL</span>
                                    </label>
                                    <input type="text" defaultValue={photoURL} name="photoUrl" placeholder="Picture URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Title</span>
                                    </label>
                                    <input type="text" defaultValue={jobTitle} name="title" placeholder="Job Title" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Salary range</span>
                                    </label>
                                    <input type="text" defaultValue={salary} name="salary" placeholder="Salary range" className="input input-bordered" required />
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
                                <button className="btn btn-outline btn-accent">Update Job</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;