import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Monitor, Smartphone, Shield, Cloud } from 'lucide-react';
import ContactModal from './ContactModal';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  image: string;
  metric?: string;
  features?: string[];
  techStack?: string[];
}

export default function ProjectDetailPage() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // ID mavjud emas yoki raqam emas bo'lsa, loyihalar sahifasiga qaytish
    if (!id || isNaN(Number(id))) {
      navigate('/OurProjects');
      return;
    }

    const fetchProject = async () => {
      try {
        setProject(null); // Eski ma'lumotni tozalash
        setLoading(true);
        setError(null);

        const response = await fetch(`/data/projects/${id}.json`);

        if (!response.ok) {
          throw new Error(`Loyiha topilmadi (${response.status})`);
        }

        const data = await response.json();
        setProject(data);
      } catch (err) {
        console.error('JSON yuklashda xatolik:', err);
        setError(err instanceof Error ? err.message : 'Noma\'lum xatolik');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, navigate]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web': return <Monitor className="size-5" />;
      case 'Mobile': return <Smartphone className="size-5" />;
      case 'Security': return <Shield className="size-5" />;
      case 'Systems': return <Cloud className="size-5" />;
      default: return <Monitor className="size-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#00A651] mx-auto mb-4"></div>
          <p className="text-gray-600">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="bg-red-50 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-red-600 mb-2">Xatolik</h2>
            <p className="text-red-700">{error}</p>
          </div>
          <button 
            onClick={() => navigate('/OurProjects')} 
            className="inline-flex items-center gap-2 bg-[#00A651] text-white px-6 py-3 rounded-lg hover:bg-[#008a44] transition-colors"
          >
            <ArrowLeft className="size-4" />
            Loyihalarga qaytish
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Loyiha topilmadi</h2>
          <button 
            onClick={() => navigate('/OurProjects')} 
            className="text-[#00A651] hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="size-4" />
            Loyihalarga qaytish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Tepadagi qismni 2 ga bo'lish */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Birinchi qism: Loyiha rasmi va haqida ma'lumot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Rasmi */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-fit  ">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?w=1080  ';
              }}
            />
          </div>

          {/* Loyiha haqida */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 bg-[#00A651]/10 text-[#00A651] px-4 py-2 rounded-full">
                {getCategoryIcon(project.category)}
                <span className="font-medium">{project.category}</span>
              </span>
              {project.metric && (
                <span className="bg-[#00A651] text-white px-4 py-2 rounded-full font-semibold">
                  {project.metric}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">{project.title}</h1>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">{project.description}</p>
            {project.longDescription && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold text-[#1E293B] mb-3">Loyiha haqida</h2>
                <p className="text-gray-700 leading-relaxed text-justify">{project.longDescription}</p>
              </div>
            )}
          </div>
        </div>
          {/* Pastda Asosiy imkoniyatlar */}
      {project.features && project.features.length > 0 && (
        <div className='mb-7'>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100/50">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-8 flex items-center gap-3">
              <div className="w-1.5 h-10 bg-gradient-to-b from-[#00A651] to-[#008a44] rounded-full"></div>
              Asosiy imkoniyatlar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="group flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-green-50/30 rounded-2xl hover:from-green-50 hover:to-green-100/30 transition-all duration-300 border border-gray-100/50 hover:border-green-200/50 hover:shadow-md">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#00A651] to-[#008a44] flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
        
      )}

        {/* Ikkinchi qism: Texnologiyalar va Bog'lanish */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Texnologiyalar */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-[#1E293B] mb-4">Texnologiyalar</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[#00A651]/10 text-[#00A651] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#00A651]/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bog'lanish */}
          <div className="bg-gradient-to-br from-[#00A651] to-[#008a44] rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Qiziqtirdimi?</h3>
            <p className="mb-4 opacity-90">Bizning jamoamiz bilan bog'laning va loyihangizni muhokama qiling</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-white text-[#00A651] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Bog'lanish
            </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      </div>

    

      {/* Ortga qaytish tugmasi (sahifa yuqori qismida) */}
     {/* Ortga qaytish tugmasi (sahifa yuqori qismida) */}
<div className="fixed top-3 left-4 z-50">
  <button
    onClick={() => navigate('/OurProjects')}
    className="flex items-center gap-2 bg-[#00A651] text-white px-1.5 py-2 rounded-lg shadow-lg hover:bg-[#008a44] transition-all duration-200 transform hover:scale-105"
  >
    <ArrowLeft className="size-4" />
    Ortga qaytish
  </button>
</div>
    </div>
  );
}