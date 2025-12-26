import { useState } from 'react';
import { Monitor, Smartphone, Shield, Cloud, Filter, ArrowRight, Phone, Mail, Bot } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { useLayoutEffect } from 'react';
type Category = 'All' | 'Web' | 'Mobile' | 'Systems' | 'AI / Robot';

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
      title: 'Korxona rahbari virtual qabulxonasi',
      description: 'DASTUR IMKONIYATLARI: Virtual murojaatlarni qabul qilish va tasdiq xabarini uzatish Virtual qabulxona nazoratchisi kabineti mavjudligi Murojaatlarni ko‘rish, boshqa tashkilotga yoki bo‘limga uzatish Asosli ravishda virtual murojaatlarni rad etish Virtual murojaatlarda biriktirilgan ma’lumotlarni nazoratlash imkoniyati QO‘LLANILISH SOHASI Davlat tashkiloti korxonalarida virtual qabulxonani tashkil etish Fuqarolarga interaktiv xizmatni tashkil etish',
      category: 'Web',
      image: 'public/pj1.png',
      metric: '+40% savdo',
      icon: <Monitor className="size-4" />
    },
    {
      id: 2,
      title: 'Aqlli robot',
      description: 'Foydalanuvchilarga matn va ovoz orqali avtomatik javob beruvchi sun’iy intellekt. O‘rganadi, takomillashtiradi — har doim yaxshiroq yordam beradi.',
      category: 'AI / Robot',
      image: '/pj2.png',
      metric: '50,000+ foydalanuvchi',
      icon: <Smartphone className="size-4" />
    },
    {
      id: 3,
      title: 'Zarmeduniver.com',
      description: 'Universitet portali: talabalar, xodimlar, hujjatlar, yangiliklar — barchasi bitta platformada. Masofaviy ta’limni osonlashtirish.',
      category: 'Web',
      image: '/pj3.png',
      metric: '99.9% himoya',
      icon: <Shield className="size-4" />
    },
    {
      id: 4,
      title: ' Korxona va tashkilot xodimlari KPI',
      description: 'Xodimlar samaradorligini avtomatik baholash va reyting bilan nazorat qilish. Rahbariyatga qaror qabul qilishda yordam.',
      category: 'Web',
      image: '/pj4.png',
      metric: '99% ishonchlilik',
      icon: <Cloud className="size-4" />
    },
    {
      id: 5,
      title: 'Kutubxona Axborot Tizimi',
      description: 'Kitoblarni QR-kod yoki ID orqali hisobga olish, o‘quvchilarni nazorat qilish, statistika va aqlli qidiruv.',
      category: 'Web',
      image: '/pj5.png',
      metric: '60+ mijoz',
      icon: <Monitor className="size-4" />
    },
    {
      id: 6,
      title: 'Mexatronika Tizimlari',
      description: 'Sensorlar, avtomatlashtirilgan jarayonlar va real vaqt monitoringi — sanoat va robototexnikada ishonchli boshqaruv.',
      category: 'Systems',
      image: '/pj6.png',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    },
    {
      id: 7,
      title: ' Tarmoqlarni Sozlash',
      description: 'Tarmoq qurilmalarini konfiguratsiya qilish, IP manzillarni boshqarish, xavfsizlik monitoringi va yuklamani tahlil qilish.',
      category: 'Systems',
      image: '/pj7.png',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    }
    ,
    {
      id: 8,
      title: 'Bilimlarni Nazorat Qilish Tizimi',
      description: 'Testlar, imtihonlar, avtomatik baholash va proktoring — ta’lim muassasalari va sertifikatlash markazlari uchun ideal yechim.',
      category: 'Web',
      image: '/pj8.png',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    }
    ,
    {
      id: 9,
      title: ' Sun’iy Intellekt Asosida O‘qitish',
      description: 'Har bir talaba uchun shaxsiylashtirilgan o‘quv trayektoriyasi, faolligini tahlil qilish va aqlli tavsiyalar.',
      category: 'AI / Robot',
      image: '/pj9.png',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    }
    ,
    {
      id: 10,
      title: ' Telegram Botlar',
      description: 'Avtomatik bildirishnomalar, to‘lovlar, ro‘yxatdan o‘tish va statistika — ta’lim, biznes va xizmat ko‘rsatishda foydalanish.',
      category: 'Mobile',
      image: '/pj10.png',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    }
    ,
    {
      id: 11,
      title: 'Elektron Do‘kon',
      description: 'Mahsulotlar katalogi, onlayn buyurtma, to‘lov, ombor integratsiyasi va mijozlar bilan aloqa — savdo korxonalari uchun mustahkam platforma.',
      category: 'Web',
      image: '/pj11.png',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    }
    ,
    {
      id: 12,
      title: 'Omborxona Tizimini Monitoring Qilish',
      description: 'Kirim-chiqim, real vaqt qoldiq monitoringi, RFID/shtrix-kod integratsiyasi — logistika va sanoat omborlarida samaradorlikni oshirish.',
      category: 'Systems',
      image: '/pj12.png',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    }
    ,
    {
      id: 13,
      title: 'Tashkilotlar Analitikasi (Big Data)',
      description: 'ERP/CRM ma’lumotlarini tahlil qilish, vizual dashboardlar, prognozlash — yirik korxonalar va davlat tashkilotlari uchun strategik yechim.',
      category: 'AI / Robot',
      image: '/pj13.png',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    }
    ,
    {
      id: 14,
      title: ' Fan Tarmoqlaridan Lug‘at Ilavasi',
      description: 'IT, mexatronika, elektrotexnika va boshqa fanlarning terminlarini tarjima qilish, ovozli o‘qish, offline rejim va AI tavsiyala',
      category: 'Mobile',
      image: '/pj14.png',
      metric: '10,000+ talaba',
      icon: <Smartphone className="size-4" />
    }
  ];

  const categories: { name: Category; icon: React.ReactNode }[] = [
    { name: 'All', icon: <Filter className="size-4" /> },
    { name: 'Web', icon: <Monitor className="size-4" /> },
    { name: 'Mobile', icon: <Smartphone className="size-4" /> },
    { name: 'Systems', icon: <Cloud className="size-4" /> },
    { name: 'AI / Robot', icon: <Bot className="size-4" /> }
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
                <span>{cat.name === 'All' ? 'Barchasi' : cat.name === 'Systems' ? 'Tizimlar' : cat.name === 'AI / Robot' ? 'AI / Robot' : cat.name}</span>
              </button>
            ))}
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
    </div>
  );
}
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

