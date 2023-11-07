
import { Helmet } from 'react-helmet';

const FeaturedJobs = () => {

    const featuredJobs = [
        {
            id: 3,
            title: 'UX/UI Designer',
            company: 'Creative Solutions',
            location: 'Hybrid',
            imageUrl: 'https://example.com/uxuidesigner.jpg',
            description: 'Join our design team as a UX/UI Designer. Create visually stunning and user-friendly interfaces that captivate and engage our audience.',
           
        },
        {
            id: 4,
            title: 'Data Scientist',
            company: 'Data Insights Corp',
            location: 'On-site - San Francisco',
            imageUrl: 'https://example.com/datascientist.jpg',
            description: 'Explore the world of data as a Data Scientist. Analyze and interpret complex data sets to provide valuable insights and drive decision-making.',
           
        },
        {
            id: 5,
            title: 'Mobile App Developer',
            company: 'App Innovations Ltd',
            location: 'Remote',
            imageUrl: 'https://example.com/mobileappdeveloper.jpg',
            description: 'Shape the future of mobile apps as a Mobile App Developer. Work remotely and contribute to cutting-edge projects in the mobile app industry.',
          
        },
        {
            id: 6,
            title: 'DevOps Engineer',
            company: 'TechOps Solutions',
            location: 'Hybrid',
            imageUrl: 'https://example.com/devopsengineer.jpg',
            description: 'Join our DevOps team and streamline our development process. Implement and manage automation tools to enhance efficiency and reliability.',
          
        },
        {
            id: 7,
            title: 'Network Security Analyst',
            company: 'SecureNet Solutions',
            location: 'On-site - Washington, D.C.',
            imageUrl: 'https://example.com/networksecurityanalyst.jpg',
            description: 'Enhance cybersecurity as a Network Security Analyst. Implement and maintain security measures to protect our network infrastructure.',
         
        },
        {
            id: 8,
            title: 'Content Marketing Manager',
            company: 'ContentCrafters Co.',
            location: 'Remote',
            imageUrl: 'https://example.com/contentmarketingmanager.jpg',
            description: 'Drive content strategy as a Content Marketing Manager. Work remotely and lead the creation and distribution of compelling content.',
           
        },
   
    ];

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Featured Jobs | JobSwift</title>
            </Helmet>
            <div className={`bg-gradient-to-r from-gray-500 to-gray-800 min-h-screen p-8 text-white`}>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-extrabold mb-8 text-center">Explore Exciting Opportunities</h1>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featuredJobs.map((job) => (
                            <div key={job.id} className={`bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105`}>
                                <img src={job.imageUrl} alt={job.title} className="mb-4 rounded-md" />
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{job.title}</h2>
                                <p className="text-gray-600">{job.company} - {job.location}</p>
                                <p className="text-gray-700 mb-4">{job.description}</p>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
