import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useCMSStore } from '../store';
import { Menu, X, Settings } from 'lucide-react';

export default function Layout() {
  const { settings } = useCMSStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: '회사소개', path: '/about' },
    { name: '산업분야', path: '/industries' },
    { name: '제품소개', path: '/products' },
    { name: '커뮤니티', path: '/community' },
    { name: '고객지원', path: '/support' },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: settings.fontFamily }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={settings.logoUrl}
                  alt={settings.siteName}
                  className="h-[38px] w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-2xl font-bold tracking-tighter" style={{ color: settings.primaryColor }}>
                  MAXIMATOR
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                  style={{ '--tw-text-opacity': 1, ':hover': { color: settings.primaryColor } } as React.CSSProperties}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Admin Link & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Link
                to="/admin"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Settings className="w-4 h-4" />
                관리자
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admin"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                관리자 대시보드
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: settings.primaryColor }}>
              {settings.siteName}
            </h3>
            <p className="text-gray-400 max-w-sm">
              독일 엔지니어링 기술을 바탕으로 고압 기술, 유압 및 공압 시스템을 선도하는 기업입니다.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400">
              <li>이메일: info@maximator.co.kr</li>
              <li>전화: 02-1234-5678</li>
              <li>주소: 서울특별시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {settings.siteName}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
