import { Helmet } from "react-helmet";


const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy | JobSwift</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
      <p className="text-gray-700">
        This Privacy Policy outlines how JobSwift Industries Ltd. collects, uses, maintains, and discloses information collected from users of our website.
      </p>

      <ol className="list-decimal ml-6 mt-4">
        <li className="text-gray-700">
          <strong>Personal Identification Information:</strong> We may collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register on the site, and fill out forms.
        </li>
        <li className="text-gray-700">
          <strong>Non-personal Identification Information:</strong> We may collect non-personal identification information about users whenever they interact with our website. Non-personal identification information may include browser name, type of computer, and technical information about users means of connection to our site.
        </li>
        <li className="text-gray-700">
          <strong>Web Browser Cookies:</strong> Our site may use cookies to enhance user experience. Users may choose to set their web browser to refuse cookies or to alert when cookies are being sent.
        </li>
        <li className="text-gray-700">
          <strong>How We Use Collected Information:</strong> JobSwift Industries Ltd. may collect and use users personal information for the following purposes:
          <ul className="list-disc ml-6 mt-2">
            <li>To personalize user experience</li>
            <li>To improve our website</li>
            <li>To send periodic emails</li>
          </ul>
        </li>
        <li className="text-gray-700">
          <strong>Security:</strong> We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
        </li>
        <li className="text-gray-700">
          <strong>Changes to this Privacy Policy:</strong> JobSwift Industries Ltd. has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes.
        </li>
        <li className="text-gray-700">
          <strong>Your Acceptance of These Terms:</strong> By using this website, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our website.
        </li>
      </ol>

      <p className="text-gray-700 mt-4">
        For inquiries about this Privacy Policy, please contact us at [Your Contact Information].
      </p>
    </div>
  );
};

export default PrivacyPolicy;
