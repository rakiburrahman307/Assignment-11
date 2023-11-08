
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../AuthProvidors/AuthProvider';

const Testimonials = () => {
    const {darkMode} = useContext(AuthContext);
    const testimonials = [
        {
            id: 1,
            author: 'Sarah Johnson',
            position: 'Software Engineer',
            company: 'Tech Innovators',
            quote: 'JobSwift made my job search incredibly easy and efficient. I found the perfect remote position within days!',
        },
        {
            id: 2,
            author: 'Alex Rodriguez',
            position: 'Marketing Specialist',
            company: 'Marketing Pros',
            quote: 'The variety of job opportunities on JobSwift is amazing. It helped me land my dream job in digital marketing!',
        },
        {
            id: 3,
            author: 'Emily Chen',
            position: 'UX/UI Designer',
            company: 'Creative Solutions',
            quote: 'JobSwift exceeded my expectations. The user-friendly interface and diverse job listings made my job search enjoyable and successful.',
        },
        {
            id: 4,
            author: 'Michael Brown',
            position: 'Data Scientist',
            company: 'Data Insights Corp',
            quote: 'As a data scientist, finding the right opportunities is crucial. JobSwift\'s curated listings and seamless application process made my job hunt stress-free.',
        },
        {
            id: 5,
            author: 'Sophia Lee',
            position: 'Mobile App Developer',
            company: 'App Innovations Ltd',
            quote: 'JobSwift connects developers with exciting projects. I found a remote mobile app development job that aligns perfectly with my skills and passion.',
        },
        {
            id: 6,
            author: 'David Kim',
            position: 'Content Marketing Manager',
            company: 'ContentCrafters Co.',
            quote: 'JobSwift is a game-changer for content marketers. It helped me discover remote opportunities and advance my career in content strategy.',
        }
      
    ];

    return (
        <div className={`py-16 ${darkMode ? 'text-gray-400' : 'text-black'}  ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Testimonials | JobSwift</title>
            </Helmet>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-extrabold mb-8 text-center">What <span className='text-teal-600'>Users Say</span></h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <p className="italic text-gray-600 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
