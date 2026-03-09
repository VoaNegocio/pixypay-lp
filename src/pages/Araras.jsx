import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PainSolution from '../components/PainSolution';
import Benefits from '../components/Benefits';
import Guarantee from '../components/Guarantee';
import CTAFinal from '../components/CTAFinal';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const ARARAS_WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5519958710782&text=Ol%C3%A1%21+Gostaria+de+pedir+meu+botij%C3%A3o+de+g%C3%A1s+parcelado+no+PIX&type=phone_number&app_absent=0";

const Araras = () => {
    return (
        <div className="min-h-screen font-sans bg-white selection:bg-brand-cyan selection:text-brand-navy">
            <Header city="Araras" state="SP" />

            <main>
                <Hero videoSrc="/videos/videohero-arararas.mp4" whatsappLink={ARARAS_WHATSAPP_LINK} city="Araras" />
                <PainSolution whatsappLink={ARARAS_WHATSAPP_LINK} />
                <Benefits city="Araras" />
                <Guarantee />
                <CTAFinal whatsappLink={ARARAS_WHATSAPP_LINK} city="Araras" />
            </main>

            <Footer />

            {/* Floating WhatsApp Button (Fixed on mobile/desktop for easy access) */}
            <div className="fixed bottom-6 right-6 z-40 md:hidden">
                <WhatsAppButton text="" size="large" ariaLabel="Conversar no WhatsApp" className="rounded-full w-14 h-14 !p-0 flex items-center justify-center shadow-green-500/40" showIcon={true} link={ARARAS_WHATSAPP_LINK} />
            </div>
        </div>
    );
}

export default Araras;
