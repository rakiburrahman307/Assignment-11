import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvidors/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        console.log(name, email, password, photoUrl);
        if (/^\w{1,5}$/.test(password)) {
            toast.error("Password must be 6 characters");
        } else if (/^[^A-Z]*$/.test(password)) {
            toast.error("Password must one capital letter")
        } else if (/^[^\W_]*$/.test(password)) {
            toast.error('Must have a special character')
        } else {
            createUser(email, password, name)
                .then(result => {
                    // update profile name :
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photoUrl
                    })
                        .then(() => {
                            toast.success("Create user successfully")
                            navigate("/")

                        })
                        .catch(err => {
                            toast.error(err.massage)
                        })
                })
                .catch(err => {
                    toast.error(err.massage);
                });


        }

    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SignUp - JobSwift</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/4ZSM0P3/pexels-tirachard-kumtanom-733852.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="card flex-shrink-0 mt-10 w-full max-w-sm shadow-2xl bg-base-300">
                    <h1 className="text-3xl font-bold text-center mt-4">Login now!</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Enter Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="hover:scale-105 btn text-white btn-block bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-teal-800">
                                Sign Up
                            </button>
                        </div>
                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already have an account? Login Now</Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;