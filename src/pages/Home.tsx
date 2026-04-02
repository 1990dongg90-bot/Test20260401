import React, { useState, useEffect, useRef } from 'react';
import { useCMSStore } from '../store';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Factory, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { settings, content, posts } = useCMSStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides = content.heroSlides || [];

  useEffect(() => {
    if (isPaused || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const features = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: '독일 엔지니어링',
      description: '최고 수준의 기술력으로 완성된 고압 시스템',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: '안전성 보장',
      description: '엄격한 품질 관리를 통한 완벽한 안전성',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '고효율 솔루션',
      description: '에너지 절감 및 생산성 향상을 위한 최적화',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slides[currentIndex]?.imageUrl}
              alt={slides[currentIndex]?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                {slides[currentIndex]?.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
                {slides[currentIndex]?.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              왜 멕시메이터인가?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              수십 년의 경험과 노하우로 최고의 고압 솔루션을 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${settings.primaryColor}15`, color: settings.primaryColor }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">최신 소식</h2>
              <p className="mt-2 text-gray-600">멕시메이터의 새로운 소식과 기술 동향을 확인하세요.</p>
            </div>
            <Link
              to="/community"
              className="hidden sm:flex items-center text-sm font-medium hover:underline"
              style={{ color: settings.primaryColor }}
            >
              모든 소식 보기
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.id} to={`/community/${post.id}`} className="group block">
                <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
