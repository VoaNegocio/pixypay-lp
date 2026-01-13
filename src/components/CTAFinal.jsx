import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const CTAFinal = () => {
    return (
        <section className="py-24 relative overflow-hidden text-center">

            {/* Background Image with Purple Filter */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/heroctafinal.png"
                    alt="Background"
                    className="w-full h-full object-cover object-center translate-y-[20%] scale-125 blur-sm"
                />
                {/* Purple Gradient Overlay */}
                <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-purple/40"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 drop-shadow-md">
                    Gás parcelado no PIX? <br />
                    É com a <span className="text-brand-cyan">PixyPay</span>.
                </h2>
                <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium drop-shadow">
                    Não fique na mão. Chame no WhatsApp e faça seu pedido agora mesmo com a facilidade que você merece.
                </p>

                <div className="flex justify-center">
                    <WhatsAppButton
                        text="FAZER PEDIDO AGORA"
                        size="large"
                        className="shadow-2xl scale-110 hover:scale-125 transition-transform"
                    />
                </div>

                <p className="mt-8 text-gray-400 text-sm">
                    Atendemos Uberlândia e região • Entrega Rápida
                </p>
            </div>
        </section>
    );
};

export default CTAFinal;
