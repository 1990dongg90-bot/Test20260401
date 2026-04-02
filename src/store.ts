import { create } from 'zustand';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
}

export interface SiteSettings {
  siteName: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  logoUrl: string;
  seoTitle: string;
  seoDescription: string;
}

export interface HeroSlide {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

export interface PageContent {
  heroSlides: HeroSlide[];
  aboutText: string;
}

interface CMSState {
  settings: SiteSettings;
  content: PageContent;
  posts: Post[];
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  updateContent: (newContent: Partial<PageContent>) => void;
  addPost: (post: Post) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
}

export const useCMSStore = create<CMSState>((set) => ({
  settings: {
    siteName: '멕시메이터코리아(주)',
    primaryColor: '#e3000f', // Maximator Red
    secondaryColor: '#1a1a1a', // Dark Gray/Black
    fontFamily: 'Inter, sans-serif',
    logoUrl: 'https://eportal.maximator.de/media/logo/websites/1/MAX-Logo-mit-claim-rot.png',
    seoTitle: '멕시메이터코리아(주) - 고압 솔루션 전문 기업',
    seoDescription: '가스부스터, 펌프, 증압기 등 최고 수준의 고압 솔루션을 제공합니다.',
  },
  content: {
    heroSlides: [
      {
        id: '1',
        imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80', // 첨부해주신 이미지는 관리자 페이지에서 직접 등록해주세요!
        title: 'Valve, Fitting and Tubing',
        description: '최대 10500bar',
      },
      {
        id: '2',
        imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
        title: 'High Pressure Pumps',
        description: '공기 구동식 고압 펌프',
      },
      {
        id: '3',
        imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80',
        title: 'Gas Boosters',
        description: '무급유 가스 부스터 시스템',
      },
      {
        id: '4',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
        title: 'Hydrogen Compressors',
        description: '수소 충전소용 고효율 압축기',
      },
      {
        id: '5',
        imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80',
        title: 'Customized Solutions',
        description: '고객 맞춤형 고압 시스템 설계',
      },
      {
        id: '6',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
        title: 'Global Service',
        description: '전 세계적인 서비스 및 기술 지원',
      },
    ],
    aboutText: '당사는 독일 MAXIMATOR GmbH와 싱가포르 MAXIMATOR FAR EAST의 한국 법인으로서, 고압 펌프, 가스 부스터, 밸브(V.F.T), 테스트 장비 등 검증된 품질의 제품을 국내 엔지니어링 기업 및 산업 현장에 공급하고 있습니다.\n\n신뢰할 수 있는 기술력을 바탕으로 고객에게 최적화된 시스템과 서비스를 제공하며, 끊임없이 최신 선진 기술을 발굴하여 고객의 성공적인 비즈니스를 돕는 든든한 파트너가 되겠습니다.',
  },
  posts: [
    {
      id: '1',
      title: '신제품 HULC 수소 압축기 출시',
      excerpt: '최대 1,050 bar 압력을 지원하는 모듈형 수소 압축기 HULC가 새롭게 출시되었습니다.',
      content: '상세 내용...',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
      date: '2026-03-15',
    },
    {
      id: '2',
      title: '2026 고압 기술 세미나 개최 안내',
      excerpt: '최신 고압 기술 동향과 멕시메이터의 혁신적인 솔루션을 소개하는 세미나에 초대합니다.',
      content: '상세 내용...',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      date: '2026-03-01',
    },
  ],
  updateSettings: (newSettings) => set((state) => ({ settings: { ...state.settings, ...newSettings } })),
  updateContent: (newContent) => set((state) => ({ content: { ...state.content, ...newContent } })),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  updatePost: (id, updatedPost) => set((state) => ({
    posts: state.posts.map((post) => post.id === id ? { ...post, ...updatedPost } : post)
  })),
  deletePost: (id) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
}));
