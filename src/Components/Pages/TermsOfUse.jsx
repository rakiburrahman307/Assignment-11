import { Helmet } from "react-helmet";


const TermsOfUse = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Terms Of Use | JobSwift</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-4">Terms of Use</h2>
            <p className="text-gray-700">
                Welcome to JobSwift! By accessing this website, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree to these terms, please refrain from using our website.
            </p>

            <ol className="list-decimal ml-6 mt-4">
                <li className="text-gray-700">
                    <strong>Content:</strong> The content on this website is for general information and use only. It is subject to change without notice.
                </li>
                <li className="text-gray-700">
                    <strong>User Conduct:</strong> You agree to use this website for lawful purposes only. Unacceptable use may lead to termination of your access.
                </li>
                <li className="text-gray-700">
                    <strong>Privacy:</strong> We collect and process personal information according to our Privacy Policy.
                </li>
                <li className="text-gray-700">
                    <strong>Intellectual Property:</strong> This website contains material owned by or licensed to us. This material includes, but is not limited to, design, layout, appearance, and graphics.
                </li>
                <li className="text-gray-700">
                    <strong>Links to Other Websites:</strong> Our website may contain links to third-party websites. These links are provided for your convenience; we have no control over the content and availability of those sites.
                </li>
                <li className="text-gray-700">
                    <strong>Disclaimer:</strong> Your use of any information or materials on this website is at your own risk. It is your responsibility to ensure that any products, services, or information available meet your specific requirements.
                </li>
                <li className="text-gray-700">
                    <strong>Changes to Terms:</strong> We may modify these terms at any time. Please review this page periodically for changes.
                </li>
                <li className="text-gray-700">
                    <strong>Governing Law:</strong> These terms are governed by the laws of [Your Country], and any disputes will be subject to the exclusive jurisdiction of the courts of [Your Country].
                </li>
            </ol>

            <p className="text-gray-700 mt-4">
                For questions or concerns, please contact us at [Your Contact Information].
            </p>
        </div>
    );
};

export default TermsOfUse;
