import { useState } from 'react';
import { Calendar, ArrowRight, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';
import { useLayoutEffect } from 'react';


type NewsItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Yangi AI texnologiyasi kompaniyamizga joriy etildi",
    description: "Sun'iy intellekt asosidagi yangi tizim bizning ishlab chiqarish jarayonlarimizni optimallashtirish uchun muvaffaqiyatli joriy etildi.",
    category: "Texnologiya yangiliklari",
    date: "10 Dekabr 2024",
    image: "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzY1NDU3ODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Jamoa kengayishi: 50+ yangi mutaxassis qabul qilindi",
    description: "Kompaniyamiz o'sishi davom etmoqda. Biz dasturiy ta'minot va IT xavfsizligi bo'yicha 50 dan ortiq yangi mutaxassislarni jamoamizga qabul qildik.",
    category: "E'lon",
    date: "5 Dekabr 2024",
    image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWFtfGVufDF8fHx8MTc2NTUxOTI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Cloud Infrastructure yangilanishi tugallandi",
    description: "Bizning bulutli infratuzilmamiz to'liq yangilandi va endi 99.99% ishonchlilik kafolati bilan xizmat ko'rsatmoqda.",
    category: "Yangilanishlar",
    date: "28 Noyabr 2024",
    image: "https://images.unsplash.com/photo-1689467892123-107febc3311f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc2NTQ1NDUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Tech Conference 2024: Muvaffaqiyatli ishtirok",
    description: "Kompaniyamiz o'z innovatsion yechimlarini Tech Conference 2024 da taqdim etdi va 'Yilning eng yaxshi IT kompaniyasi' mukofotini qo'lga kiritdi.",
    category: "Yangilik",
    date: "15 Noyabr 2024",
    image: "https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjU0NDQyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Yangi ofis binosi ochildi",
    description: "Toshkent markazida zamonaviy texnologiyalar bilan jihozlangan yangi ofis binosini rasmiy ravishda ochdik.",
    category: "Internal news",
    date: "1 Noyabr 2024",
    image: "https://images.unsplash.com/photo-1764885517706-614101aa5811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBhbm5vdW5jZW1lbnR8ZW58MXx8fHwxNzY1NTE5Mjg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "DevOps bo'yicha bepul trening dasturi",
    description: "Barcha xodimlar uchun DevOps va Kubernetes bo'yicha 4 haftalik intensiv trening dasturi e'lon qilindi.",
    category: "E'lon",
    date: "20 Oktyabr 2024",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwxfHx8fDE3NjU1MTkyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 7,
    title: "Cybersecurity tizimi yangilandi",
    description: "Kompaniya xavfsizlik tizimiga yangi AI-powered monitoring va tahdidlarni aniqlash vositalari qo'shildi.",
    category: "Texnologiya yangiliklari",
    date: "10 Oktyabr 2024",
    image: "https://images.unsplash.com/photo-1689467892123-107febc3311f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc2NTQ1NDUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 8,
    title: "Q3 2024: Record darajadagi natijalar",
    description: "Uchinchi chorakda kompaniya o'z tarixidagi eng yuqori daromad va mijozlar soniga erishdi.",
    category: "Yangilik",
    date: "30 Sentabr 2024",
    image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWFtfGVufDF8fHx8MTc2NTUxOTI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 9,
    title: "Mobile App Development bo'limi ochildi",
    description: "iOS va Android ilovalar yaratish uchun yangi maxsus bo'lim tashkil etildi va ishga tushirildi.",
    category: "Internal news",
    date: "15 Sentabr 2024",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwxfHx8fDE3NjU1MTkyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const categories = [
  "Hammasi",
  "Yangilik",
  "E'lon",
  "Texnologiya yangiliklari",
  "Yangilanishlar",
  "Internal news"
];

export default function CompanyNews() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // ⚡ Darhol yuqoriga
  }, []);

  const [activeCategory, setActiveCategory] = useState("Hammasi");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemsPerPage = 6;

  // Filter news based on active category
  const filteredNews = activeCategory === "Hammasi" 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00A651] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-5xl">Yangiliklar va e'lonlar</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Kompaniyamizdagi so'nggi yangiliklar, e'lonlar va muhim voqealar bilan tanishing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#00A651] text-white shadow-lg shadow-[#00A651]/30'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#00A651] hover:text-[#00A651]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentNews.map((item, index) => (
            <article
              key={item.id}
              className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-1.5 bg-[#00A651] text-white rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 line-clamp-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <button className="text-[#00A651] hover:text-[#008A44] transition-colors group/arrow">
                    <ArrowRight className="w-5 h-5 group-hover/arrow:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-[#00A651] hover:to-[#00b858] hover:text-white shadow-md hover:shadow-lg hover:shadow-[#00A651]/20'
              }`}
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Oldingi</span>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`min-w-[44px] h-11 px-4 rounded-full transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-[#00A651] to-[#00b858] text-white shadow-lg shadow-[#00A651]/30 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg hover:scale-105'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-[#00A651] hover:to-[#00b858] hover:text-white shadow-md hover:shadow-lg hover:shadow-[#00A651]/20'
              }`}
            >
              <span>Keyingi</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        )}
      </main>

      <Footer/>

      {/* Add fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}