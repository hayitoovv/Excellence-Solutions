import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function FooterHamkorlik() {
  return (
    <footer className="w-full" style={{ backgroundColor: '#F5F5F5', paddingTop: '64px', paddingBottom: '48px' }}>
      <div className="mx-auto px-12" style={{ maxWidth: '1280px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4" style={{ color: '#00A651' }}>
              Hamkorlik
            </h3>
            <p style={{ color: '#6B7280', lineHeight: '1.6', marginBottom: '24px' }}>
              Ishonchli hamkorlar bilan birga innovatsion yechimlar yaratamiz va bozorda yangi standartlar o'rnatamiz.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#00A651',
                  color: '#FFFFFF',
                }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#00A651',
                  color: '#FFFFFF',
                }}
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#00A651',
                  color: '#FFFFFF',
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#00A651',
                  color: '#FFFFFF',
                }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4" style={{ color: '#1A1A1A' }}>
              Tezkor Havolalar
            </h4>
            <ul className="space-y-3">
              {['Bosh sahifa', 'Hamkorlar', 'Xizmatlar', 'Loyihalar', 'Blog'].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: '#6B7280' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00A651')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4" style={{ color: '#1A1A1A' }}>
              Xizmatlar
            </h4>
            <ul className="space-y-3">
              {['Texnologik yechimlar', 'Konsalting', 'Integratsiya', 'Ta\'lim', 'Qo\'llab-quvvatlash'].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: '#6B7280' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00A651')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4" style={{ color: '#1A1A1A' }}>
              Aloqa
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} style={{ color: '#00A651', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#6B7280', lineHeight: '1.5' }}>
                  Toshkent shahri, Amir Temur shoh ko&apos;chasi 108
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} style={{ color: '#00A651', flexShrink: 0 }} />
                <span style={{ color: '#6B7280' }}>+998 71 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} style={{ color: '#00A651', flexShrink: 0 }} />
                <span style={{ color: '#6B7280' }}>info@hamkorlik.uz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid #E5E7EB' }}
        >
          <p style={{ color: '#9CA3AF' }}>
            &copy; 2025 Hamkorlik. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors duration-300"
              style={{ color: '#9CA3AF' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00A651')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
            >
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="transition-colors duration-300"
              style={{ color: '#9CA3AF' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00A651')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
            >
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
