import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, BookOpen, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import BlogHeader from './BlogHeader';
import Footer from './Footer';

const BlogPage: React.FC = () => {
  const [blogRef, blogInView] = useIntersectionObserver();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const allBlogPosts = [
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
    },
    {
      id: "4",
      title: "AI-Powered Chat Analysis: Understanding Your Communication Patterns",
      excerpt: "Leverage artificial intelligence to gain insights into your communication habits and improve your interactions.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "David Kim",
      date: "Dec 28, 2023",
      readTime: "5 min read",
      category: "AI",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: "5",
      title: "Building Better Teams Through Chat Analytics",
      excerpt: "Learn how team leaders are using WhatsApp data to improve collaboration and communication efficiency.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Lisa Park",
      date: "Dec 20, 2023",
      readTime: "9 min read",
      category: "Business",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: "6",
      title: "The Complete Guide to WhatsApp Business Integration",
      excerpt: "Everything you need to know about integrating WhatsApp data into your business workflow.",
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "James Wilson",
      date: "Dec 15, 2023",
      readTime: "12 min read",
      category: "Integration",
      gradient: "from-teal-500 to-green-500"
    },
    {
      id: "7",
      title: "Data Export Made Simple: Formats and Best Practices",
      excerpt: "Understand the different export formats available and when to use each one for maximum efficiency.",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Rachel Thompson",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "Tutorial",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: "8",
      title: "Automating Customer Support with WhatsApp Insights",
      excerpt: "Discover how businesses are using chat analysis to improve their customer support processes.",
      image: "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Alex Martinez",
      date: "Dec 5, 2023",
      readTime: "8 min read",
      category: "Automation",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: "9",
      title: "Security Best Practices for Chat Data Management",
      excerpt: "Essential security measures every organization should implement when handling chat data.",
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Nina Roberts",
      date: "Nov 30, 2023",
      readTime: "10 min read",
      category: "Security",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: "10",
      title: "The Evolution of Digital Communication in 2024",
      excerpt: "Exploring trends and predictions for how digital communication will continue to evolve this year.",
      image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Tom Anderson",
      date: "Nov 25, 2023",
      readTime: "7 min read",
      category: "Trends",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const handleBlogClick = (id: string) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJoinWaitlist = () => {
    setShowModal(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    setShowModal(false);
    alert('Thank you for joining our waitlist!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <BlogHeader onJoinWaitlist={handleJoinWaitlist} />
      
      {/* Hero Section with Image */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] opacity-90" />
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Blog Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="h-8 w-8 text-white mr-3" />
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                All Posts
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Expert Insights & Tips
            </h1>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the latest trends, tutorials, and best practices for WhatsApp communication and data management
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section 
        ref={blogRef}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allBlogPosts.map((post, index) => (
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
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl transform animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">🚀 Join Our Waitlist</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Be among the first to experience the future of WhatsApp communication. 
              Get early access and exclusive updates!
            </p>
            <form onSubmit={handleModalSubmit} className="space-y-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#874EFF] focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                🎯 Secure My Spot
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;