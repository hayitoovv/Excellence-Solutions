import { useState } from 'react';
import { Monitor, Smartphone, Shield, Cloud, Filter, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { useLayoutEffect } from 'react';
type Category = 'All' | 'Web' | 'Mobile' | 'Systems' | 'Security';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  image: string;
  metric?: string;
  icon: React.ReactNode;
}

export function OurProjects() {
 useLayoutEffect(() => {
    window.scrollTo(0, 0); // ⚡ Darhol yuqoriga
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Tijorat Platformasi',
      description: 'Zamonaviy onlayn do\'kon uchun to\'liq funksional veb-platforma. Buyurtmalarni boshqarish, to\'lov tizimlari va analitika.',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjUxNjk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metric: '+40% savdo',
      icon: <Monitor className="size-4" />
    },
    {
      id: 2,
      title: 'Mobil Bank Ilovasi',
      description: 'Xavfsiz va qulay mobil bank dasturi. Tezkor to\'lovlar, hisoblarni boshqarish va biometrik autentifikatsiya.',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MjIwODE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      metric: '50,000+ foydalanuvchi',
      icon: <Smartphone className="size-4" />
    },
    {
      id: 3,
      title: 'Korporativ Kiberhavfsizlik',
      description: 'Keng ko\'lamli kiberhavfsizlik yechimi. Tarmoq monitoringi, xavflarni aniqlash va real vaqtda himoya.',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjUxNjIwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metric: '99.9% himoya',
      icon: <Shield className="size-4" />
    },
    {
      id: 4,
      title: 'Bulutli Infratuzilma',
      description: 'Yuqori samarali bulutli yechimlari. Avtomatik masshtablanish, zaxiralash va yukni taqsimlash.',
      category: 'Systems',
      image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MTY3OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      metric: '99% ishonchlilik',
      icon: <Cloud className="size-4" />
    },
    {
      id: 5,
      title: 'CRM Tizimi',
      description: 'Mijozlar bilan munosabatlarni boshqarish tizimi. Savdo voronkasi, analitika va avtomatlashtirish.',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjUxNjk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metric: '60+ mijoz',
      icon: <Monitor className="size-4" />
    },
    {
      id: 6,
      title: 'Mobil O\'quv Platformasi',
      description: 'Ta\'lim uchun interaktiv mobil ilova. Video darslar, testlar va o\'quvchilar uchun shaxsiy kabinet.',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MjIwODE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    }
  ];

  const categories: { name: Category; icon: React.ReactNode }[] = [
    { name: 'All', icon: <Filter className="size-4" /> },
    { name: 'Web', icon: <Monitor className="size-4" /> },
    { name: 'Mobile', icon: <Smartphone className="size-4" /> },
    { name: 'Systems', icon: <Cloud className="size-4" /> },
    { name: 'Security', icon: <Shield className="size-4" /> }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  return (
    <div id="projects-section" className="min-h-screen bg-[#F8FAFC]">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#00A651" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="#00A651" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="#00A651" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="#00A651" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-pattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00A651] to-[#008a44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">Bizning Loyihalarimiz</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Biznesingizni innovatsion texnologiyalar orqali rivojlantiring
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F8FAFC]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="size-5 text-[#00A651]" />
            <span className="text-[#1E293B]">Loyihalarni filtrlash:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setVisibleProjects(6);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-[#00A651] text-white shadow-md'
                    : 'bg-gray-100 text-[#1E293B] hover:bg-gray-200'
                }`}
              >
                {cat.icon}
                <span>{cat.name === 'All' ? 'Barchasi' : cat.name === 'Systems' ? 'Tizimlar' : cat.name === 'Security' ? 'Xavfsizlik' : cat.name}</span>
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {filteredProjects.length} ta loyiha topildi
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="text-center mb-16">
            <button
              onClick={() => setVisibleProjects(prev => prev + 3)}
              className="bg-white text-[#00A651] border-2 border-[#00A651] px-8 py-4 rounded-lg hover:bg-[#00A651] hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Ko&apos;proq loyihalar yuklash
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      {/* <section className="bg-[#1E293B] text-white py-16"> */}
     <section style={{ backgroundColor: '#1E293B' }} className="text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-4">Keling, birgalikda yarataylik!</h2>
              <p className="text-lg text-gray-300 mb-6">
                Sizning loyihangizni muhokama qilish va professional IT yechimlari bilan tanishish uchun biz bilan bog&apos;laning.
              </p>
              <button className="bg-[#00A651] text-white px-8 py-4 rounded-lg hover:bg-[#008a44] transition-all shadow-lg inline-flex items-center gap-2 group">
                Aloqaga chiqish
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-lg">
                <Phone className="size-6 text-[#00A651] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Telefon</div>
                  <div className="text-lg">+998 71 123 45 67</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-lg">
                <Mail className="size-6 text-[#00A651] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-lg">info@excellenceslutions.uz</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-lg">
                <MapPin className="size-6 text-[#00A651] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Manzil</div>
                  <div className="text-lg">Toshkent, Amir Temur ko&apos;chasi 108</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1419] text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Excellence Solutions. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
}
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

