import { Helmet } from "react-helmet";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - JobSwift</title>
            </Helmet>
         <Banner></Banner>
        </div>
    );
};

export default Home;