import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { BadgeAlert, CheckCircle2 } from 'lucide-react';

const PainSolution = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
            {/* Background with blur effect to simulate "fogão vazio" atmosphere */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585257523192-353229b04fc9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center filter grayscale"></div>
                <div className="absolute inset-0 bg-gray-900/80"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* The Pain */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider text-sm">
                                <BadgeAlert size={18} />
                                <span>Problema</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                                Já passou aperto por não ter dinheiro pro gás?
                            </h2>
                            <p className="text-gray-300 text-lg">
                                Sabemos o desespero que é ver o gás acabar no meio do preparo da refeição e não ter como pedir outro na hora.
                            </p>
                        </div>

                        {/* The Solution */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl transform md:scale-105 border-l-4 border-brand-purple">
                            <div className="inline-flex items-center gap-2 text-green-600 font-bold uppercase tracking-wider text-sm mb-4">
                                <CheckCircle2 size={18} />
                                <span>Solução PixyPay</span>
                            </div>
                            <p className="text-gray-800 text-lg font-medium mb-6">
                                Com a PixyPay, você não precisa mais esperar o próximo salário.
                                <span className="block mt-2 font-bold text-brand-purple text-xl">
                                    A gente te ajuda a garantir o gás agora — e você paga com calma.
                                </span>
                            </p>
                            <WhatsAppButton text="QUERO AJUDA AGORA" className="w-full" size="normal" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainSolution;
