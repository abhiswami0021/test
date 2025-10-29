import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const Blogs = () => {
  const blogPosts: BlogPost[] = [
    {
      title: 'The Future of AI in Enterprise Software Development',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and deploy enterprise applications, from automated testing to intelligent code generation.',
      date: 'Oct 10, 2025',
      category: 'AI & Technology',
      readTime: '5 min read',
    },
    {
      title: 'Building Secure Cloud Infrastructure: Best Practices',
      excerpt: 'Learn essential security strategies for cloud deployment, including identity management, encryption, and compliance standards for modern applications.',
      date: 'Oct 8, 2025',
      category: 'Cloud Security',
      readTime: '7 min read',
    },
    {
      title: 'Mobile-First Design: Creating Exceptional User Experiences',
      excerpt: 'Discover the principles of mobile-first design and how to create responsive applications that delight users across all devices and screen sizes.',
      date: 'Oct 5, 2025',
      category: 'UI/UX Design',
      readTime: '6 min read',
    },
  ];

  return (
    <section id="blogs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-black bg-white px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>

                  <button className="flex items-center text-black font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#all-blogs"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
