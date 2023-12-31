import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvidors/AuthProvider";
import { motion } from "framer-motion"


const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile | JobSwift</title>
            </Helmet>
            <div className="my-10">
                <h2 className="text-4xl font-bold text-center mb-6 mx-2 md:mx-10">
                    Profile <span className="text-teal-600">Details</span>
                </h2>
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    className="card lg:card-side w-full px-8 bg-base-100 shadow-xl"
                >
                    <figure>
                        <img className="w-80 mx-auto" src={user?.photoURL} alt={user?.displayName} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Name: {user?.displayName}</h2>
                        <h3 className="text-xl font-semibold">Email: {user?.email}</h3>
                        <h3 className="text-lg font-semibold">Last LogIn: {user?.metadata.lastSignInTime}</h3>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;