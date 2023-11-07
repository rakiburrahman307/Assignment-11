import { useLoaderData } from "react-router-dom";
import './details_style.css'

const DetailsPage = () => {

   const filterData = useLoaderData();
//    console.log(filterData)
  const {description, jobTitle, photoURL, salary}= filterData; 
    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center mb-6 mx-2 md:mx-10">Product <span className="text-green-400">Details</span></h2>
            <div className="card lg:card-side w-full px-8 bg-base-100 shadow-xl">
                <figure><img className="w-96 mx-auto" src={photoURL} alt={jobTitle} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Title: {jobTitle}</h2>
                    <h3 className="text-black text-xl font-semibold">Salary: ${salary}</h3>
                    <p className="text-justify"><span className="font-bold">Description:</span> {description}</p>
                   
                    <div className="card-actions justify-center md:justify-end">
                        <button className="btn btn-outline btn-neutral">Apply <Faapp className="text-2xl"></Faapp></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;