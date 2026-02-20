import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PainSolution from '../components/PainSolution';
import Benefits from '../components/Benefits';
import Guarantee from '../components/Guarantee';
import CTAFinal from '../components/CTAFinal';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function NovaOdessa() {
    return (
        <div className="min-h-screen font-sans bg-white selection:bg-brand-cyan selection:text-brand-navy">
            <Header city="Nova Odessa" state="SP" />

            <main>
                <Hero videoSrc="/videos/hero-padrao-apos-ribeirao.mp4" city="Nova Odessa" noTilt />
                <PainSolution />
                <Benefits city="Nova Odessa" />
                <Guarantee />
                <CTAFinal city="Nova Odessa" />
            </main>

            <Footer />

            {/* Floating WhatsApp Button (Fixed on mobile/desktop for easy access) */}
            <div className="fixed bottom-6 right-6 z-40 md:hidden">
                <WhatsAppButton text="" size="large" ariaLabel="Conversar no WhatsApp" className="rounded-full w-14 h-14 !p-0 flex items-center justify-center shadow-green-500/40" showIcon={true} />
            </div>
        </div>
    );
}

export default NovaOdessa;
