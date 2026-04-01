import React, { useState } from 'react';
import { useCMSStore, SiteSettings, PageContent } from '../../store';
import { Save } from 'lucide-react';

export default function Settings() {
  const { settings, content, updateSettings, updateContent } = useCMSStore();
  
  const [localSettings, setLocalSettings] = useState<SiteSettings>(settings);
  const [localContent, setLocalContent] = useState<PageContent>(content);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    updateSettings(localSettings);
    updateContent(localContent);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">사이트 설정</h1>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          <Save className="w-4 h-4" />
          저장하기
        </button>
      </div>

      {isSaved && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md border border-green-200">
          설정이 성공적으로 저장되었습니다.
        </div>
      )}

      <div className="space-y-8">
        {/* 기본 설정 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-4">기본 설정</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">사이트 이름</label>
              <input
                type="text"
                value={localSettings.siteName}
                onChange={(e) => setLocalSettings({ ...localSettings, siteName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">로고 URL</label>
              <input
                type="text"
                value={localSettings.logoUrl}
                onChange={(e) => setLocalSettings({ ...localSettings, logoUrl: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
              />
            </div>
          </div>
        </div>

        {/* 디자인 설정 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-4">디자인 설정</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">주요 색상 (Primary)</label>
              <div className="mt-1 flex items-center gap-3">
                <input
                  type="color"
                  value={localSettings.primaryColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, primaryColor: e.target.value })}
                  className="h-8 w-8 rounded border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={localSettings.primaryColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, primaryColor: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">보조 색상 (Secondary)</label>
              <div className="mt-1 flex items-center gap-3">
                <input
                  type="color"
                  value={localSettings.secondaryColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, secondaryColor: e.target.value })}
                  className="h-8 w-8 rounded border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={localSettings.secondaryColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, secondaryColor: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">글꼴 (Font Family)</label>
              <select
                value={localSettings.fontFamily}
                onChange={(e) => setLocalSettings({ ...localSettings, fontFamily: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
              >
                <option value="Inter, sans-serif">Inter (기본)</option>
                <option value="'Noto Sans KR', sans-serif">Noto Sans KR</option>
                <option value="'Pretendard', sans-serif">Pretendard</option>
                <option value="serif">Serif</option>
              </select>
            </div>
          </div>
        </div>

        {/* 메인 페이지 콘텐츠 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-4">메인 페이지 콘텐츠</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">히어로 섹션 제목</label>
              <input
                type="text"
                value={localContent.heroTitle}
                onChange={(e) => setLocalContent({ ...localContent, heroTitle: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">히어로 섹션 부제목</label>
              <textarea
                rows={2}
                value={localContent.heroSubtitle}
                onChange={(e) => setLocalContent({ ...localContent, heroSubtitle: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">히어로 섹션 배경 이미지 URL</label>
              <input
                type="text"
                value={localContent.heroImage}
                onChange={(e) => setLocalContent({ ...localContent, heroImage: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
              />
            </div>
          </div>
        </div>

        {/* SEO 설정 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-4">SEO 설정</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">메타 타이틀 (Meta Title)</label>
              <input
                type="text"
                value={localSettings.seoTitle}
                onChange={(e) => setLocalSettings({ ...localSettings, seoTitle: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">메타 설명 (Meta Description)</label>
              <textarea
                rows={3}
                value={localSettings.seoDescription}
                onChange={(e) => setLocalSettings({ ...localSettings, seoDescription: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
