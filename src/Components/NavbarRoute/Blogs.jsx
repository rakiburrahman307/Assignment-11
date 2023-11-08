
import { Helmet } from "react-helmet";

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding Access Tokens and Refresh Tokens',
            content: 'An access token is a credential that represents the authorization granted to a client (an application or user) to access specific resources on behalf of a user. These resources could be APIs, services, or other protected endpoints. Access tokens are time-limited and are issued by an authorization server after successful authentication and authorization.',
        },
        {
            id: 2,
            title: 'Exploring Express.js and Nest.js',
            content: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed to make the process of building web applications with Node.js simple and straightforward. Express.js is widely used for creating APIs and building the backend of web applications.',
        },
        {
            id: 3,
            title: 'Explaining Code in Your Project',
            content: 'Welcome to JobSwift Your Swift Path to Career Success! JobSwift is your premier destination for finding the perfect job opportunities tailored to your skills and preferences. Whether your seeking remote, on-site, hybrid, or part-time positions, JobSwift streamlines your job search, connecting you with diverse and exciting employment opportunities.',
        },
        // Add more blog posts as needed
    ];

    return (
        <div className="bg-gray-200 min-h-screen p-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blogs | JobSwift</title>
            </Helmet>
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-5xl font-extrabold mb-8 text-center text-teal-500">Welcome to  <span className="text-gray-600">the Blog Page</span></h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h2>
                            <p className="text-gray-700">{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
