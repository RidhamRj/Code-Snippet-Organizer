import React from 'react'
import { motion } from 'framer-motion'
import folderImg from '../Images/Dash_Folder.png'
import snipImg from '../Images/Dash_Snip.png'

function Features() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-10 pb-16 md:py-24 relative">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 mx-auto max-w-[200px]"
        />
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Primary Features
        </motion.h2>

        <FeatureItem
          title="Create and Manage Folders"
          description="Easily structure your codebase with folders and files or create new ones directly within the app."
          image={folderImg}
          imageAlt="image of our folder creating feature"
          reverse={false}
        />

        <FeatureItem
          title="Import Code Snippets"
          description="Capture and store code snippets as images, perfect for snippets from books, presentations, or handwritten notes."
          image={snipImg}
          imageAlt="image of our code snippet import feature"
          reverse={true}
        />
      </div>
    </section>
  )
}

function FeatureItem({ title, description, image, imageAlt, reverse }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between mb-24 last:mb-0`}
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h3 className="text-4xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
      <div className="md:w-1/2">
        <motion.img 
          src={image} 
          alt={imageAlt}
          className="w-full h-auto max-h-[380px] object-contain rounded-lg shadow-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default Features
