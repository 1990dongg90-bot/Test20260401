import React from 'react';
import { useCMSStore } from '../store';
import { motion } from 'framer-motion';
import { Factory, Car, FlaskConical, Zap, Plane, HardHat } from 'lucide-react';

export default function Industries() {
  const { settings } = useCMSStore();

  const industries = [
    { name: '대체 에너지 (수소)', icon: Zap, desc: '수소 압축 및 충전 시스템' },
    { name: '자동차 산업', icon: Car, desc: '부품 테스트 및 생산 라인 솔루션' },
    { name: '화학 산업', icon: FlaskConical, desc: '고압 화학 공정 및 반응기' },
    { name: '항공우주', icon: Plane, desc: '항공기 부품 압력 테스트' },
    { name: '엔지니어링', icon: Factory, desc: '맞춤형 고압 시스템 설계' },
    { name: '오일 및 가스', icon: HardHat, desc: '해양 및 육상 시추 장비 테스트' },
  ];

  return (
    <div className="bg-gray-50 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">산업분야</h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: settings.primaryColor }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            멕시메이터의 고압 솔루션은 전 세계 다양한 산업 분야에서 핵심적인 역할을 수행하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors"
                  style={{ backgroundColor: `${settings.primaryColor}15`, color: settings.primaryColor }}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600">
                  {industry.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
