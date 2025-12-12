import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export function ServiceCard({ icon: Icon, title, subtitle }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-klsm p-8 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
      <div className="flex flex-col gap-4">
        {/* Icon Container */}
        <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center">
          <Icon className="w-7 h-7 text-emerald-500 stroke-[1.5]" />
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-900 font-semibold">
            {title}
          </h3>
          <p className="text-gray-500">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
