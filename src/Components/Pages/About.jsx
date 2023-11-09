import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div className="container mx-auto my-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>About | JobSwift</title>
            </Helmet>
            <h1 className="text-5xl font-extrabold mb-8 text-center">About Job Swift</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-lg leading-relaxed mb-4">
                        Welcome to Job Swift, your go-to platform for exploring and securing exciting career opportunities. At Job Swift, we are passionate about connecting talented individuals with the right jobs, fostering professional growth, and contributing to the success stories of both job seekers and employers.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Our mission is to make the job search process seamless, efficient, and tailored to your unique skills and aspirations. Whether you are a seasoned professional looking for new challenges or a recent graduate eager to embark on your career journey, Job Swift is designed to cater to your needs.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        We believe in the power of meaningful connections. That s why we have created a platform that not only showcases diverse job opportunities across various industries but also facilitates interactions between employers and job seekers. Your success is our priority.
                    </p>
                </div>

                <div>
                    <img src="https://i.ibb.co/kMxPRY1/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg" alt="Job Swift Office" className="rounded-md w-full h-auto" />
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg leading-relaxed mb-4">
                    At Job Swift, we envision a future where individuals find fulfilling careers that align with their passions and contribute to their personal and professional growth. We strive to be the bridge that connects talent with opportunity, fostering a thriving and dynamic global workforce.
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Have questions or suggestions? We did love to hear from you! Feel free to reach out to us at <a href="mailto:info@jobswift.com" className="text-teal-500">info@jobswift.com</a>. Your feedback is invaluable in helping us improve and better serve your needs.
                </p>
            </div>
        </div>
    );
};

export default About;
