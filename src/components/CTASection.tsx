import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTASection() {
  return (
    <div className="w-full" style={{ backgroundColor: '#FFFFFF', paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="mx-auto px-12" style={{ maxWidth: '1280px' }}>
        <div
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #00A651 0%, #00D66C 100%)',
            borderRadius: '24px',
            padding: '64px',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left side */}
            <div>
              <h2 className="text-4xl mb-4" style={{ color: '#FFFFFF' }}>
                Hamkor Bo'lishni Istaysizmi?
              </h2>
              <p className="text-lg mb-8" style={{ color: '#E9F7EF', lineHeight: '1.6' }}>
                Biznes maqsadlaringizga erishish uchun biz bilan hamkorlik qiling. 
                O'zaro manfaatli sheriklik va uzoq muddatli hamkorlik munosabatlarini boshlaymiz.
              </p>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#00A651',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span className="text-lg">Bog&apos;lanish</span>
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Right side */}
            <div className="hidden lg:flex justify-end">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwdGVhbSUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY1MzgzNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Collaboration"
                className="w-full h-auto object-cover"
                style={{
                  borderRadius: '16px',
                  maxWidth: '400px',
                  opacity: '0.9',
                }}
              />
            </div>
          </div>

          {/* Decorative circles */}
          <div
            className="absolute"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              top: '-50px',
              right: '-50px',
              zIndex: 0,
            }}
          />
          <div
            className="absolute"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              bottom: '-30px',
              left: '100px',
              zIndex: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}
