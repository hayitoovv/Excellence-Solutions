import { Cpu, Building2, Globe, Users } from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    title: 'Texnologik Hamkorlar',
    description: 'Zamonaviy texnologiyalar va IT yechimlari sohasidagi yetakchi kompaniyalar bilan hamkorlik',
  },
  {
    icon: Building2,
    title: 'Mahalliy Kompaniyalar',
    description: 'O\'zbekiston bozorini chuqur biladigan va mahalliy tajribaga ega bo\'lgan ishonchli hamkorlar',
  },
  {
    icon: Globe,
    title: 'Xalqaro Tashkilotlar',
    description: 'Global standartlar va xalqaro tajribani qo\'llovchi dunyo miqyosidagi tashkilotlar',
  },
  {
    icon: Users,
    title: 'Strategik Hamkorlar',
    description: 'Uzoq muddatli rivojlanish va o\'zaro manfaatli loyihalar ustida ishlaydigan strategik sheriklar',
  },
];

export function PartnerCategories() {
  return (
    <div className="w-full" style={{ backgroundColor: '#FFFFFF', paddingTop: '72px', paddingBottom: '72px' }}>
      <div className="mx-auto px-12" style={{ maxWidth: '1280px' }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#1A1A1A' }}>
            Hamkorlik Yo'nalishlari
          </h2>
          <p className="text-lg" style={{ color: '#4A5568', maxWidth: '720px', margin: '0 auto' }}>
            Turli sohalarda faoliyat yurituvchi kompaniyalar bilan hamkorlik qilamiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #E5E7EB',
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: '#E9F7EF',
                  }}
                >
                  <Icon size={28} style={{ color: '#00A651' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2" style={{ color: '#1A1A1A' }}>
                    {category.title}
                  </h3>
                  <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
