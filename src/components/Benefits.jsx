import React from 'react';
import { CreditCard, Clock, Home, ShieldCheck, HeartHandshake } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: CreditCard,
            color: "text-blue-300 bg-blue-500/20",
            title: "Pague em 3x via PIX",
            description: "Facilidade total: Entrada + 15 dias + 30 dias. Totalmente sem juros."
        },
        {
            icon: Clock,
            color: "text-green-300 bg-green-500/20",
            title: "Pedido rápido pelo WhatsApp",
            description: "Nada de formulários longos. É só chamar e pedir em 1 minuto."
        },
        {
            icon: Home,
            color: "text-purple-300 bg-purple-500/20",
            title: "Entrega garantida na sua casa",
            description: "Levamos até você em Uberlândia com toda segurança e rapidez."
        },
        {
            icon: ShieldCheck,
            color: "text-cyan-300 bg-cyan-500/20",
            title: "Compra segura, sem burocracia",
            description: "Processo transparente e simplificado para você não perder tempo."
        },
        {
            icon: HeartHandshake,
            color: "text-red-300 bg-red-500/20",
            title: "Suporte humanizado",
            description: "Dúvidas? Nossa equipe fala com você direto pelo Zap."
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">

            {/* Background Image with Purple Filter */}
            {/* Background Image with Purple Filter */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/botijao-hero-mobile.webp" />
                    <source media="(min-width: 769px)" srcSet="/botijao-hero-desktop.webp" />
                    <img
                        src="/botijao-hero-desktop.webp"
                        alt="Background PixyPay"
                        width="1920"
                        height="1080"
                        className="w-full h-full object-cover object-center translate-y-[20%] scale-110 blur-sm"
                        loading="lazy"
                    />
                </picture>
                {/* Purple Gradient Overlay */}
                <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-purple/40"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Por que pedir com a <span className="text-brand-cyan">PixyPay</span>?
                    </h2>
                    <p className="text-gray-100 max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
                        Facilitamos sua vida para que você nunca fique sem gás e sem dinheiro ao mesmo tempo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((item, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:bg-white/20 transition-all border border-white/20 flex flex-col items-center text-center md:items-start md:text-left md:flex-row gap-4 group">
                            <div className={`p-4 rounded-xl ${item.color} shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                                <item.icon size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">{item.title}</h3>
                                <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors font-medium">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
