// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import HamkorlikPage  from './components/HamkorlikPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Header va Navigation yuqorida z-50 bilan */}  
         <Header />
        <div className="sticky top-0 z-50 bg-white">
          <Navigation />
        </div> 
        <ScrollToTop />

        {/* Main content pastroq z-index bilan */}
        <main>
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={
              <>
                <Hero />
                <FreeServices />
                <Activities />
                <CompanyActivity />
                <WorkingPrinciples />
                <div className="min-h-screen bg-gradient-to-br from-green-50/30 via-white to-green-50/20">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(14, 181, 125, 0.05) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 80%, rgba(11, 163, 108, 0.05) 0%, transparent 50%)`
                  }}></div>
                  
                  <div className="relative max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Left Section - FAQ */}
                      <FAQSection />
                      
                      {/* Right Section - Contact Form */}
                      <ContactSection />
                    </div>
                  </div>
                </div>
                <Footer />
              </>
            } />

            <Route path="/OurProjects" element={<OurProjects />} />
             <Route path="/HamkorlikPage" element={<HamkorlikPage />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}