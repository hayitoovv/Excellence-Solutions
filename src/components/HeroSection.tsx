import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <div className="w-full" style={{ background: 'linear-gradient(135deg, #E9F7EF 0%, #F7FFFA 100%)' }}>
      <div className="mx-auto px-12" style={{ maxWidth: '1280px', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: '#00A651', color: 'white' }}>
              <span className="text-sm">Ishonchli hamkorlar ekotizimi</span>
            </div>
            <h1 className="text-5xl" style={{ color: '#1A1A1A' }}>
              Bizning Hamkorlar
            </h1>
            <p className="text-xl" style={{ color: '#4A5568', lineHeight: '1.6' }}>
              Biz global va mahalliy kompaniyalar bilan uzoq muddatli hamkorlik munosabatlarini rivojlantiramiz. 
              Hamkorlarimiz bilan birga innovatsion yechimlar yaratamiz va bozorda yangi standartlar o'rnatamiz.
            </p>
          </div>
          
          {/* Right side */}
          <div className="flex justify-center lg:justify-end">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2NTM3NjA1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Business Partnership"
              className="w-full h-auto object-cover"
              style={{ borderRadius: '24px', maxWidth: '560px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
