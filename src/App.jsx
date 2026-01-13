import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainSolution from './components/PainSolution';
import Benefits from './components/Benefits';
import Guarantee from './components/Guarantee';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-brand-cyan selection:text-brand-navy">
      <Header />

      <main>
        <Hero />
        <PainSolution />
        <Benefits />
        <Guarantee />
        <CTAFinal />
      </main>

      <Footer />

      {/* Floating WhatsApp Button (Fixed on mobile/desktop for easy access) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <WhatsAppButton text="" size="large" className="rounded-full w-14 h-14 !p-0 flex items-center justify-center shadow-green-500/40" showIcon={true} />
      </div>
    </div>
  );
}

export default App;
