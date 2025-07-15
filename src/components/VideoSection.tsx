import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See WhatsApp Extractor in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI-powered Chrome extension transforms your WhatsApp Web experience in just minutes.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#874EFF] to-[#C83FFF] rounded-3xl p-2 shadow-2xl">
            <div className="bg-black rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#874EFF]/20 to-[#C83FFF]/20"></div>
              <button className="relative z-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all duration-300 group">
                <Play className="h-12 w-12 text-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
              <div className="absolute bottom-4 left-4 text-white/80 text-sm">
                🎬 Demo Video Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;