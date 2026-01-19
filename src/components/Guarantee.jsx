import React from 'react';
import { BadgeCheck } from 'lucide-react';

const Guarantee = () => {
    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 border border-green-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg shadow-green-500/30">
                            <BadgeCheck size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Garantia PixyPay</h3>
                            <p className="text-gray-600">Transparência total em cada pedido.</p>
                        </div>
                    </div>

                    <div className="h-px w-full md:w-px md:h-12 bg-gray-300 md:bg-green-200"></div>

                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-around gap-4 text-gray-700 font-medium">
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Sem taxas escondidas
                        </span>
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Aprovação do seu pedido em poucos segundos
                        </span>
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Simples e Descomplicado
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
