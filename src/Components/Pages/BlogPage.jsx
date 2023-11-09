import { Helmet } from "react-helmet";


const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Access Tokens and Refresh Tokens',
      content: 'Access tokens and refresh tokens are authentication mechanisms...',
    },
    {
      id: 2,
      title: 'Exploring Express.js and Nest.js',
      content: 'Express.js is a minimalist web framework for Node.js...',
    },
    {
      id: 3,
      title: 'Explaining Code in Your Project',
      content: 'When it comes to explaining code, clarity and documentation are key...',
    },

  ];

  return (

    <div className="bg-gray-100 min-h-screen p-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs | JobSwift</title>
      </Helmet>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Blog Page</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
