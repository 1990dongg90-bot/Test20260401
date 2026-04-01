import React from 'react';
import { useCMSStore } from '../store';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Support() {
  const { settings } = useCMSStore();

  const contactInfo = [
    { icon: Phone, title: '전화 문의', detail: '02-1234-5678', sub: '평일 09:00 - 18:00' },
    { icon: Mail, title: '이메일 문의', detail: 'info@maximator.co.kr', sub: '24시간 접수 가능' },
    { icon: MapPin, title: '오시는 길', detail: '서울특별시 강남구 테헤란로 123', sub: '멕시메이터코리아(주) 본사' },
    { icon: Clock, title: '운영 시간', detail: '월요일 - 금요일', sub: '오전 9시 - 오후 6시 (주말/공휴일 휴무)' },
  ];

  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">고객지원</h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: settings.primaryColor }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            제품 문의, 기술 지원 및 AS 접수 등 궁금하신 점을 해결해 드립니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${settings.primaryColor}15`, color: settings.primaryColor }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg text-gray-700 font-medium">{info.detail}</p>
                  <p className="text-sm text-gray-500 mt-1">{info.sub}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
