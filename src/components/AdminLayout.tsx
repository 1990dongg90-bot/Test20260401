import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useCMSStore } from '../store';
import { LayoutDashboard, FileText, Settings, LogOut, ArrowLeft } from 'lucide-react';

export default function AdminLayout() {
  const { settings } = useCMSStore();
  const location = useLocation();

  const navItems = [
    { name: '대시보드', path: '/admin', icon: LayoutDashboard },
    { name: '게시글 관리', path: '/admin/posts', icon: FileText },
    { name: '사이트 설정', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row" style={{ fontFamily: settings.fontFamily }}>
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-900 text-white flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: settings.primaryColor }}>
            관리자 패널
          </h2>
          <p className="text-gray-400 text-sm mt-1">{settings.siteName}</p>
        </div>
        <nav className="mt-6 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 w-full md:w-64 p-4 border-t border-gray-800">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            사이트로 돌아가기
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
