import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../assets/logoff.svg";

interface BlogHeaderProps {
  onJoinWaitlist: () => void;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ onJoinWaitlist }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={handleHomeClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={img} alt="icon" width={50}/>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              WhatsApp Extractor
            </span>
          </button>
          
          <div className="flex items-center">
            <button
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogHeader;