import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./details_style.css";
import { AuthContext } from "../AuthProvidors/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import emailjs from 'emailjs-com';

const DetailsPage = () => {
    const { user } = useContext(AuthContext);
    const [id, setId] = useState();
    const name = user?.displayName;
    const applyUserEmail = user?.email;
    const email = user?.email;
    const filterData = useLoaderData();
    const { _id, description, jobTitle, photoURL, salary, formatEndDate, jobPost } = filterData;

    // EmailJS service ID
    const serviceID = 'service_lp2l0en';
    // EmailJS template ID
    const templateID = 'template_qgozxbq';
    // EmailJS user ID
    const userID = '7I3gfh3znCz49t0WY';



    const handleApplyJobs = (id) => {
        setId(id);
        const isDeadlineOver = Date.now() > new Date(formatEndDate).getTime();
        // else if (jobPost === user.email) {
        //     alert("Employers cannot apply for their own jobs.");
        //     return;
        //   }
        if (isDeadlineOver) {
            toast.error("Application deadline has passed. You cannot apply.");
            return;
        } else {
            // Open the modal using document.getElementById('ID').showModal() method
            document.getElementById('my_modal_1').showModal();
        }
    };
    const handleSubmitApplyForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const cvLink = form.cv_link.value;

        const data = { applyUserEmail, description, jobTitle, photoURL, salary, formatEndDate, jobPost, cvLink };

        axios.post('http://localhost:5000/applied_job', data, { withCredentials: true })
            .then(() => {
                toast.success('Job Applied successfully');
                document.getElementById('my_modal_1').close();
                axios.put(`http://localhost:5000/all_jobs/${id}`, { withCredentials: true })
                    .then(() => {
                        console.log('Update successfully');
                    })
                    .catch(error => {
                        console.error(error.message);
                    });

                const templateParams = {
                    to_email: user?.email,
                    from_name: 'jobSwift',
                    message: 'Successfully received your CV. Please stay connected.',
                };

                emailjs.send(serviceID, templateID, templateParams, userID)
                    .then(
                        (result) => {
                            console.log(result.text);
                            toast.success('Email sent successfully!');
                        },
                        (error) => {
                            console.log(error.text);
                            toast.error('Error sending email. Please try again.');
                        }
                    );

            })
            .catch((error) => {
                toast.error(error.message);
            });

    }

    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-center mb-6 mx-2 md:mx-10">
                Job <span className="text-teal-600">Details</span>
            </h2>
            <div className="card lg:card-side w-full px-8 bg-base-100 shadow-xl">
                <figure>
                    <img className="w-96 mx-auto" src={photoURL} alt={jobTitle} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Title: {jobTitle}</h2>
                    <h3 className=" text-xl font-semibold">Salary: ${salary}</h3>
                    <h3 className=" text-lg font-semibold">Number of Applicants: 10</h3>
                    <p className="text-justify">
                        <span className="font-bold">Description:</span> {description}
                    </p>

                    <div className="card-actions justify-center md:justify-end">
                        <button onClick={() => handleApplyJobs(_id)} className="btn btn-outline btn-warning">
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Submit Cv Link</h3>
                    <div className="modal-action mx-auto">
                        <form onSubmit={handleSubmitApplyForm} className="mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" value={name} className="input input-bordered input-sm w-full max-w-24" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" value={email} className="input input-bordered input-sm w-full max-w-24" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Link Here</span>
                                </label>
                                <input type="text" name="cv_link" placeholder="Cv Link Here" className="input input-bordered input-sm w-full max-w-24" />
                            </div>
                            {/* If there is a button in form, it will close the modal */}

                            <button className="btn btn-block btn-sm btn-success mt-5 hover:bg-green-600 hover:text-white ">
                                Submit
                            </button>

                        </form>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DetailsPage;
