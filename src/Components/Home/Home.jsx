import { Helmet } from "react-helmet";
import Banner from "./Banner";
import HomeTab from "./HomeTab";
import FeaturedJobs from "./FeaturedJobs";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - JobSwift</title>
            </Helmet>
         
         <Banner></Banner>
         <HomeTab></HomeTab>
         <FeaturedJobs></FeaturedJobs>
         <Testimonials></Testimonials>
       
        </div>
    );
};

export default Home;