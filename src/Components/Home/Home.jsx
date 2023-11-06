import { Helmet } from "react-helmet";
import Banner from "./Banner";
import HomeTab from "./HomeTab";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - JobSwift</title>
            </Helmet>
         
         <Banner></Banner>
         <HomeTab></HomeTab>
       
        </div>
    );
};

export default Home;