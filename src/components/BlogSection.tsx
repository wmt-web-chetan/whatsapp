import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const BlogSection: React.FC = () => {
  const [blogRef, blogInView] = useIntersectionObserver();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: "1",
      title: "The Future of WhatsApp Communication: Why Chat Extraction Matters",
      excerpt: "Discover how WhatsApp Extractor is revolutionizing the way businesses and individuals manage their chat data.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sarah Johnson",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "2",
      title: "Privacy-First Data Extraction: How We Keep Your Chats Secure",
      excerpt: "Learn about our advanced security measures and why your privacy is our top priority.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Chen",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      category: "Privacy",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "3",
      title: "From Chaos to Clarity: Organizing Your WhatsApp History",
      excerpt: "Transform your scattered chat history into a well-organized, searchable archive.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Emma Rodriguez",
      date: "Jan 5, 2024",
      readTime: "7 min read",
      category: "Productivity",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const handleBlogClick = (id: string) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="blog" 
      ref={blogRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-[#874EFF] mr-3" />
            <span className="bg-[#874EFF]/10 text-[#874EFF] px-4 py-2 rounded-full text-sm font-semibold">
              Latest Insights
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            From Our{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Blog: Tips & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights on productivity, AI technology, and real-world use cases
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              onClick={() => handleBlogClick(post.id)}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden cursor-pointer group ${
                blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-56 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#874EFF] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 mb-4 gap-2 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="truncate">{post.date}</span>
                    </div>
                  </div>
                  <span className="font-medium">{post.readTime}</span>
                </div>

                {/* Read More */}
                <button className="flex items-center gap-2 text-[#874EFF] font-semibold hover:gap-3 transition-all duration-300 group/btn">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts */}
        <div className={`text-center mt-16 transition-all duration-1000 ${blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <button 
            onClick={() => console.log('Navigate to all blog posts')}
            className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;