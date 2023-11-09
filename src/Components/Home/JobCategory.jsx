import { useContext } from "react";
import { AuthContext } from "../AuthProvidors/AuthProvider";

const JobCategories = () => {
    const { darkMode } = useContext(AuthContext);
    const categories = ["Technology", "Marketing", "Finance", "Healthcare", "Education", "Customer Service"];

    return (
        <section className={`py-10 ${darkMode ? 'bg-[#4B5563] text-gray-300' : 'bg-[#F3F4F6] text-black'}`}>
            <div className="container mx-auto">
                <h2 className={`text-5xl font-extrabold text-center mb-10 ${darkMode ? 'text-gray-300' : 'text-black'}`}>
                    Explore <span className="text-teal-500">Job Categories</span>
                </h2>
                <div className="flex flex-wrap -mx-4">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`w-full md:w-1/2 lg:w-1/3 px-4 mb-6 transition-transform transform hover:scale-105 ${darkMode ? 'bg-base-100' : 'bg-white'
                                }`}
                        >
                            <div className="p-4">
                                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-500' : 'text-black'}`}>{category}</h3>
                                <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Find jobs in the {category} industry.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobCategories;
