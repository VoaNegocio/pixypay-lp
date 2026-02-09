import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { Truck, CreditCard, MapPin, Zap, Smartphone, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <video
                        src={videoSrc}
                        className="w-full h-auto max-h-[80vh]"
                        controls
                        autoPlay
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const VideoThumbnail = ({ onClick, className = "" }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${className}`}
        onClick={onClick}
    >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-white fill-current ml-1" />
            </div>
        </div>
        <video
            src="/videos/videohero1.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        />
    </motion.div>
);

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="pt-28 pb-16 md:pt-48 md:pb-40 overflow-hidden relative min-h-screen flex items-center">

                {/* Background Image with Purple Filter */}
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/botijao-hero-mobile.webp" />
                        <source media="(min-width: 769px)" srcSet="/botijao-hero-desktop.webp" />
                        <img
                            src="/botijao-hero-desktop.webp"
                            alt="Background PixyPay"
                            fetchpriority="high"
                            width="1920"
                            height="1080"
                            className="w-full h-full object-cover object-center"
                        />
                    </picture>
                    {/* Purple Gradient Overlay */}
                    <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-brand-purple/50"></div>
                </div>

                <div className="container mx-auto px-4 z-10 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">

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

                            <h1
                                className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight text-white mb-8 tracking-tight"
                            >
                                Gás de Cozinha <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                                    Parcelado no PIX
                                </span>
                            </h1>

                            {/* MOBILE ONLY: Video between H1 and P */}
                            <div className="md:hidden mb-8 w-full max-w-[180px] mx-auto">
                                <VideoThumbnail onClick={() => setIsModalOpen(true)} className="aspect-[9/16] w-full" />
                            </div>

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
                                    text="Peça agora pelo WhatsApp"
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

                        {/* DESKTOP ONLY: Right Column Video */}
                        <div className="hidden md:block w-1/2 relative z-20">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex justify-center"
                            >
                                <VideoThumbnail
                                    onClick={() => setIsModalOpen(true)}
                                    className="aspect-[9/16] w-full max-w-[340px] shadow-[0_20px_50px_rgba(124,58,237,0.3)] transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                                />
                                {/* Decorative elements behind video */}
                                <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl"></div>
                                <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl"></div>
                            </motion.div>
                        </div>

                    </div>
                </div>

            </section>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoSrc="/videos/videohero1.mp4"
            />
        </>
    );
};

export default Hero;
