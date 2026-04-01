import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCMSStore } from '../store';
import { ArrowLeft } from 'lucide-react';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { posts, settings } = useCMSStore();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">게시글을 찾을 수 없습니다.</h2>
          <Link to="/community" className="text-red-600 hover:underline">
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/community"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          목록으로 돌아가기
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {post.imageUrl && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-red">
            {/* In a real app, this would render markdown or HTML */}
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-800 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
