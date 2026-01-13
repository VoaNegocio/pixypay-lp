import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../config/contacts';

const WhatsAppButton = ({
    text = "QUERO PARCELAR AGORA",
    className = "",
    size = "normal",
    showIcon = true
}) => {
    const baseClasses = "inline-flex items-center justify-center font-bold tracking-wide rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 group";

    const sizeClasses = {
        normal: "px-6 py-3 text-sm md:text-base",
        large: "px-8 py-4 text-base md:text-xl",
    };

    const defaultColor = "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:from-[#128C7E] hover:to-[#075E54] animate-heartbeat shadow-green-500/40 border border-green-400/20";

    // Se className não tiver cor de fundo, usa o padrão
    const colorClass = className.includes('bg-') ? '' : defaultColor;

    return (
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${sizeClasses[size]} ${colorClass} ${className} relative overflow-hidden`}
        >
            {/* Simple Shine Effect on Hover */}
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>

            {showIcon && <MessageCircle className="w-5 h-5 mr-3 fill-current" />}
            <span className="relative z-10">{text}</span>
        </a>
    );
};

export default WhatsAppButton;
