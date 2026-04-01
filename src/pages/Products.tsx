import React from 'react';
import { useCMSStore } from '../store';
import { motion } from 'framer-motion';

export default function Products() {
  const { settings } = useCMSStore();

  const products = [
    {
      name: '고압 펌프 (High Pressure Pumps)',
      desc: '액체 가압을 위한 공기 구동식 고압 펌프',
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    },
    {
      name: '가스 부스터 (Gas Boosters)',
      desc: '다양한 가스 압축을 위한 무급유 가스 부스터',
      img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80',
    },
    {
      name: '밸브 및 피팅 (Valves & Fittings)',
      desc: '최대 15,000 bar를 견디는 초고압 밸브 및 튜빙 시스템',
      img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80',
    },
    {
      name: '수소 압축기 (Hydrogen Compressors)',
      desc: '수소 충전소 및 모빌리티를 위한 고효율 압축 시스템',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">제품소개</h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: settings.primaryColor }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            멕시메이터의 혁신적이고 신뢰할 수 있는 고압 컴포넌트 및 시스템을 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <span className="text-white font-medium flex items-center gap-2">
                    자세히 보기 <span className="text-xl">→</span>
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-lg text-gray-600">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
