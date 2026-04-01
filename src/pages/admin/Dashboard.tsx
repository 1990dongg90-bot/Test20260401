import React from 'react';
import { useCMSStore } from '../../store';
import { BarChart3, Users, FileText, Activity } from 'lucide-react';

export default function Dashboard() {
  const { posts } = useCMSStore();

  const stats = [
    { name: '총 게시글', value: posts.length.toString(), icon: FileText, change: '+12%', changeType: 'positive' },
    { name: '일일 방문자', value: '1,245', icon: Users, change: '+5.4%', changeType: 'positive' },
    { name: '페이지 뷰', value: '8,432', icon: Activity, change: '-2.1%', changeType: 'negative' },
    { name: '이탈률', value: '32.1%', icon: BarChart3, change: '-1.2%', changeType: 'positive' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">대시보드</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div className="absolute bg-red-500 rounded-md p-3">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {item.change}
                </p>
              </dd>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">최근 활동</h2>
        <div className="flow-root">
          <ul className="-mb-8">
            {posts.slice(0, 5).map((post, postIdx) => (
              <li key={post.id}>
                <div className="relative pb-8">
                  {postIdx !== posts.length - 1 ? (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center ring-8 ring-white">
                        <FileText className="h-4 w-4 text-red-600" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          새 게시글 작성: <span className="font-medium text-gray-900">{post.title}</span>
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
