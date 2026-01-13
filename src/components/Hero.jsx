import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { Truck, CreditCard, MapPin, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden relative min-h-screen flex items-center">

            {/* Background Image with Purple Filter */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/botijaoherodesktop.png"
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                />
                {/* Purple Gradient Overlay */}
                <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-brand-purple/50"></div>
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    {/* Left Column: Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left z-20">

                        {/* "New Innovation" Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                            </span>
                            <span className="text-brand-cyan text-xs md:text-sm font-bold tracking-wider uppercase">Inovação em Uberlândia</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight text-white mb-6 tracking-tight"
                        >
                            Gás de Cozinha <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                                Parcelado no PIX
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-300 mb-8 font-light max-w-xl mx-auto md:mx-0 leading-relaxed"
                        >
                            Acabou o gás e a grana tá curta? Relaxa. <br className="hidden md:block" />
                            Peça agora e pague entrada + parcelas em <strong className="text-white">15 e 30 dias</strong>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                        >
                            <WhatsAppButton
                                size="large"
                                text="PEÇA AGORA PELO ZAP"
                                className="w-full sm:w-auto shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                            />
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Zap className="w-4 h-4 text-brand-cyan" />
                                <span>Aprovação Imediata</span>
                            </div>
                        </motion.div>

                        {/* Feature Pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 flex flex-wrap justify-center md:justify-start gap-3"
                        >
                            {[
                                { icon: Truck, text: "Entrega Rápida" },
                                { icon: Smartphone, text: "Tudo pelo Celular" },
                                { icon: CreditCard, text: "Sem Maquininha" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-navy border border-brand-purple/30 text-xs text-gray-300">
                                    <item.icon className="w-4 h-4 text-brand-purple" />
                                    {item.text}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;
