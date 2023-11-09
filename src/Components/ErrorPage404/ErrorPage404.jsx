import { Link } from "react-router-dom";

const ErrorPage404 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-red-700">
            <div className="text-center text-white p-8">
                <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-8">Oops! Looks like you have ventured into uncharted territory.</p>
                <img
                    src="https://source.unsplash.com/800x400/?lost"
                    alt="Lost"
                    className="rounded-lg shadow-md mb-8"
                />
                <p className="text-lg mb-4">Let get you back on track:</p>
                <button className="btn btn-outline btn-error"><Link to="/" className="text-lg text-yellow-300 hover:underline">Go to Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage404;