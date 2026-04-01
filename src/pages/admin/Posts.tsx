import React, { useState } from 'react';
import { useCMSStore, Post } from '../../store';
import { Plus, Edit2, Trash2, X, Save, FileText } from 'lucide-react';

export default function Posts() {
  const { posts, addPost, updatePost, deletePost } = useCMSStore();
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<Post>>({});

  const handleEdit = (post: Post) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleCreate = () => {
    setCurrentPost({
      title: '',
      excerpt: '',
      content: '',
      imageUrl: '',
      date: new Date().toISOString().split('T')[0],
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (currentPost.id) {
      updatePost(currentPost.id, currentPost);
    } else {
      addPost({
        ...currentPost,
        id: Date.now().toString(),
      } as Post);
    }
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('정말 이 게시글을 삭제하시겠습니까?')) {
      deletePost(id);
    }
  };

  if (isEditing) {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentPost.id ? '게시글 수정' : '새 게시글 작성'}
          </h2>
          <button
            onClick={() => setIsEditing(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">제목</label>
            <input
              type="text"
              value={currentPost.title || ''}
              onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">요약 (Excerpt)</label>
            <textarea
              rows={2}
              value={currentPost.excerpt || ''}
              onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">대표 이미지 URL</label>
            <input
              type="text"
              value={currentPost.imageUrl || ''}
              onChange={(e) => setCurrentPost({ ...currentPost, imageUrl: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">본문 내용</label>
            <textarea
              rows={10}
              value={currentPost.content || ''}
              onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border font-mono"
            />
          </div>

          <div className="flex justify-end pt-6 border-t">
            <button
              onClick={() => setIsEditing(false)}
              className="mr-4 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              취소
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <Save className="w-4 h-4" />
              저장하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">게시글 관리</h1>
          <p className="mt-2 text-sm text-gray-700">
            커뮤니티 및 뉴스 게시판에 표시될 모든 게시글을 관리합니다.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
          >
            <Plus className="w-4 h-4" />
            새 게시글 작성
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {posts.map((post) => (
            <li key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center min-w-0 gap-6">
                  <div className="flex-shrink-0 h-16 w-16 rounded-lg overflow-hidden bg-gray-100">
                    {post.imageUrl ? (
                      <img src={post.imageUrl} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-gray-400">
                        <FileText className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-red-600 truncate">{post.date}</p>
                    <p className="text-lg font-bold text-gray-900 truncate mt-1">{post.title}</p>
                    <p className="text-sm text-gray-500 truncate mt-1">{post.excerpt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-6 flex-shrink-0">
                  <button
                    onClick={() => handleEdit(post)}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    title="수정"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    title="삭제"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="p-12 text-center text-gray-500">
              등록된 게시글이 없습니다.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
