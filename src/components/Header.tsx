import { Mail, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white hidden md:block border-b border-[#00A651]/20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="src/public/logo.png"
              alt="Excellence Solutions Logo"
              className="h-12 object-contain"
            />
          </div>

         {/* Center - Free Consultation */}
<div className="flex-1 flex items-center justify-center">
  <div className="relative group">
    {/* Tashqi glow effekti */}
    <div className="absolute -inset-1 bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#2563eb] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>

    {/* Asosiy tugma — shu yerga phone-button klassi beriladi */}
    <div className="phone-button group flex items-center space-x-4">

      <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition-colors group shadow-sm hover:shadow-md mr-4 mt-4">
        <Phone className="w-5 h-5 animate-pulse" />
      </div>

      <div className="flex flex-col">
        <span className="text-center text-black text-xs font-medium tracking-wide uppercase whitespace-nowrap">
          Bepul maslahat olish
        </span>
        <a
          href="tel:+998972800225"
          className="mr-2 text-white text-xl font-bold tracking-wider hover:text-blue-100 transition-colors whitespace-nowrap"
          style={{ color: '#ffffff', textDecoration: 'none' }}
        >
          +998 90 123 45 67 
        </a>
      </div>

      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center animate-bounce flex-shrink-0">
        <svg
          className="w-3.5 h-3.5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: '#ffffff' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

    </div>
  </div>
</div>

          {/* Right Side - Two Columns with Equal Height */}
          <div className="flex items-stretch space-x-4 flex-shrink-0">
            {/* Column 1: Languages, Phone, Email */}
            <div className="flex flex-col justify-between space-y-2.5">
              {/* Languages Row */}
              <div className="flex items-center space-x-2 text-sm h-8">
                <img
                  src="src/public/1.png"
                  className="h-5 object-contain"
                  alt="UZ flag"
                />
                <button
                  type="button"
                  className="text-[#00A651] hover:text-[#0E7A3B] transition-colors font-medium"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  UZ
                </button>
                <span className="text-gray-300">|</span>
                <img
                  src="src/public/2.png"
                  className="h-5 object-contain"
                  alt="RU flag"
                />
                <button
                  type="button"
                  className="text-gray-500 hover:text-[#00A651] transition-colors"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  RU
                </button>
                <span className="text-gray-300">|</span>
                <img
                  src="src/public/3.png"
                  className="h-5 object-contain"
                  alt="EN flag"
                />
                <button
                  type="button"
                  className="text-gray-500 hover:text-[#00A651] transition-colors"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  EN
                </button>
              </div>

              {/* Phone Row */}
              <a
                href="tel:+998905104191"
                className="flex items-center space-x-2 text-sm text-gray-700 hover:text-white transition-all group h-8 px-3 mr-4 rounded-full bg-[#E8F5E9] hover:bg-[#00A651]"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <Phone className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors" />
                <span className="group-hover:text-white whitespace-nowrap">
                  +998 90 123 45 67
                </span>
              </a>

              {/* Email Row */}
              <a
                href="mailto:info@excellenceslutions.uz"
                className="flex items-center space-x-2 text-sm text-gray-700 hover:text-white transition-all group h-8 px-3 mr-4 rounded-full bg-[#E8F5E9] hover:bg-[#00A651]"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <Mail className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors" />
                <span className="group-hover:text-white whitespace-nowrap">
                  info@excellenceslutions.uz
                </span>
              </a>
            </div>

            {/* Column 2: Social Media */}
            <div className="flex flex-col justify-between space-y-2.5">
              <a
                href="https://t.me/excellence_sulutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#E8F5E9] hover:bg-[#00A651] flex items-center justify-center transition-colors group shadow-sm hover:shadow-md"
                aria-label="Telegram"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <svg
                  className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.095.036.311.02.479z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/excellencesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#E8F5E9] hover:bg-[#00A651] flex items-center justify-center transition-colors group shadow-sm hover:shadow-md"
                aria-label="Facebook"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <svg
                  className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/excellence_solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#E8F5E9] hover:bg-[#00A651] flex items-center justify-center transition-colors group shadow-sm hover:shadow-md"
                aria-label="Instagram"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <svg
                  className="w-4 h-4 text-[#00A651] group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}