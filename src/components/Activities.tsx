import {  ServerIcon, CpuIcon, Globe, Bot, Smartphone, Users } from 'lucide-react';

export function Activities() {
  const activities = [
    {
      icon: CpuIcon,
      title: 'Axborot tizimlarini ishlab chiqish',
      description: 'Korporativ va biznes uchun maxsus axborot tizimlari yaratish',
    },
    {
      icon: Globe,
      title: 'Veb saytlar ishlab chiqish',
      description: 'Zamonaviy, tez va SEO-optimizatsiyalangan veb-saytlar',
    },
    {
      icon: Bot,
      title: 'Telegram botlar ishlab chiqish',
      description: 'Biznes jarayonlarini avtomatlashtiruvchi telegram botlar',
    },
    {
      icon: Smartphone,
      title: 'Mobil ilovalar yaratish',
      description: 'iOS va Android uchun yuqori sifatli mobil ilovalar',
    },
    {
      icon: ServerIcon,
      title: 'Serverlarni sozlash va ekspluatatsiya',
      description: 'Server infratuzilmasini sozlash va texnik qo\'llab-quvvatlash',
    },
    {
      icon: Users,
      title: 'Onlayn va offlayn maslahatlar (muammo echimlari)',
      description: 'Professional IT konsultatsiya va muammolarni hal qilish',
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gradient-to-b from-[#F0F9F4] via-white to-[#E8F5E9] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div  className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#E8F5E9] px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#00A651] rounded-full"></div>
            <span  className="text-sm text-[#0E7A3B]">Bizning xizmatlar</span>
          </div>
          <h2 className="text-4xl text-[#2C3E50] mb-4">Bizning Xizmatlarimiz</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional IT yechimlar va xizmatlar
            {/* Zamonaviy texnologiyalar va professional yondashuvlar bilan to\'liq IT yechimlari */}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 border border-[#00A651]/10 hover:border-[#00A651]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#00A651]/10 overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00A651] to-[#16C172] rounded-lg flex items-center justify-center shadow-lg shadow-[#00A651]/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-[#2C3E50] group-hover:text-[#00A651] transition-colors">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="pt-4">
                    <div className="w-0 h-1 bg-gradient-to-r from-[#00A651] to-[#16C172] group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#00A651] opacity-5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
