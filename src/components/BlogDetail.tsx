import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, User, Calendar, Tag, X } from 'lucide-react';
import BlogHeader from './BlogHeader';
import Footer from './Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of WhatsApp Communication: Why Chat Extraction Matters',
    excerpt: 'Discover how WhatsApp Extractor is revolutionizing the way businesses and individuals manage their chat data.',
    content: `
      <p>WhatsApp has become the backbone of digital communication for billions of people worldwide. From personal conversations to business negotiations, the platform holds a treasure trove of valuable information. However, accessing and managing this data has always been a challenge.</p>
      
      <p>Our WhatsApp Extractor tool addresses this fundamental need by providing a secure, efficient way to extract and organize your chat history. Whether you're a business looking to analyze customer conversations or an individual wanting to preserve important memories, our solution makes it simple and secure.</p>
      
      <h2>Key Benefits of Chat Extraction</h2>
      <ul>
        <li><strong>Data Preservation:</strong> Keep your important conversations safe from accidental deletion or device loss</li>
        <li><strong>Business Intelligence:</strong> Analyze customer interactions to improve services and support</li>
        <li><strong>Legal Compliance:</strong> Maintain records for regulatory requirements in various industries</li>
        <li><strong>Personal Archive:</strong> Create a searchable archive of your most meaningful conversations</li>
      </ul>
      
      <h2>Security First Approach</h2>
      <p>We understand that your chat data is sensitive. That's why our extraction process is designed with privacy and security as top priorities. All data processing happens locally on your device, and we never store or access your personal information.</p>
      
      <p>The future of WhatsApp communication is about having control over your data while maintaining the highest security standards. Join thousands of users who have already discovered the power of organized, accessible chat history.</p>
    `,
    image: '/api/placeholder/800/400',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Technology',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: '2',
    title: 'Privacy-First Data Extraction: How We Keep Your Chats Secure',
    excerpt: 'Learn about our advanced security measures and why your privacy is our top priority.',
    content: `
      <p>In today's digital landscape, privacy isn't just a feature—it's a fundamental right. When it comes to extracting your WhatsApp chat data, we've built our entire system around protecting your personal information.</p>
      
      <h2>Local Processing Only</h2>
      <p>Unlike cloud-based solutions that upload your data to remote servers, our WhatsApp Extractor processes everything locally on your device. This means:</p>
      <ul>
        <li>Your chat data never leaves your device</li>
        <li>No third-party servers have access to your conversations</li>
        <li>Complete control over your data at all times</li>
      </ul>
      
      <h2>Advanced Encryption</h2>
      <p>Every step of the extraction process uses industry-standard encryption protocols. From the moment you start the extraction to when you export your data, everything is protected with military-grade security.</p>
      
      <h2>Zero Data Retention</h2>
      <p>We don't store, log, or retain any of your chat data. Once the extraction is complete, all temporary files are securely deleted from our system. Your privacy is maintained throughout the entire process.</p>
      
      <h2>Transparent Process</h2>
      <p>We believe in complete transparency. Our extraction process is open-source, allowing security experts to verify our privacy claims. You can trust that what we say about security is what we actually deliver.</p>
    `,
    image: '/api/placeholder/800/400',
    author: 'Michael Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Privacy',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: '3',
    title: 'From Chaos to Clarity: Organizing Your WhatsApp History',
    excerpt: 'Transform your scattered chat history into a well-organized, searchable archive.',
    content: `
      <p>If you've ever tried to find a specific message in your WhatsApp chat history, you know how frustrating it can be. Scrolling through months or years of conversations, trying to remember which group or contact shared that important piece of information.</p>
      
      <h2>The Challenge of Unorganized Data</h2>
      <p>WhatsApp's built-in search is limited. It can find messages, but it can't help you understand patterns, categorize conversations, or export data in useful formats. This is where our extraction and organization tools shine.</p>
      
      <h2>Smart Categorization</h2>
      <p>Our system automatically categorizes your chats based on:</p>
      <ul>
        <li>Contact types (personal, business, groups)</li>
        <li>Message frequency and importance</li>
        <li>Content types (text, media, documents)</li>
        <li>Time periods and conversation threads</li>
      </ul>
      
      <h2>Advanced Search Capabilities</h2>
      <p>Once your data is extracted and organized, you can:</p>
      <ul>
        <li>Search across all conversations simultaneously</li>
        <li>Filter by date ranges, contacts, or content types</li>
        <li>Create custom tags and categories</li>
        <li>Export specific conversations or data subsets</li>
      </ul>
      
      <h2>Multiple Export Formats</h2>
      <p>Whether you need your data in PDF format for legal purposes, Excel for analysis, or JSON for technical integration, our tool supports multiple export formats to meet your specific needs.</p>
      
      <p>Transform your WhatsApp chaos into organized clarity. Start your journey to better data management today.</p>
    `,
    image: '/api/placeholder/800/400',
    author: 'Emma Rodriguez',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Productivity',
    gradient: 'from-green-500 to-emerald-500'
  }
];

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  
  const blog = blogPosts.find(post => post.id === id);

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

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <BlogHeader onJoinWaitlist={handleJoinWaitlist} />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <BlogHeader onJoinWaitlist={handleJoinWaitlist} />

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${blog.gradient} opacity-90`} />
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        
        {/* Blog Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium mb-4">
              <Tag className="h-4 w-4 mr-1" />
              {blog.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl text-white opacity-90 mb-6">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{new Date(blog.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of users who have already discovered the power of organized WhatsApp data.
            </p>
            <button
              onClick={handleJoinWaitlist}
              className="inline-flex items-center px-8 py-3 bg-white text-[#874EFF] rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>

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

export default BlogDetail;