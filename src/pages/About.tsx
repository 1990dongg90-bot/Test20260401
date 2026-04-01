import React from 'react';
import { useCMSStore } from '../store';
import { motion } from 'framer-motion';

export default function About() {
  const { content, settings } = useCMSStore();

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">회사소개</h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: settings.primaryColor }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.aboutText}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80"
              alt="Maximator Facility"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">글로벌 고압 기술의 리더</h2>
            <p className="text-gray-600 leading-relaxed">
              멕시메이터는 고압, 테스트, 유압 및 공압 시스템 분야의 선도적인 공급업체입니다. 
              우리의 시스템은 전 세계의 다양한 산업 분야에서 사용되며, 최고의 품질과 신뢰성을 자랑합니다.
            </p>
            <ul className="space-y-4">
              {[
                '최대 15,000 bar의 고압 컴포넌트',
                '액체 및 가스용 압력 생성 시스템',
                '수소 애플리케이션을 위한 혁신적인 제품',
                '전 세계적인 서비스 및 지원 네트워크'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: settings.primaryColor }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
