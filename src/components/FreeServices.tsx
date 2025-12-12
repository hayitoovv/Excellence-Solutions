import { Headphones, MessageSquare, FileText, HelpCircle } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

export default function FreeServices() {
  const services = [
    {
      icon: Headphones,
      title: "Bepul onlayn xizmatlar 1",
      subtitle: "Har qanday savolingizga javob olish uchun mutaxassislarimiz bilan bog'laning"
    },
    {
      icon: MessageSquare,
      title: "Bepul onlayn xizmatlar 2",
      subtitle: "Onlayn chat orqali real vaqtda yordam va maslahat olish imkoniyati"
    },
    {
      icon: FileText,
      title: "Bepul onlayn xizmatlar 3",
      subtitle: "Barcha kerakli hujjatlar va ma'lumotlarni yuklab olishingiz mumkin"
    },
    {
      icon: HelpCircle,
      title: "Bepul onlayn xizmatlar 4",
      subtitle: "Ko'p so'raladigan savollar va ularning to'liq javoblarini o'rganing"
    }
  ];

  return (
    
    <div className="screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"> 
          <h2 className="text-4xl text-[#2C3E50] mb-4">Bepul onlayn xizmatlar</h2>
        </div>
        {/* Grid Layout */}
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
            />
          ))}
        </div>
      </div>
    </div>


  );
}
