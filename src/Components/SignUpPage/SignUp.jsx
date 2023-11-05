import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SignUp = () => {
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
                    <form className="card-body">
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