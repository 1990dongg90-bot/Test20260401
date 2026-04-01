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

export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
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
    heroTitle: '최고의 기술력으로 완성하는 고압 솔루션',
    heroSubtitle: '가스부스터, 펌프, 증압기 분야의 글로벌 리더 멕시메이터코리아(주)입니다.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    aboutText: '멕시메이터코리아(주)는 독일 엔지니어링 기술을 바탕으로 고압 기술, 유압 및 공압 시스템을 선도하는 기업입니다. 고객의 성공적인 비즈니스를 위해 최적의 솔루션을 제공합니다.',
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
