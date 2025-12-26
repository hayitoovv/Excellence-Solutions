// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Header } from './components/Header';
import Navigation from './components/Navigation';
import { Hero } from './components/Hero';
import { Activities } from './components/Activities';
import CompanyActivity from './components/CompanyActivity';
import { WorkingPrinciples } from './components/WorkingPrinciples';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { ScrollToTop } from './components/ScrollToTop';
import FreeServices from "./components/FreeServices";
import { OurProjects } from './components/OurProjects';
import HamkorlikPage from './components/HamkorlikPage';
import CompanyNews from './components/CompanyNews';
import ContactModal from './components/ContactModal';
import ProjectDetailPage from './components/ProjectDetailPage';
import { useState } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      {/* Particles fon — z-index: 1 (komponent ichida sozlangan) */}
      <ParticlesBackground />

      {/* Barcha kontent — z-index: 10 */}
      <div className="relative z-10 min-h-screen flex flex-col bg-white">
        <Header />
        <div className="sticky top-0 z-40 bg-white">
          <Navigation />
        </div>
        <ScrollToTop />

        {/* Asosiy tana — flex-grow bilan */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FreeServices />
                  <Activities />
                  <CompanyActivity />
                  <WorkingPrinciples />
                  <div className="min-h-[80vh] bg-gradient-to-br from-green-50/30 via-white to-green-50/20 relative">
                    {/* Dekorativ fon */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(14, 181, 125, 0.05) 0%, transparent 50%),
                                        radial-gradient(circle at 80% 80%, rgba(11, 163, 108, 0.05) 0%, transparent 50%)`,
                      }}
                    />
                    <div className="relative max-w-7xl mx-auto px-4 py-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <FAQSection />
                        <ContactSection />
                      </div>
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/OurProjects" element={<OurProjects />} />
            <Route path="/HamkorlikPage" element={<HamkorlikPage />} />
            <Route path="/CompanyNews" element={<CompanyNews />} />
            <Route path="/" element={<OurProjects />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
          </Routes>
        </main>

        {/* Footer — HAMMA SAHIFADA ko'rinadi */}
        <Footer />
      </div>

      {/* Modal — DOIM en pastda, barcha z-indexlardan yuqoriroq */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Router>
  );
}