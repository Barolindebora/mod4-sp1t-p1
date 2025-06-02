

import { motion } from 'framer-motion';
import { useState } from 'react';
import loloNuez from '../assets/loloNuez.png';
import nuecesia from '../assets/nuecesia.jpg';
import nuecesSueltas from '../assets/nuecesSueltas.jpg';
import confitadas from '../assets/confitadas.jpg';
import nuezParaLogo from '../assets/nuezParaLogo.png';



function Body() {
  return (
    <body>
      <div className="w-full h-screen relative overflow-hidden">
        {/* Fondo escritorio */}
        <div
          className="hidden md:block min-h-screen w-screen bg-no-repeat bg-cover object-contain bg-center "
          style={{ backgroundImage: `url(${nuecesia})` }}
        />
        {/* Fondo mobile */}
        <div
          className="block md:hidden w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${loloNuez})` }}
        />
        {/* Tarjetas */}
        <div className="absolute inset-0 mt-10  flex flex-col md:flex-row justify-center items-center gap-6 p-6">
          {/* Tarjeta 1 */}
          <div className="bg-[#3b2f2f]/20 backdrop-blur-md rounded-xl shadow-lg p-6 w-72 text-center text-white hover:scale-105 transition-transform">
            <img src={nuecesSueltas} alt="Nueces Sueltas" className="w-24 h-24 mx-auto mb-4 rounded-full" />
            <h2 className="text-xl font-bold mb-2">Nueces por KG</h2>
            <p className="text-sm">Paquetes por 1/4KG - 1/2KG - 1KG</p>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-[#3b2f2f]/20 backdrop-blur-md rounded-xl shadow-lg p-6 w-72 text-center text-white hover:scale-105 transition-transform">
            <img src={confitadas} alt="Nueces Confitadas" className="w-24 h-24 mx-auto mb-4 rounded-full" />
            <h2 className="text-xl font-bold mb-2">Nueces Confitadas</h2>
            <p className="text-sm">Deliciosas nueces rellenas con dulce de leche  cubiertas de azúcar.</p>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-[#3b2f2f]/20 backdrop-blur-md rounded-xl shadow-lg p-6 w-72 text-center text-white hover:scale-105 transition-transform">
            <img src={loloNuez} alt="Ordenar" className="w-24 h-24 mx-auto mb-4 rounded-full" />
            <h2 className="text-xl font-bold mb-2">Ordenar</h2>
            <a
              href="https://wa.me/549XXXXXXXXXX?text=Hola,%20quiero%20mis%20nueces!"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-md p-2 border-white border-2 inline-flex items-center gap-2"
            >
              <i className="bi bi-whatsapp"></i>
              <span className="text-l">Quiero mis nueces!!</span>
            </a>
          </div>
          

        </div>

      </div>
    </body>
  );
}

export default Body;