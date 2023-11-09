import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <div className="container mx-auto my-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | JobSwift</title>
            </Helmet>
            <h1 className="text-5xl font-extrabold mb-8 text-center">Contact Job Swift</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-lg leading-relaxed mb-4">
                        Thank you for considering reaching out to Job Swift. We are here to assist you with any questions, concerns, or feedback you may have. Your input is valuable to us, and we strive to provide the best support possible.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Please feel free to get in touch with us using the contact information below or by filling out the contact form. We all do our best to respond promptly and address your inquiries.
                    </p>
                </div>

                <div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
                        </div>

                        <button type="submit" className="btn btn-teal">Submit</button>
                    </form>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Job Swift Industries Ltd. <br />
                    123 Job Street, Career City <br />
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Email: <a href="mailto:info@jobswift.com" className="text-teal-500">info@jobswift.com</a> <br />
                    Phone: +88 0174918----
                </p>
            </div>
        </div>
    );
};

export default Contact;
