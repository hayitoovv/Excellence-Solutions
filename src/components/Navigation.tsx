// src/components/Navigation.tsx
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';

interface MenuItem {
  label: string;
  href: string;
  isScroll?: boolean;
  scrollTargetId?: string;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { label: 'Bosh sahifa', href: '/' },
    { label: 'Kompaniya haqida', href: '/#about', isScroll: true, scrollTargetId: 'company-activity' },
    { label: 'Bizning xizmatlarimiz', href: '/#services', isScroll: true, scrollTargetId: 'services-section' },
    { label: 'Bizning loyihalarimiz', href: '/OurProjects' }, // ✅ Bu to'g'ridan-to'g'ri sahifaga o'tadi
    { label: "Yangiliklar va e'lonlar", href: '/CompanyNews' },
    { label: 'Hamkorlik', href: '/HamkorlikPage' },
    { label: 'Bog\'lanish', href: '/#contact', isScroll: true, scrollTargetId: 'contact-section' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // ✅ Link bosilganda scroll yoki navigate
  const handleMenuClick = (item: MenuItem, e: React.MouseEvent) => {
    setIsOpen(false);

    if (item.isScroll && item.scrollTargetId) {
      e.preventDefault();

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(item.scrollTargetId!);
        }, 100);
      } else {
        scrollToSection(item.scrollTargetId);
      }
    }
    // ✅ Agar isScroll yo'q bo'lsa, oddiy navigate ishlaydi (masalan: /OurProjects)
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);

      const firstLink = menuRef.current?.querySelector('a');
      firstLink?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    // <nav className="bg-white shadow-md relative z-50">
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={(e) => handleMenuClick(item, e)}
                  className={`text-gray-700 hover:text-blue-600 transition-colors pb-2 relative block ${
                    (!item.isScroll && location.pathname === item.href)
                      ? 'text-blue-600 font-medium'
                      : ''
                  }`}
                >
                  {item.label}
                  {(!item.isScroll && location.pathname === item.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0EB57D]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center justify-between py-4">
          <span><img src="src/public/logo.png" alt="Excellence Solutions Logo" className="h-10 object-contain"/></span>
          {!isOpen && (
            <button
              ref={buttonRef}
              aria-label="Menyuni ochish"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleOverlayClick}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobil navigatsiya menyusi"
          className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='bg-white h-full'> 
            <div className="flex bg-white justify-end p-4 border-b">
              <button
                aria-label="Menyuni yopish"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex items-center px-4 py-4 bg-white space-x-2 text-sm">
                <img src="src/public/1.png" className="h-4 ml-4 object-contain"/>
                <button className="text-[#00A651] hover:text-[#0E7A3B] transition-colors">UZ</button>
                <span className="text-gray-300">|</span>
                <img src="src/public/2.png" className="h-4 object-contain"/>
                <button className="text-gray-500 hover:text-[#00A651] transition-colors">RU</button>
                <span className="text-gray-300">|</span>
                <img src="src/public/3.png" className="h-4 object-contain"/>
                <button className="text-gray-500 hover:text-[#00A651] transition-colors">EN</button>
            </div>

            <ul className="px-4 bg-white space-y-2 pb-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={(e) => handleMenuClick(item, e)}
                    className={`block py-3 px-4 rounded transition-colors font-medium ${
                      (!item.isScroll && location.pathname === item.href)
                        ? 'bg-[#F3F0DA] text-[#00A649] border-l-4 border-[#00A649]'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='bg-white px-4 space-y-2 pb-5'>
              <a 
                href="tel:+998905104191" 
                className="flex ml-4 pb-5 items-center space-x-2 text-sm text-gray-700 hover:text-[#00A651] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#E8F5E9] group-hover:bg-[#00A651] flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors" />
                </div>
                <span className="hidden lg:block">+998 90 510 41 91</span>
              </a>
              <a 
                href="mailto:info@excellenceslutions.uz" 
                className="flex ml-4 items-center space-x-2 text-sm text-gray-700 hover:text-[#00A651] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#E8F5E9] group-hover:bg-[#00A651] flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors" />
                </div>
                 <span className="hidden lg:block">info@excellenceslutions.uz</span>
              </a>  
            </div>
            <div className="flex bg-white px-4 space-x-2 pb-5 items-center">
                <a 
                  href="#" 
                  className="w-8 ml-4 h-8 rounded-full bg-[#E8F5E9] hover:bg-[#00A651] flex items-center justify-center transition-colors group"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.095.036.311.02.479z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-[#E8F5E9] hover:bg-[#00A651] flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-[#E8F5E9] hover:bg-[#00A651] flex items-center justify-center transition-colors group"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}