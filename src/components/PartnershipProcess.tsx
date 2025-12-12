const steps = [
  {
    number: '01',
    title: 'Ariza Topshirish',
    description: 'Hamkorlik uchun onlayn ariza yuboring yoki biz bilan bog\'laning. Barcha ma\'lumotlarni to\'liq ko\'rsating.',
  },
  {
    number: '02',
    title: 'Tahlil va Ko\'rib Chiqish',
    description: 'Mutaxassislarimiz arizangizni o\'rganadi va biznes imkoniyatlarini baholaydi.',
  },
  {
    number: '03',
    title: 'Uchrashuv va Kelishuv',
    description: 'Shaxsiy yoki onlayn uchrashuv o\'tkazamiz va hamkorlik shartlarini muhokama qilamiz.',
  },
  {
    number: '04',
    title: 'Shartnoma Tuzish',
    description: 'O\'zaro manfaatli shartnoma imzolaymiz va hamkorlikni boshlaymiz.',
  },
];

export function PartnershipProcess() {
  return (
    <div className="w-full" style={{ backgroundColor: '#F9FAFB', paddingTop: '72px', paddingBottom: '72px' }}>
      <div className="mx-auto px-12" style={{ maxWidth: '1280px' }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#1A1A1A' }}>
            Hamkor Bo'lish Jarayoni
          </h2>
          <p className="text-lg" style={{ color: '#4A5568', maxWidth: '720px', margin: '0 auto' }}>
            Hamkorlik yo'lini bosqichma-bosqich tushuntirish
          </p>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div 
            className="hidden lg:block absolute left-0 right-0 top-16"
            style={{
              height: '2px',
              background: 'linear-gradient(90deg, #E9F7EF 0%, #00A651 50%, #E9F7EF 100%)',
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className="p-6 transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div
                    className="mx-auto mb-4 flex items-center justify-center"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#00A651',
                      border: '4px solid #E9F7EF',
                    }}
                  >
                    <span className="text-2xl" style={{ color: '#FFFFFF' }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl mb-3 text-center" style={{ color: '#1A1A1A' }}>
                    {step.title}
                  </h3>
                  <p className="text-center" style={{ color: '#6B7280', lineHeight: '1.6' }}>
                    {step.description}
                  </p>
                </div>

                {/* Vertical connector for mobile */}
                {index < steps.length - 1 && (
                  <div 
                    className="lg:hidden mx-auto my-4"
                    style={{
                      width: '2px',
                      height: '32px',
                      backgroundColor: '#E9F7EF',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
