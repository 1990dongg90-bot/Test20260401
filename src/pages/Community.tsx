import React from 'react';
import { useCMSStore } from '../store';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Community() {
  const { posts, settings } = useCMSStore();

  return (
    <div className="bg-gray-50 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">커뮤니티</h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: settings.primaryColor }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            멕시메이터의 최신 소식, 기술 자료 및 이벤트 정보를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group flex flex-col h-full"
            >
              <Link to={`/community/${post.id}`} className="block flex-1">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-medium" style={{ color: settings.primaryColor }}>
                    자세히 보기 <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full text-center py-24 text-gray-500 text-lg">
              등록된 소식이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
