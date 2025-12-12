import { TrendingUp, Shield, Lightbulb, Award } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Biznes O\'sishi',
    description: 'Hamkorlik orqali yangi bozorlar va imkoniyatlarga ega bo\'lasiz. Birgalikda kuchliroqmiz va tezroq o\'samiz.',
  },
  {
    icon: Shield,
    title: 'Ishonch va Barqarorlik',
    description: 'Uzoq muddatli va barqaror hamkorlik munosabatlari orqali o\'zaro ishonch va samarali natijalar kafolatlaymiz.',
  },
  {
    icon: Lightbulb,
    title: 'Innovatsion Yechimlar',
    description: 'Zamonaviy texnologiyalar va kreativ g\'oyalarni birgalikda amalga oshiramiz. Innovatsiyalar bizning kuchimiz.',
  },
  {
    icon: Award,
    title: 'Yuqori Standartlar',
    description: 'Xalqaro standartlarga mos sifatli xizmat va professional yondashuv bilan ishlashni ta\'minlaymiz.',
  },
];

export function CollaborationBenefits() {
  return (
    <div className="w-full" style={{ backgroundColor: '#FFFFFF', paddingTop: '72px', paddingBottom: '72px' }}>
      <div className="mx-auto px-12" style={{ maxWidth: '1280px' }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#1A1A1A' }}>
            Nima uchun Biz bilan Hamkorlik Qilish Kerak?
          </h2>
          <p className="text-lg" style={{ color: '#4A5568', maxWidth: '720px', margin: '0 auto' }}>
            Hamkorlarimizga taqdim etadigan afzalliklar va imkoniyatlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-6 transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div
                  className="mx-auto mb-4 flex items-center justify-center"
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: '#00A651',
                  }}
                >
                  <Icon size={32} style={{ color: '#FFFFFF' }} />
                </div>
                <h3 className="text-xl mb-3" style={{ color: '#1A1A1A' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
