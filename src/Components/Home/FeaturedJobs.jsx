
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../AuthProvidors/AuthProvider';

const FeaturedJobs = () => {
const {darkMode} = useContext(AuthContext);
   

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Featured Jobs | JobSwift</title>
            </Helmet>
            
        </div>
    );
};

export default FeaturedJobs;
