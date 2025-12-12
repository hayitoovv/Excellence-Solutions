// src/components/Footer.tsx

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// MenuItem interfeys va ma'lumotlar — to'g'ridan-to'g'ri kiritildi
interface MenuItem {
  label: string;
  href: string;
  isScroll?: boolean;
  scrollTargetId?: string;
}

const menuItems: MenuItem[] = [
  { label: 'Bosh sahifa', href: '/' },
  { label: 'Kompaniya haqida', href: '/#about', isScroll: true, scrollTargetId: 'company-activity' },
  { label: 'Bizning xizmatlarimiz', href: '/#services', isScroll: true, scrollTargetId: 'services-section' },
  { label: 'Bizning loyihalarimiz', href: '/OurProjects' },
  { label: "Yangiliklar va e'lonlar", href: '/yangiliklar' },
  { label: 'Hamkorlik', href: '/hamkorlik' },
  { label: 'Bog\'lanish', href: '/#contact', isScroll: true, scrollTargetId: 'contact-section' },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleQuickLinkClick = (item: MenuItem, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.isScroll && item.scrollTargetId) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(item.scrollTargetId!), 150);
      } else {
        scrollToSection(item.scrollTargetId);
      }
    }
  };

  // Faqat 6 ta tezkor havola
  const quickLinks = menuItems.slice(0, 6);

  return (
    <footer className="bg-gradient-to-br from-[#2C3E50] to-[#1a252f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              {/* 📌 Eslatma: `public` papkasidagi fayllarga to'g'ridan-to'g'ri `/logo.png` deb murojaat qiling */}
              <img
                src="/src/public/logo.png" // ✅ `public/logo.png` — to'g'ri yo'l
                alt="Excellence Solutions Logo"
                className="h-12 object-contain"
              />
            </div>

            <p className="text-gray-400 leading-relaxed">
              Zamonaviy IT yechimlari va barqaror texnologiyalar orqali biznesingizni kelajakka olib boruvchi ishonchli hamkor.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://t.me/excellence_sulutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#00A651] rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.095.036.311.02.479z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#00A651] rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#00A651] rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links — ENDI ISHLAYDI */}
          <div>
            <h3 className="text-lg mb-6 text-white">Tezkor havolalar</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleQuickLinkClick(item, e)}
                    className="text-gray-400 hover:text-[#00A651] transition-colors flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-6 text-white">Xizmatlar</h3>
            <ul className="space-y-3">
              {[
                'Axborot tizimlarini ishlab chiqish',
                'Veb saytlar ishlab chiqish',
                'Telegram botlar ishlab chiqish',
                'Mobil ilovalar yaratish',
                'Onlayn va offlayn maslahatlar (muammo echimlari)',
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00A651] transition-colors flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-6 text-white">Bog'lanish</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#00A651]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#00A651]" />
                </div>
                <div className="text-gray-400">Toshkent shahar, O'zbekiston</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#00A651]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#00A651]" />
                </div>
                <div className="text-gray-400">+998 XX XXX XX XX</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#00A651]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#00A651]" />
                </div>
                <div className="text-gray-400">info@excellenceslutions.uz</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Excellence Solutions. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00A651] transition-colors">
                Maxfiylik siyosati
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#00A651] transition-colors">
                Foydalanish shartlari
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}