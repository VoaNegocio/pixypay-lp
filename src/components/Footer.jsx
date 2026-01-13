import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm">
                    © {new Date().getFullYear()} PixyPay. Todos os direitos reservados.
                </div>

                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
