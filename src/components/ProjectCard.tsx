// components/ProjectCard.tsx

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ to'g'ri import

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  metric?: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {project.metric && (
          <div className="absolute top-4 right-4 bg-[#00A651] text-white px-3 py-1 rounded-full text-sm shadow-lg z-10">
            {project.metric}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[#00A651] bg-[#00A651]/10 px-3 py-1 rounded-full text-sm">
            {project.icon}
            {project.category}
          </span>
        </div>

        <h3 className="text-[#1E293B] mb-3 group-hover:text-[#00A651] transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* 🔗 Link orqali yo'naltirish */}
        <Link 
          to={`/project/${project.id}`} 
          className="inline-flex items-center gap-2 text-[#00A651] group-hover:gap-3 transition-all"
        >
          <span>Batafsil ko&apos;rish</span>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="h-1 bg-gradient-to-r from-[#00A651] to-[#008a44] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
}