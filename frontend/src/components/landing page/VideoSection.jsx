import React from 'react';
import { motion } from 'framer-motion';
import Dashboard from '../Images/Dash_Snip.png';
import Dashvideo from '../Images/video.mp4';

function VideoSection() {
  console.log('Video src:', Dashvideo);
  console.log('Poster src:', Dashboard);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Watch CodeVault in Action</h2>
          <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            See how CodeVault can revolutionize your code snippet management and boost your productivity.
          </p>
        </motion.div>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-2xl">
            <video 
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              poster={Dashboard}
              onError={(e) => console.error('Video error:', e)}
            >
              <source src={Dashvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoSection;