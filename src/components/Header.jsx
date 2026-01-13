import React from 'react';
import { Flame } from 'lucide-react'; // Using Flame as a placeholder logo part

const Header = () => {
    return (
        <header className="w-full py-4 bg-white/90 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 flex justify-center md:justify-between items-center">
                {/* Logo Area */}
                <div className="flex items-center">
                    <img
                        src="/logopixypay.png"
                        alt="PixyPay Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </div>

                {/* Optional: Simple Contact/Action for Desktop */}
                <div className="hidden md:block text-sm font-semibold text-gray-600">
                    Entregas em Uberlândia - MG
                </div>
            </div>
        </header>
    );
};

export default Header;
