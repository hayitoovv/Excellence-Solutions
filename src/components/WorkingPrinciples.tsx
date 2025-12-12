import { Handshake, Lock, Scale, Users, Shield } from 'lucide-react';

export function WorkingPrinciples() {
  const principles = [
    {
      icon: Handshake,
      title: 'Sheriklik munosabatlarini yo\'lga qo\'yish',
      description: 'Mijozlar bilan uzoq muddatli va ishonchli hamkorlik o\'rnatish',
    },
    {
      icon: Lock,
      title: 'Tijorat sirlarini to\'liq saqlagan holda',
      description: 'Barcha ma\'lumotlar va tijorat sirlari to\'liq maxfiylikda saqlanadi',
    },
    {
      icon: Scale,
      title: 'Faqat qonun asosida ishlaymiz',
      description: 'Barcha faoliyatimiz qonunchilikka to\'liq muvofiq amalga oshiriladi',
    },
    {
      icon: Users,
      title: 'Biz mijozlarimiz manfaatlari uchun ishlaymiz',
      description: 'Mijozlar ehtiyojlari va manfaatlari bizning ustuvor yo\'nalishimiz',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F0F9F4] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#00A651" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-[#00A651]/20 mb-4 shadow-sm">
            <div className="w-2 h-2 bg-[#00A651] rounded-full"></div>
            <span className="text-sm text-[#0E7A3B]">Bizning tamoyillarimiz</span>
          </div>
          <h2 className="text-4xl text-[#2C3E50] mb-4">Kompaniyaning ishlash tartibi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Biz professional xizmat va yuqori sifatli yechimlarni taqdim etish uchun aniq tamoyillarga amal qilamiz
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#00A651]/20 hover:-translate-y-1"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#00A651] to-[#16C172] rounded-full flex items-center justify-center shadow-lg shadow-[#00A651]/30 text-white">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E8F5E9] to-[#D4F1E0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#00A651]" strokeWidth={1.5} />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#00A651] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg text-[#2C3E50] leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 bg-white rounded-2xl px-6 py-6 md:px-8 md:py-6 shadow-lg border border-[#00A651]/10 mx-auto max-w-6xl">
            {/* Element 1: Ishonch */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="md:block w-px h-12 bg-[#0EB57D]"></div>
              <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#00A651]" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-600">Ishonch</div>
                <div className="font-medium text-[#00A651]">100% kafolat</div>
              </div>
            </div>

            {/* Element 2: 24/7 Qo'llab-quvvatlash */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="md:block w-px h-12 bg-[#0EB57D]"></div>
              <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#00A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-600">24/7</div>
                <div className="font-medium text-[#00A651]">Qo'llab-quvvatlash</div>
              </div>
            </div>

            {/* Element 3: Yuqori sifat */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="md:block w-px h-12 bg-[#0EB57D]"></div>
              <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#00A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-600">Sifat</div>
                <div className="font-medium text-[#00A651]">Yuqori daraja</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}