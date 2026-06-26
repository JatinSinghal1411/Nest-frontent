import React from 'react';
import { blogPosts } from '../data';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-primary dark:text-white mb-12 text-center">The Journal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="rounded-[30px] overflow-hidden mb-6 h-[250px] relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold">
                {post.date}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-primary dark:text-white mb-3 group-hover:text-accentGold transition-colors">
              {post.title}
            </h2>
            <p className="text-secondary dark:text-gray-400 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center text-primary dark:text-white font-bold gap-2">
              Read More <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
