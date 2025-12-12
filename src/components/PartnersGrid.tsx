import { Cpu, Zap, Cloud, Database, Rocket, Briefcase, Code, Layers, Globe, Server, Terminal, Network } from 'lucide-react';

const logoIcons = [Cpu, Zap, Cloud, Database, Rocket, Briefcase, Code, Layers, Globe, Server, Terminal, Network];

const partners = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'GlobalSoft', logo: 'GS' },
  { name: 'InnovateLab', logo: 'IL' },
  { name: 'DataFlow', logo: 'DF' },
  { name: 'CloudNine', logo: 'C9' },
  { name: 'SmartSys', logo: 'SS' },
  { name: 'NextGen', logo: 'NG' },
  { name: 'ProTech', logo: 'PT' },
  { name: 'FutureBiz', logo: 'FB' },
  { name: 'AlphaCom', logo: 'AC' },
  { name: 'BetaSoft', logo: 'BS' },
  { name: 'GammaTech', logo: 'GT' },
];

export function PartnersGrid() {
  return (
    <div className="w-full" style={{ backgroundColor: '#F9FAFB', paddingTop: '72px', paddingBottom: '72px' }}>
      <div className="mx-auto px-12" style={{ maxWidth: '1280px' }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#1A1A1A' }}>
            Ishonchli Hamkorlarimiz
          </h2>
          <p className="text-lg" style={{ color: '#4A5568', maxWidth: '720px', margin: '0 auto' }}>
            Biznes maqsadlarimizga erishishda yonma-yon turgan kompaniyalar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {partners.map((partner, index) => {
            const LogoIcon = logoIcons[index % logoIcons.length];
            return (
              <div
                key={index}
                className="flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #E5E7EB',
                  cursor: 'pointer',
                  minHeight: '140px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 166, 81, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div className="text-center">
                  <div
                    className="mx-auto mb-2 flex items-center justify-center"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '12px',
                      backgroundColor: '#E9F7EF',
                    }}
                  >
                    <LogoIcon size={32} style={{ color: '#00A651' }} />
                  </div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    {partner.name}
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