import React from 'react'
import nuezparaLogo from '../assets/nuezParaLogo.png'
import { useState } from 'react'
import '../index.css'
import { motion } from 'framer-motion'

function Footer() {
    {/* Estado para los votos */}
 const [votos, setVotos] = useState({ solas: 0, confitadas: 0 });
 const votar = (tipo) => {//fincion para sumar los voto de la encuesta
    setVotos((prev) => ({
      ...prev,
      [tipo]: prev[tipo] + 1,
    }));
  };
   return (
    <footer className="flex flex-col items-center  text-black bg-amber-100  rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">¿Cómo preferís tus nueces?</h3>


         <motion.img
          src={nuezparaLogo}
          alt="Nuez encuesta"
          className="w-20 h-20 mt-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <div className="flex gap-4 mb-6 p-6">

          <button
    onClick={() => votar('solas')}
    className="bg-amber-950 text-white rounded-md px-4 py-2 w-40 flex flex-col items-center hover:bg-amber-800 transition"
  >
    <span>Solas </span>
    <p>{votos.solas}</p>
  </button>

  <button
    onClick={() => votar('confitadas')}
    className="bg-amber-950 text-white rounded-md px-4 py-2 w-40 flex flex-col items-center hover:bg-amber-800 transition"
  >
    <span>Confitadas </span>
    <p>{votos.confitadas}</p>
  </button>

        </div>



      </footer>

  );
}

export default Footer