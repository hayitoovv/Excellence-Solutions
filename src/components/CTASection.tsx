import { ArrowRight } from 'lucide-react';
 import ContactModal from './ContactModal';
 import { useState } from 'react';

export function CTASection() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full" style={{ backgroundColor: '#FFFFFF', paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="mx-auto" style={{ maxWidth: '1280px', paddingLeft: '48px', paddingRight: '48px' }}>
        <div
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #00A651 0%, #00D66C 100%)',
            borderRadius: '24px',
            padding: '64px',
            position: 'relative',
          }}
        >
          <div 
            id="cta-grid"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr',
              gap: '48px', 
              alignItems: 'center', 
              position: 'relative', 
              zIndex: 10 
            }}
          >
            {/* Left side */}
            <div>
              <h2 style={{ 
                fontSize: '2.25rem', 
                marginBottom: '16px', 
                color: '#FFFFFF', 
                fontWeight: '600',
                lineHeight: '1.2'
              }}>
                Hamkor Bo'lishni Istaysizmi?
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                marginBottom: '32px', 
                color: '#E9F7EF', 
                lineHeight: '1.6',
                maxWidth: '600px'
              }}>
                Biznes maqsadlaringizga erishish uchun biz bilan hamkorlik qiling. 
                O'zaro manfaatli sheriklik va uzoq muddatli hamkorlik munosabatlarini boshlaymiz.
              </p>
              <button
              onClick={() => setIsModalOpen(true)} 

            
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  backgroundColor: '#FFFFFF',
                  color: '#00A651',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '1.125rem',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <span>Bog'lanish</span>
                <ArrowRight size={20} />
              </button>
              <ContactModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              />

            </div>

            {/* Right side - Rasm - faqat katta ekranlarda */}
            <div 
              id="cta-image-container"
              style={{ 
                display: 'none',
                justifyContent: 'flex-end',
                width: '100%'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Team Collaboration"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  maxWidth: '500px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  display: 'block'
                }}
                onError={(e) => {
                  console.log('Rasm yuklanmadi, alternativ yuklanmoqda...');
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80';
                }}
                onLoad={() => console.log('Rasm muvaffaqiyatli yuklandi!')}
              />
            </div>
          </div>

          {/* Decorative circles */}
          <div
            style={{
              position: 'absolute',
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
            style={{
              position: 'absolute',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              bottom: '-30px',
              left: '100px',
              zIndex: 0,
            }}
          />

          {/* Media Query CSS */}
          <style>{`
            @media (min-width: 1024px) {
              #cta-image-container {
                display: flex !important;
              }
              #cta-grid {
                grid-template-columns: 1fr 1fr !important;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}